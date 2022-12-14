import { BaseError } from "./BaseError";

export class invalidAmount extends BaseError{
    constructor(){
        super("We don't have the quantity of the product available!")
    }
}

export class invalidParams extends BaseError{
    constructor(){
        super("Missing params id field to fill")
    }
}

export class invalidPurchases extends BaseError{
    constructor(){
        super("empty cart")
    }
}

export class productInCartExiste extends BaseError{
    constructor(){
        super("The product already exists in the cart change the quantity")
    }
}
