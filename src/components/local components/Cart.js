import Divider from "./Divider";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import PageBody from "./PageBody";
import PageLabel from "./PageLabel";

export default function Cart() {
  return (
    <PageBody className="grow">
      <PageLabel>My Cart.</PageLabel>
      <div className="lg:flex lg:flex-row lg:justify-between">
        <div className="lg:grow">
          <Product />
          <Product />
          <Product />
        </div>
        <Summary />
      </div>
      {/* <div className="flex flex-col justify-center items-center grow text-fade max-h-[500px]">
        <MdOutlineRemoveShoppingCart className="size-[200px] lg:size-[280px]" />
        <p className="font-siteMessage font-bold mt-2 text-[20px] lg:text-[30px]">
          Your cart is currently empty
        </p>
        <Button size="defaultResponsive" className="mt-10">
          Continue Shopping
        </Button>
      </div> */}
    </PageBody>
  );
}

function Product() {
  return (
    <>
      <div className="flex flex-row mx-2 my-4">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt=""
          className="h-[150px] mr-2"
        ></img>
        <div className="flex flex-col grow justify-between">
          <div className="flex font-secondary flex-col lg:flex-row lg:justify-between">
            <p>Mens Casual Premium Slim Fit T-Shirts</p>
            <div className="flex flex-col lg:text-right">
              <span>$22.3</span>
              <span>Quantity: 1</span>
            </div>
          </div>
          <div className="flex w-auto lg:justify-end">
            <Button className="h-6 w-full lg:w-[150px]" variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

function Summary() {
  return (
    <div className="flex flex-col justify-between m-3 grow lg:w-[350px] lg:flex-none lg:bg-white lg:p-5 lg:drop-shadow-xl lg:rounded-2xl">
      <div className="mb-2">
        <p className="font-primary text-[30px] lg:text-center lg:text-[35px] lg:mb-5">
          Order Summary
        </p>
        <SpreadText label="Total items:" value="2" />
        <SpreadText label="Subtotal:" value="$44.6" />
        <SpreadText label="Order Total:" value="$44.6" />
        {/* <p className="font-secondary text-[18px]">Total items:</p>
        <p className="font-primary text-[30px]">Order Summary</p> */}
      </div>
      <div className="flex flex-col gap-2">
        <Button className="w-auto">Proceed To Checkout</Button>
        <Button className="w-auto" variant="secondary">
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}

function SpreadText({ label, value }) {
  return (
    <div className="flex flex-row justify-between text-[20px]">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}
