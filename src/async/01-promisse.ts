import axios from "axios";

//función asincrona que se ejecuta sola
(async () => {
  function delay(time: number) {
    //promesa que deve devolver un valor de tipo boolean
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("true");
      }, time);
    });
  }

  //await espera y devuelve unicamente el resultado de la promesa.
  const response = await delay(3000);

  async function getProducts() {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?limit=1&offset=0"
    );
    return response.data;
  }

  const products = await getProducts();
  console.log(products);
})();
