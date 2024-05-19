import { cn } from "../../lib/utils";

export default function PageBody({ children, className }) {
  return (
    <div className={cn("flex flex-col p-3 pt-0", className)}>{children}</div>
  );
}
