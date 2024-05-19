import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

export default function ProductCard({ info }) {
  return (
    <Card className="max-w-[250px] relative">
      <div className="absolute top-2 right-2">
        <Ratings score={info.rating.rate} size="size-6" />
      </div>
      <Link to={"/product/" + info.id} className="h-full flex flex-col">
        <CardContent className="flex flex-col grow items-center justify-center h-[70%] px-2 pb-0 md:px-6">
          <img src={info.image} alt="" className="max-h-full p-2"></img>
        </CardContent>
        <CardHeader className="pt-0">
          <CardTitle className="font-secondary text-[13px] text-center font-semibold md:text-[16px]">
            {info.title}
          </CardTitle>
        </CardHeader>
        <CardFooter className="font-secondary font-semibold text-[15px] justify-center p-1 pt-0 md:text-[20px]">
          {"$" + info.price}
        </CardFooter>
      </Link>
    </Card>
  );
}
