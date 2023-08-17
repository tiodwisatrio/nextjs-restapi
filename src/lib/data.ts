type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    date: Date;
}

let products: Product[] = [];

export const getProducts = () => products;

export const addProduct = (product: Product) => products.push(product);

export const deleteProduct = (id: string) => {
    products = products.filter((product) => product.id !== id);
}

export const updateProduct = (id: string, name: string, price: number, description: string) => {
    const product = products.find((product) => product.id === id);

    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
    } else {
        throw new Error("Product not found");
    }
}

export const getProductById = (id: string) => products.find((product) => product.id === id);

