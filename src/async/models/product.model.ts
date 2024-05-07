import { Category } from "./category.model";

export interface Product {
  id: number | string;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt?: Date;
  updatedAt?: Date;
  category: Category;
}
