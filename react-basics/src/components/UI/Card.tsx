import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <div className={["card", className].join(" ")}>{children}</div>;
};

export default Card;
