export interface Product {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  details: Details;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Details {
  dimensions: Dimensions;
  size: number;
  description: string;
  recommendations: Recommendation[];
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Recommendation {
  src: string;
  alt: string;
}
