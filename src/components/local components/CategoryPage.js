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
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Ratings from "./Ratings";

export default function CategoryPage({ category }) {
  const [shopResponse, setShopResponse] = useState("");
  const [sortType, setSortType] = useState("Name");
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");

  useEffect(() => {
    setSortType("Name");
    setQueryResult("");
    setQuery("");
    setShopResponse("");

    const fetchShopData = async () => {
      let data = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );

      let filteredData = data.filter(
        (d) => d.category === category.toLowerCase()
      );
      console.log(filteredData);

      setShopResponse(filteredData);
    };

    fetchShopData();
  }, [category]);

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

  const searchItems = (e) => {
    e.preventDefault();
    var searchedItems = [...shopResponse];
    // console.log(searchedItems[1].title.toLowerCase());
    // console.log(e.target[0].value.toLowerCase());

    setQueryResult(
      searchedItems.filter((item) =>
        item.title.toLowerCase().includes(e.target[0].value.toLowerCase())
      )
    );
  };

  return (
    <PageBody>
      <PageLabel
        sortType={sortType}
        setSortType={setSortType}
        type="withDropdown"
      >
        {category + "."}
      </PageLabel>
      <form classname="" onSubmit={(e) => searchItems(e)}>
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
        {queryResult !== ""
          ? queryResult.map((result, index) => (
              <ProductCard key={index} info={result} />
            ))
          : shopResponse &&
            shopResponse.map((d, index) => (
              <ProductCard key={index} info={d} />
            ))}
      </div>
    </PageBody>
  );
}
