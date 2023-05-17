"use client";
import {
  Header,
  FeaturedProduct,
  ProductList,
  Pagination,
} from "@/app/components";
import { products } from "./data/data";
import Cart from "./components/cart/Cart";

export default function Home() {
  const featured = products.filter((product) => product.featured === true)[0];
  return (
    <main className="flex min-h-screen flex-col items-center p-3.5 gap-4">
      <Header />
      <FeaturedProduct product={featured} />
      <ProductList />
      <Pagination />
      <Cart />
    </main>
  );
}
