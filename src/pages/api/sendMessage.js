import axios from "axios";
import admin from "firebase-admin";

const serviceAccount = {
  type: "service_account",
  project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(
    /\\n/g,
    "\n"
  ), // Ensure multiline private key works
  client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-r0gpn%40minimal-portfolio-d4c70.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

const db = admin.database();

const BOT_TOKEN = "7041633220:AAHvUaNK5bFOBTYU8-JAoa4B8dOx1HQPhk0"; // Replace with your bot token
const CHAT_ID = "1561267066"; // Replace with your chat ID

const sendMessage = async (text) => {
  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default async function handler(req, res) {
  const { chatId } = req.query;
  const { content } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach user info to request object

    const chatMessagesRef = db.ref(`chats/${chatId}/messages`);
    await chatMessagesRef.push({
      content,
      sender: decodedToken["user_id"],
      timestamp: new Date().getTime(),
    });

    if (decodedToken.email !== "shareef.banjar@gmail.com") {
      sendMessage(`You got a message from ${decodedToken.email}: ${content}`);
    }

    res.status(200).send("ok");
  } catch (error) {
    console.error("Token validation error:", error.message);
    res.status(401).send("Unauthorized: Invalid token");
  }

  res.status(200).json({});
}
