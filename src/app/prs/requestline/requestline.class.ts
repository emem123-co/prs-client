import { Product } from "../product/product.class";
import { Request } from "../request/request.class";

export class Requestline {
    id: number = 0;
    quantity: number = 1;

    requestId: number = 0;
    request: Request | any = 0;

    productId: number = 0;
    product: Product | any = 0;

}