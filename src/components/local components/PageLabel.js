import Divider from "./Divider";
import { cn } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";

export default function PageLabel({ children, className, type }) {
  return (
    <div className={cn(className)}>
      <div className="flex flex-row justify-between items-end">
        <h1 className="font-primary text-[81px] flex-none lg:text-[120px] lg:leading-tight">
          {children}
        </h1>
        {type === "withDropdown" && (
          <DropdownBuilder options={["Name", "Price", "Ratings"]} />
        )}
      </div>
      <Divider />
    </div>
  );
}

function DropdownBuilder({ options }) {
  const [sortType, setSortType] = useState("Name");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="invisible"
          size="tight"
          className="font-secondary font-semibold"
        >
          Sort by: {sortType}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="font-secondary font-semibold"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {options.map((option) => (
          <DropdownMenuItem onClick={() => setSortType(option)}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
