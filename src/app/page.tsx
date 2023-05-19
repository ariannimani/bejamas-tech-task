import {
  Header,
  FeaturedProduct,
  ProductList,
  Pagination,
} from "@/app/components";
import { getCartItems } from "@/firebase/cartFunctions";
import { products } from "@/firebase/data";
import {
  getFeaturedPost,
  getProductsFromFirebase,
} from "@/firebase/getProducts";
import { Suspense } from "react";

export const fetchCache = "force-no-store";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getProductsFromFirebase(searchParams);
  const featured = await getFeaturedPost();
  const cartItems = await getCartItems();

  if (!data) return <></>;

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 px-3.5 md:px-20">
      <Header />
      <Suspense fallback={<p>Loading featured...</p>}>
        <FeaturedProduct product={featured} />
      </Suspense>
      <Suspense fallback={<p>Loading products...</p>}>
        {/* @ts-expect-error Server Component */}
        <ProductList products={data} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
