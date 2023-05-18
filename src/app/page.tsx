import {
  Header,
  FeaturedProduct,
  ProductList,
  Pagination,
} from "@/app/components";
import { products } from "@/firebase/data";
import {
  getFeaturedPost,
  getProductsFromFirebase,
} from "@/firebase/getProducts";

export const revalidate = 1;

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getProductsFromFirebase(searchParams);
  const featured = await getFeaturedPost();

  if (!data) return <></>;

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <Header />
      <FeaturedProduct product={featured} />
      {/* @ts-expect-error Server Component */}
      <ProductList products={data} searchParams={searchParams} />
    </main>
  );
}
