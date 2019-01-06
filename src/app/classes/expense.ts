import { Expensecategory } from "./expensecategory";

export class Expense {
    _id: string;
    name: string;
    ammount: number;
    date: Date;
    category: Expensecategory;
}
