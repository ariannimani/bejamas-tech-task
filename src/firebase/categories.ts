import { collection, getDocs } from "firebase/firestore";
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
  const pages = Math.ceil(products.length / 6);
  return { categories, prices: sortedPrices, pages };
}
