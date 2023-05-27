import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
  startAfter,
  startAt,
} from "firebase/firestore";

import { db } from "./config";

import { Product } from "@/types";

const productsCollectionRef = collection(db, "products");

export const getProductsFromFirebase = async (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  let productsQuery = query(productsCollectionRef, limit(6));

  if (searchParams) {
    if (searchParams.price) {
      if (searchParams.price === "Lower than $20") {
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
      } else if (searchParams.price === "More than $200") {
        productsQuery = query(
          productsQuery,
          where("price", ">=", 200),
          limit(6)
        );
      }
    }

    if (searchParams.category) {
      let elements: string[] = [];
      if (!Array.isArray(searchParams.category)) {
        elements = searchParams.category.split("|");
      }

      productsQuery = query(
        productsQuery,
        where("category", "in", elements),
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
      const pageNumber = !Array.isArray(searchParams.page)
        ? parseInt(searchParams.page, 10)
        : parseInt("0", 10);
      const startIndex = (pageNumber - 1) * 6;
      productsQuery = query(
        productsQuery,
        orderBy("price"),
        orderBy("id"),
        startAt(startIndex),
        limit(6)
      );
    }
  }

  const data = await getDocs(productsQuery);
  const products: Product[] = data.docs.map((doc) => doc.data() as Product);

  return { products };
};

export const getFeaturedPost = async () => {
  let productsQuery = query(productsCollectionRef);

  productsQuery = query(productsQuery, where("featured", "==", true));

  const data = await getDocs(productsQuery);
  const featured: Product[] = data.docs.map((doc) => doc.data() as Product);

  return featured[0];
};
