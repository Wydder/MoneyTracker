import { Incomecategory } from "./incomecategory";

export class Income {
    _id: string;
    name: string;
    ammount: number;
    date: Date;
    category: Incomecategory;
}
