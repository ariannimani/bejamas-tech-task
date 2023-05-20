import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "./config";

import {
  categorizePrices,
  getDistinctCategoriesFromArray,
  sortArrayById,
} from "@/utils/utils";

import { Product } from "@/types";

const productsCollectionRef = collection(db, "products");

export async function getDistinctCategories() {
  const data = await getDocs(productsCollectionRef);
  const products: Product[] = data.docs.map((doc) => doc.data() as Product);
  const categories = getDistinctCategoriesFromArray(products);
  const prices = categorizePrices(products);
  const sortedPrices = sortArrayById(prices);
  return { categories, prices: sortedPrices };
}

export async function getPages(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  let productsQuery = query(productsCollectionRef);
  if (searchParams) {
    if (searchParams.price) {
      productsQuery = query(
        productsQuery,
        where("price", "<=", searchParams.price)
      );
    }
    if (searchParams.category) {
      let elements: string[] = [];
      if (!Array.isArray(searchParams.category)) {
        elements = searchParams.category.split("|");
      }

      productsQuery = query(productsQuery, where("category", "in", elements));
    }
  }
  const data = await getDocs(productsQuery);
  const products: Product[] = data.docs.map((doc) => doc.data() as Product);
  const pages = Math.ceil(products.length / 6);
  return { pages };
}
