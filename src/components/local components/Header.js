import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const categories = ["CLOTHING", "ACCESSORIES", "BAGS", "TECH"];

export default function Header() {
  return (
    <div className="flex-none">
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
    <div className="h-[90px] w-auto bg-primary drop-shadow-md overflow-hidden flex flex-col content-center lg:flex-row lg:relative">
      <div className="flex mx-5 max-lg:mt-2 max-lg:justify-center lg:absolute lg:top-2">
        <button>
          <h1 className="font-logo text-[40px] leading-none text-secondary-darker lg:text-[71px]">
            Buyee
          </h1>
        </button>
      </div>
      <div className="max-h-min w-screen flex justify-around items-end lg:justify-between lg:mx-[350px]">
        {categories.map((category) => (
          <CategoryButton title={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryButton({ title }) {
  return (
    <button className="font-primary text-categories h-fit mx-1 text-secondary-darker lg:mx-5">
      {title}
    </button>
  );
}
