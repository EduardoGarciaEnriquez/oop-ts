import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: "Product name",
  price: 300,
  description: "Product description",
  categoryId: 12,
  images: [],
});

console.log(productService.getAll());
