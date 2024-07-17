import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string | null = null;
    deliveryMode: string = "Pickup";
    status: string = "NEW";
    total: number = 0;

    userId: number = 0;
    user: User | null = null;

    requestlines: Requestline[] | null = null;
}