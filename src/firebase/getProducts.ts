import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
  startAfter,
} from "firebase/firestore";

import { db } from "./config";
import { products } from "./data";

import { Product } from "@/types";

const productsCollectionRef = collection(db, "products");

export const getProductsFromFirebase = async (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  let productsQuery = query(productsCollectionRef, limit(6));

  if (searchParams) {
    if (searchParams.price) {
      if (searchParams.price === "lower than $20") {
        productsQuery = query(
          productsQuery,
          where("price", "<=", 20),
          limit(6)
        );
      } else if (searchParams.price === "$20 - $100") {
        productsQuery = query(
          productsQuery,
          where("price", ">=", 20),
          where("price", "<=", 100),
          limit(6)
        );
      } else if (searchParams.price === "$100 - $200") {
        productsQuery = query(
          productsQuery,
          where("price", ">=", 100),
          where("price", "<=", 200),
          limit(6)
        );
      } else if (searchParams.price === "more than $200") {
        productsQuery = query(
          productsQuery,
          where("price", ">=", 200),
          limit(6)
        );
      }
    }

    if (searchParams.category) {
      productsQuery = query(
        productsQuery,
        where("category", "==", searchParams.category),
        limit(6)
      );
    }
    if (searchParams.sort === "desc") {
      productsQuery = query(productsQuery, orderBy("price", "desc"), limit(6));
    }
    if (searchParams.sort === "asc") {
      productsQuery = query(productsQuery, orderBy("price", "asc"), limit(6));
    }

    if (searchParams.page) {
      const documentSnapshots = await getDocs(productsQuery);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      productsQuery = query(productsQuery, startAfter(lastVisible), limit(6));
    }
  }

  const data = await getDocs(productsQuery);
  const products: Product[] = data.docs.map((doc) => doc.data() as Product);

  return { products };
};

export const addProducts = () => {
  const data = products;
  data.forEach((product) => addDoc(productsCollectionRef, product));
};

export const getFeaturedPost = async () => {
  let productsQuery = query(productsCollectionRef);

  productsQuery = query(productsQuery, where("featured", "==", true));

  const data = await getDocs(productsQuery);
  const featured: Product[] = data.docs.map((doc) => doc.data() as Product);

  return featured[0];
};
