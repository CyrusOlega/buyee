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
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home({ shopResponse }) {
  const [bannerImage, setBannerResponse] = useState("");

  useEffect(() => {
    const fetchBannerImages = async () => {
      let data = await fetch(
        "https://pixabay.com/api/?key=43949710-0df581ec3ef538e328f5af11a&q=fashion&orientation=horizontal&category=people&min_width=1920&min_height=1920"
      ).then((res) => res.json());

      let randomNum = Math.floor(Math.random() * data.hits.length);

      setBannerResponse(data.hits[randomNum].largeImageURL);
    };

    fetchBannerImages();
  }, []);

  return (
    <PageBody className="h-full">
      <Banner bannerResponse={bannerImage} />
      <div className="flex justify-center items-center py-1 pb-0 grow">
        <Carousel
          className="w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1170px]"
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {shopResponse &&
              shopResponse.map((res, index) => (
                <CarouselItemsingle key={index} image={res.image} />
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </PageBody>
  );
}

function Banner({ bannerResponse }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative h-[400px] min-h-[200px] overflow-hidden">
      <div
        style={{
          backgroundImage: `url('${bannerResponse}')`,
        }}
        className="flex h-full bg-local bg-center bg-cover side-fade absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full px-8 max-w-[1500px]"
      ></div>
      <form onSubmit={() => navigate("/search/?query=" + query)}>
        <div className="flex flex-col justify-center items-center bg-transparent absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full px-8 md:w-[700px]">
          <Input
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white drop-shadow-lg mb-5 font-secondary"
            placeholder="Search..."
          />
          <span className="font-secondary text-white text-[30px] text-shadow-mobile md:text-[60px] text-shadow-desktop">
            It's your choice.
          </span>
        </div>
      </form>
    </div>
  );
}

function CarouselItemsingle({ image }) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <Card className="flex justify-center items-center h-[320px] w-[280px]">
        <img src={image} alt="" className="max-h-full p-5"></img>
      </Card>
    </CarouselItem>
  );
}
