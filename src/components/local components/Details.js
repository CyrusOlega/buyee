import { Card } from "../ui/card";
import { VscStarFull } from "react-icons/vsc";
import { Button } from "../ui/button";

function Details() {
    return (
        <>
        <div className="lg:flex lg:flex-row lg:justify-between mx-20 my-10">
        <div className="flex flex-row mx-10 h-[35%] lg:h-[70%]">
          <img
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            alt=""
            className="lg:h-full lg:p-5 lg:my-0 h-[500px] my-20"
          ></img>
        </div>
        <div className="my-10 mx-10 justify-end">
            <p class="text-product font-primary ">Mens Casual Premium Slim Fits T-Shirt</p>
            <div class="text-product flex">
            <VscStarFull color="yellow"/>
            <VscStarFull color="yellow"/>
            <VscStarFull color="yellow"/>
            <VscStarFull color="yellow"/>
            <VscStarFull color="yellow"/>
            </div>
            <p class="text-product"><span>$22.3</span></p>
            <br/>
            <p class="font-secondary"><span>Great outerwear jackets for Spring/Autumn/Winter, suitable for many</span></p>
            <p class="font-secondary"><span>ocassions such as working, hiking, camping, mountain/rock</span></p>
            <p class="font-secondary"><span>climbing, cycling, traveling or other outdoors. Good gift choice for</span></p>
            <p class="font-secondary"><span>you or your family member. A warm hearted love to Father, husband</span></p>
            <p class="font-secondary"><span>or son this thanksgiving or Christmas Day.</span></p>

            <br/><br/><br/><br/>

            <p class="text-categories font-primary">Quantity: 1</p>
            <div className="flex flex-col gap-2">
        <Button className="w-auto">ADD TO CART</Button>

        </div>
        </div>
        </div>
        </>
    );
  }

  export default Details;