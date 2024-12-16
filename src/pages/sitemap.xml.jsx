function generateSiteMap() {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://syarifd.com</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>https://syarifd.com/info</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>yearly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>https://syarifd.com/contact</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>never</changefreq>
       <priority>0.5</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
