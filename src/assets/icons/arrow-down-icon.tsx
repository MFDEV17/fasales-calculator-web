import { cn } from "../../service/utils/cn.ts";
import * as React from "react";

const ArrowDownIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
}) => {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 stroke-current text-test-hint", className)}
    >
      <path
        d="M13 1.5L7 7.5L1 1.5"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
