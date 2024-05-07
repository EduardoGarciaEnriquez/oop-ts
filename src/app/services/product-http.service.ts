import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";
import axios from "axios";

export class ProductHttpService implements ProductService {
  private url = "https://api.escuelajs.co/api/v1/products/";

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(`${this.url}`, dto);
    return data;
  }

  async getAll() {
    const { data } = await axios.get<Product[]>(`${this.url}`);
    return data;
  }

  async findByIndex(id: string | number) {
    const { data } = await axios.get(`${this.url}${id}`);
    return data;
  }

  async update(id: string | number, changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}${id}`, changes);
    return data;
  }
}
