import clsx from "clsx";

const classNames = {
  primary: "font-semibold text-4xl tracking-tight",
  secondary: "font-semibold text-2xl tracking-tight",
  tertiary: "font-semibold text-xl tracking-tight",
};

export function Title({
  children,
  as = "span",
  variant = "primary",
  className,
}) {
  const Component = as;
  return (
    <Component className={clsx(classNames[variant], className)}>
      {children}
    </Component>
  );
}
