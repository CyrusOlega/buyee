import { Button } from "../ui/button";
import PageBody from "./PageBody";
import Ratings from "./Ratings";
import { Input } from "../ui/input";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../App";
import { useToast } from "../ui/use-toast";

function Details({ addToCart }) {
  const [item, setItem] = useState("");
  const { id } = useParams();
  const [quantity, setQuantity] = useState("1");
  const cartItems = useContext(CartContext);
  const [addedToCart, setItemState] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchItem = async () => {
      let data = await fetch("https://fakestoreapi.com/products/" + id).then(
        (res) => res.json()
      );

      setItem(data);
    };

    fetchItem();

    if (cartItems.some((ct) => ct.id === parseInt(id))) {
      setItemState(true);
      setQuantity(cartItems.filter((ct) => ct.id === parseInt(id))[0].quantity);
    }
  }, []);

  return (
    <PageBody className="pt-10">
      <div className="flex flex-col justify-center items-center h-[300px] lg:h-[70%]">
        <img
          src={item.image}
          alt=""
          className="h-full lg:h-full lg:p-5 lg:my-0"
        ></img>
      </div>
      <div className="justify-end">
        <div className="flex flex-col items-center justify-center mt-5 mb-6">
          <p className="text-product font-primary text-center leading-none">
            {item.title}
          </p>

          {item && <Ratings score={Math.round(item.rating.rate)} />}
        </div>
        <div className="flex flex-col">
          <span>{item.description}</span>
          {item && (
            <p className="text-[40px] font-primary">{"$" + item.price}</p>
          )}
          <div className="mb-10">
            <p className="font-primary text-[40px]">Quantity:</p>
            <Input
              min="1"
              className="w-[50px] bg-white drop-shadow-sm"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              addToCart(item, e.target[1].value);
            }}
          >
            <Button
              className="w-full"
              type="submit"
              onClick={() => toast({ description: "Added item!" })}
            >
              {addedToCart ? <>Update cart</> : <>Add to cart</>}
            </Button>
            <input type="hidden" value={quantity} id="quantity" />
          </form>
        </div>
      </div>
    </PageBody>
  );
}

export default Details;
