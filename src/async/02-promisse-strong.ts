/*tipado fuerte en promesas*/
import axios from "axios";
import { Product } from "../app/models/product.model";

(async () => {
  // tipado hacia afuera, es decir tipar que es lo que va a retornar
  async function getProducts(): Promise<Product[]> {
    //tipado interno, es decir que espera recibir en el response del axios.get
    const { data } = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products?limit=1&offset=0"
    );
    return data;
  }

  const products = await getProducts();
})();
