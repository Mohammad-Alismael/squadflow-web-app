import clsx from "clsx";
import React from "react";
type PropsType = {
  className: string;
};
const Card = ({
  className,
  children,
  ...props
}: React.PropsWithChildren<PropsType>) => {
  return (
    <div
      className={clsx("rounded-xl px-10 py-4 drop-shadow bg-white", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
