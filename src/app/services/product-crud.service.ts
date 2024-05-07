import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.services";

//crud factory
export class ProductCRUDService {
  private url = "https://api.escuelajs.co/api/v1/products/";
  private http = new BaseHttpService<Product>(this.url);

  async update(id: Product["id"], changes: UpdateProductDto) {
    return this.http.update(id, changes);
  }
}
