import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const categories = [
  "MEN'S CLOTHING",
  "WOMEN'S CLOTHING",
  "JEWELERY",
  "ELECTRONICS",
];

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
        <Link className="bg-transparent ml-5" to="/cart">
          <Avatar className="size-8">
            <AvatarImage src="" alt="" />
            <AvatarFallback>
              <MdOutlineShoppingCart />
            </AvatarFallback>
          </Avatar>
        </Link>
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
      <div className="grow flex mx-5 max-lg:mt-2 max-lg:justify-center lg:absolute lg:top-2">
        <Link to="/">
          <h1 className="font-logo text-[40px] leading-none text-secondary-darker lg:text-[71px]">
            Buyee
          </h1>
        </Link>
      </div>
      <div className="max-h-min w-screen flex justify-around items-end lg:justify-between lg:mx-[20%]">
        {categories.map((category, index) => (
          <CategoryButton title={category} key={index} />
        ))}
      </div>
    </div>
  );
}

function CategoryButton({ title }) {
  return (
    <Link
      className="font-primary text-[22px] h-fit mx-1 text-secondary-darker lg:mx-2 lg:text-[30px]"
      to={"/" + title.toLowerCase()}
    >
      {title}
    </Link>
  );
}
