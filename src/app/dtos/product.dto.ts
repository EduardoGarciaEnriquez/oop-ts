import { Product } from "../../async/models/product.model";
import { Category } from "../../async/models/category.model";

export interface CreateProductDto extends Omit<Product, "id" | "category"> {
  categoryId: Category["id"];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
