import { IconContext } from "react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const categories = ["CLOTHING", "ACCESSORIES", "BAGS", "TECH"];

export default function Header() {
  return (
    <div className="h-auto sm">
      <TopHeader />
      <BulkHeader />
    </div>
  );
}

function TopHeader() {
  return (
    <div className="h-[45px] w-auto bg-secondary flex justify-end">
      <div className="flex flex-row h-full w-fit items-center justify-between">
        <button className="bg-transparent ml-5">
          <Avatar className="size-8">
            <AvatarImage src="" alt="" />
            <AvatarFallback>
              <MdOutlineShoppingCart />
            </AvatarFallback>
          </Avatar>
        </button>
        <button className="bg-transparent mx-5">
          <Avatar className="size-8">
            <AvatarImage src="" alt="" />
            <AvatarFallback>
              <AiOutlineUser />
            </AvatarFallback>
          </Avatar>
        </button>
      </div>
    </div>
  );
}

function BulkHeader() {
  return (
    <div className="h-[90px] w-auto bg-primary drop-shadow-md overflow-hidden flex flex-row content-center relative">
      <div className="flex mx-5 absolute top-2">
        <button>
          <h1 className="text-9xl font-logo text-[71px] leading-none text-secondary-darker">
            Buyee
          </h1>
        </button>
      </div>
      <div className="max-h-min w-screen flex justify-between mx-[350px] items-end">
        {categories.map((category) => (
          <CategoryButton title={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryButton({ title }) {
  return (
    <button className="font-primary text-categories h-fit mx-5 text-secondary-darker">
      {title}
    </button>
  );
}
