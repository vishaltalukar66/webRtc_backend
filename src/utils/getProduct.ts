export async function logProduct(): Promise<JSON> {
    const response = await fetch("https://dummyjson.com/products/5");
    const product = await response.json();
    return product;
}