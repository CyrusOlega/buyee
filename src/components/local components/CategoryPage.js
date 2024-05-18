import PageLabel from "./PageLabel";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PageBody from "./PageBody";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CategoryPage() {
  return (
    <PageBody>
      <PageLabel type="withDropdown">Clothing.</PageLabel>
      <div className="flex flex-row justify-center items-center my-3 max-w-[700px] font-secondary">
        <Input placeholder="Search..." className="bg-white" />
        <Button size="icon">icon</Button>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductItem key={index} />
        ))}
      </div>
    </PageBody>
  );
}

function ProductItem() {
  return (
    <Card className="max-w-[250px] md:max-w-[250px]">
      <CardContent className="px-2 pb-0 md:px-6">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt=""
          className="h-full p-5"
        ></img>
      </CardContent>
      <CardHeader className="pt-0">
        <CardTitle className="font-secondary text-[13px] text-center font-semibold md:text-[18px]">
          Mens Casual Premium Slim Fit T-Shirts
        </CardTitle>
      </CardHeader>
      <CardFooter className="font-secondary font-semibold text-[15px] justify-center p-1 pt-0 md:text-[20px]">
        $22.3
      </CardFooter>
    </Card>
  );
}
