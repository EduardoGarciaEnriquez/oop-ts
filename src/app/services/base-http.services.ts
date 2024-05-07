import axios from "axios";

import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

//urls
const product_url = "https://api.escuelajs.co/api/v1/products/";
const category_url = "https://api.escuelajs.co/api/v1/categories/";

//class with generics <TypeClassypeClass>
export class BaseHttpService<TypeClass> {
  //constructor recieving private url
  constructor(private url: string) {}

  //async function to return data generic <TypeClass> type
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(`${this.url}`);
    return data;
  }

  //async function with generics for id and parsed changes
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}${id}`, changes);
    return data;
  }
}

async function testGenericsInClases() {
  //baseHTTPServices instances with category and product interfaces types as generics
  const category_service = new BaseHttpService<Category>(category_url);
  const product_service = new BaseHttpService<Product>(product_url);

  const products_response = await product_service.getAll();
  const category_response = await category_service.getAll();

  console.log(products_response.length, category_response.length);
}

async function testGenericsInMethods() {
  //baseHTTPServices instances with category and product interfaces types as generics
  const product_service = new BaseHttpService<Product>(product_url);

  // generics fot update method
  const products_response = await product_service.update<
    Product["id"],
    UpdateProductDto
  >(1, {});
}

// testGenericsInClases();
