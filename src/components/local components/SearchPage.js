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
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchPage() {
  const [shopResponse, setShopResponse] = useState("");
  const [sortType, setSortType] = useState("Name");
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchShopData = async () => {
      let data = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );

      setShopResponse(data);
    };

    if (searchParams.size > 0) {
      setQuery(searchParams.get("query"));
    }

    fetchShopData();
  }, []);

  useEffect(() => {
    var newItems = [...shopResponse];
    var filteredData = null;

    if (sortType === "Price") {
      filteredData = newItems.sort((a, b) => a.price - b.price);
    } else if (sortType === "Ratings") {
      filteredData = newItems.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortType === "Name") {
      filteredData = newItems.sort((a, b) => a.title.localeCompare(b.title));
    }

    setShopResponse(filteredData);
  }, [sortType]);

  useEffect(() => {
    var responseCopy = [...shopResponse];
    console.log(searchParams);

    if (searchParams.size > 0) {
      setQueryResult(
        responseCopy.filter((item) =>
          item.title
            .toLowerCase()
            .includes(searchParams.get("query").toLowerCase())
        )
      );
    }
  }, [shopResponse]);

  useEffect(() => {
    var responseCopy = [...shopResponse];
    console.log(searchParams);

    if (searchParams.size > 0) {
      setQueryResult(
        responseCopy.filter((item) =>
          item.title
            .toLowerCase()
            .includes(searchParams.get("query").toLowerCase())
        )
      );
    }
  }, [searchParams]);

  return (
    <PageBody>
      <PageLabel
        sortType={sortType}
        setSortType={setSortType}
        type="withDropdown"
      >
        Search.
      </PageLabel>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({ query: e.target[0].value });
        }}
      >
        <div className="flex flex-row justify-center items-center my-3 max-w-[700px] font-secondary">
          <Input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="bg-white"
            value={query}
          />
          <Button size="icon" type="submit">
            <FaSearch />
          </Button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {queryResult &&
          queryResult.map((result, index) => (
            <ProductItem key={index} info={result} />
          ))}
      </div>
    </PageBody>
  );
}

function ProductItem({ info }) {
  return (
    <Card className="max-w-[250px]">
      <Link to="/" className="h-full flex flex-col">
        <CardContent className="flex grow items-center justify-center h-[70%] px-2 pb-0 md:px-6">
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
