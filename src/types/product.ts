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
  description: string;
  details?: ProductDetails;
};
