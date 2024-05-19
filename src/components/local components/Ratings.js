import { VscStarFull } from "react-icons/vsc";
import { VscStarEmpty } from "react-icons/vsc";
import { cn } from "../../lib/utils";

export default function Ratings({ score, size }) {
  return (
    <div className="flex flex-row">
      {Array.from({ length: score }).map((_, index) => (
        <VscStarFull
          key={index}
          color="hsl(var(--primary))"
          className={cn("size-8", size)}
        />
      ))}
      {Array.from({ length: 6 - score }).map((_, index) => (
        <VscStarEmpty
          key={index}
          color="hsl(var(--primary))"
          className={cn("size-8", size)}
        />
      ))}
    </div>
  );
}
