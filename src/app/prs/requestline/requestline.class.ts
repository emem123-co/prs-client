import { Product } from "../product/product.class";

export class Requestline {
    id: number = 0;
    quanity: number = 1;

    requestId: number = 0;

    productId: number = 0;
    product: Product | null = null;
}