import { faker } from "@faker-js/faker";

import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";

export class ProductMemoryService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.string.uuid(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
      },
    };
    return this.add(newProduct);
  }

  add(newProduct: Product) {
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };

    return this.products[index];
  }

  getAll(){
    return this.products
  }

  findByIndex(id: Product["id"]): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
}
