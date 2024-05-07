import { ProductMemoryService } from "./services/product-memory.service";
import { ProductHttpService } from "./services/product-http.service";

function testProductMemoryService() {
  //new instance of ProductMemoryService
  const productService = new ProductMemoryService();

  //create new product
  productService.create({
    title: "Product name",
    price: 300,
    description: "Product description",
    categoryId: 12,
    images: [],
  });

  //get all products
  console.log(productService.getAll());
}

async function testProductHttpService() {
  //new instance of ProductHTTPService
  const productService = new ProductHttpService();

  //error handle try-catch
  try {
    //create new product from productService instance
    await productService.create({
      title: "new product",
      price: 100,
      description: "new product description",
      categoryId: 1,
      images: [
        "https://www.google.com/imgres?q=ai&imgurl=https%3A%2F%2Fincubator.ucf.edu%2Fwp-content%2Fuploads%2F2023%2F07%2Fartificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg&imgrefurl=https%3A%2F%2Fincubator.ucf.edu%2Fwhat-is-artificial-intelligence-ai-and-why-people-should-learn-about-it%2F&docid=4jEnd_yUBiw-_M&tbnid=erRQbvwa3FsLmM&vet=12ahUKEwjBwer8ufyFAxUSIUQIHatBB7cQM3oECBUQAA..i&w=2560&h=1707&hcb=2&ved=2ahUKEwjBwer8ufyFAxUSIUQIHatBB7cQM3oECBUQAA",
      ],
    });

    //update product id 264
    await productService.update(264, {
      title: "updated title",
      description: "updated description",
    });

    //find product id 264 & all products
    const product = await productService.findByIndex(264);
    const productsList = await productService.getAll();
  } catch (error) {
    //console error
    console.error("Error: ", error);
  }
}
