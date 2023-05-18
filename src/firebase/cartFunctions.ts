import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./config";

const cartCollectionRef = collection(db, "cart");

export const addToCart = (data: any) => {
  addDoc(cartCollectionRef, data).catch((error) => {
    console.log(error);
  });
};

export const getCartItems = async () => {
  const data = await getDocs(cartCollectionRef);
  const cartItems = data.docs.map((doc) => doc.data());
  return cartItems;
};

export const clearCartItems = async () => {
  const data = await getDocs(cartCollectionRef);
  const deletionPromises: any[] = [];

  data.forEach((doc) => {
    const deletionPromise = deleteDoc(doc.ref);
    deletionPromises.push(deletionPromise);
  });

  await Promise.all(deletionPromises);
};
