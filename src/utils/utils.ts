import { Product } from "@/types";

export function kilobytesToMegabytes(kilobytes: number) {
  const megabytes = kilobytes / 1024;
  const roundedMegabytes = Math.round(megabytes);
  return `${roundedMegabytes}MB`;
}

export function capitalizeFirstLetter(str: string) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertToCurrency(currency: string, amount: number) {
  let symbol;

  switch (currency) {
    case "GBP":
      symbol = "£";
      break;
    case "EUR":
      symbol = "€";
      break;
    case "USD":
    default:
      symbol = "$";
      break;
  }

  return symbol + amount.toFixed(2);
}

export function getDistinctCategoriesFromArray<T extends { category?: string }>(
  dataArray: T[]
): string[] {
  const categories = new Set<string>();

  dataArray.forEach((item) => {
    if (item.category) {
      categories.add(item.category);
    }
  });

  return Array.from(categories);
}

export function categorizePrices<T extends { price: number }>(
  priceArray: T[]
): { id: number; category: string; prices: number[] }[] {
  const categories: { id: number; category: string; prices: number[] }[] = [];

  priceArray.forEach((item) => {
    const { price } = item;
    let category = "";
    let id = 0;

    if (price < 20) {
      category = "Lower than $20";
      id = 1;
    } else if (price >= 20 && price <= 100) {
      category = "$20 - $100";
      id = 2;
    } else if (price >= 100 && price <= 200) {
      category = "$100 - $200";
      id = 3;
    } else {
      category = "More than $200";
      id = 4;
    }

    if (category !== "") {
      const existingCategory = categories.find(
        (cat) => cat.category === category
      );
      if (!existingCategory) {
        categories.push({ id, category, prices: [price] });
      } else {
        existingCategory.prices.push(price);
      }
    }
  });

  return categories;
}

export function sortArrayById<T extends { id: number }>(array: T[]): T[] {
  return array.slice().sort((a, b) => a.id - b.id);
}
