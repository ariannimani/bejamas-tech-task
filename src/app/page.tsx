import { Suspense } from "react";

import { getFeaturedPost } from "@/firebase/getProducts";

import { Header, FeaturedProduct, ProductList } from "@/app/components";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const featured = await getFeaturedPost();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 px-3.5 md:px-20">
      <Header />
      <Suspense fallback={<p>Loading featured...</p>}>
        <FeaturedProduct product={featured} />
      </Suspense>
      <Suspense fallback={<p>Loading products...</p>}>
        {/* @ts-expect-error Server Component */}
        <ProductList searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
