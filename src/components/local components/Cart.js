import Divider from "./Divider";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import PageBody from "./PageBody";
import PageLabel from "./PageLabel";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

export default function Cart({ addToCart, removeFromCart }) {
  const cartItems = useContext(CartContext);

  return (
    <PageBody className="grow">
      <PageLabel>My Cart.</PageLabel>

      {Boolean(cartItems.length) ? (
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="lg:grow">
            {cartItems.map((item, index) => (
              <Product
                key={index}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <Summary cartItems={cartItems} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center grow text-fade max-h-[500px]">
          <MdOutlineRemoveShoppingCart className="size-[200px] lg:size-[280px]" />
          <p className="font-siteMessage font-bold mt-2 text-[20px] lg:text-[30px]">
            Your cart is currently empty
          </p>
          <Link to="/">
            <Button size="defaultResponsive" className="mt-10">
              Continue Shopping
            </Button>
          </Link>
        </div>
      )}
    </PageBody>
  );
}

function Product({ item, addToCart, removeFromCart }) {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  return (
    <>
      <div className="flex flex-row mx-2 my-4">
        <div className="flex items-center justify-center flex-none w-[150px] min-h-[200px] mr-2">
          <img src={item.image} alt="" className="w-full"></img>
        </div>
        <div className="flex flex-col grow justify-between">
          <div className="flex font-secondary flex-col lg:flex-row lg:justify-between">
            <p>{item.title}</p>
            <div className="flex flex-col lg:text-right">
              <span>{"$" + item.price}</span>
              <span>
                Quantity:{" "}
                <Input
                  className="w-14 bg-white drop-shadow-sm"
                  value={quantity}
                  min="1"
                  type="number"
                  onChange={(e) => addToCart(item, e.target.value)}
                />
              </span>
            </div>
          </div>
          <div className="flex w-auto lg:justify-end">
            <Button
              className="h-6 w-full lg:w-[150px]"
              variant="destructive"
              onClick={() => removeFromCart(item.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
function Summary({ cartItems }) {
  return (
    <div className="flex flex-col justify-between m-3 grow lg:h-[500px] lg:w-[350px] lg:flex-none lg:bg-white lg:p-5 lg:drop-shadow-xl lg:rounded-2xl">
      <div className="mb-2">
        <p className="font-primary text-[30px] lg:text-center lg:text-[35px] lg:mb-5">
          Order Summary
        </p>
        <SpreadText
          label="Total items:"
          value={cartItems.reduce((prev, next) => prev + next.quantity, 0)}
        />
        <SpreadText
          label="Subtotal:"
          value={
            Math.round(
              (cartItems.reduce(
                (prev, next) => prev + next.price * next.quantity,
                0
              ) +
                Number.EPSILON) *
                100
            ) / 100
          }
        />
        <SpreadText
          label="Total:"
          value={
            Math.round(
              (cartItems.reduce(
                (prev, next) => prev + next.price * next.quantity,
                0
              ) +
                Number.EPSILON) *
                100
            ) / 100
          }
        />
        {/* <p className="font-secondary text-[18px]">Total items:</p>
        <p className="font-primary text-[30px]">Order Summary</p> */}
      </div>
      <div className="flex flex-col gap-2">
        <Button className="w-auto">Proceed To Checkout</Button>
        <Link to="/" className="w-full">
          <Button className="w-full" variant="secondary">
            Continue Shopping
          </Button>
        </Link>
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
