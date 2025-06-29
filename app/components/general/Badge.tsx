import React from "react";

type BadgeProps = {
  text: string;
  classname?: string;
};

const Badge = ({ text, classname }: BadgeProps) => {
  return (
    <span
      className={`py-[1px] px-3 rounded-3xl grid place-items-center ${classname}`}
    >
      {text}
    </span>
  );
};

export default Badge;
