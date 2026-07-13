export type ProductDetails = {
  specifications?: string[];
  items?: string[];
  usage?: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageFit?: "cover" | "contain";
  description: string;
  details?: ProductDetails;
};
