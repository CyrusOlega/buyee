import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Input } from "../ui/input";
import Autoplay from "embla-carousel-autoplay";
import PageBody from "./PageBody";

export default function Home() {
  return (
    <PageBody className="h-full">
      <div className="relative h-[400px] min-h-[200px] overflow-hidden">
        <div className="flex h-full bg-local bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg')] side-fade absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full px-8 max-w-[1500px]"></div>
        <div className="flex flex-col justify-center items-center bg-transparent absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full px-8 md:w-[700px]">
          <Input
            className="bg-white drop-shadow-lg mb-5 font-secondary"
            placeholder="Search..."
          />
          <span className="font-secondary text-white text-[30px] text-shadow-mobile md:text-[60px] text-shadow-desktop">
            It's your choice.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center py-2 grow">
        <Carousel
          className="w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1170px]"
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItemsingle key={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </PageBody>
  );
}

function CarouselItemsingle() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <Card className="flex justify-center items-center h-[320px] w-[280px]">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt=""
          className="h-full p-5"
        ></img>
      </Card>
    </CarouselItem>
  );
}
