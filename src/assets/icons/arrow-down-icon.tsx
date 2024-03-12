import { cn } from "../../service/utils/cn.ts";

const ArrowDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-test-hint size-4 stroke-current", className)}
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
