import { Context } from "./context";
import { PaymentMethod } from "./shared/types";
import { BrechoCardStrategy } from "./strategies/brechoCardStrategy";
import { CreditCardStrategy } from "./strategies/creditCardStrategy";
import { DebitCardStrategy } from "./strategies/debitCardStrategy";
import { PixStrategy } from "./strategies/pixStrategy";

export class ExampleApplication {
  context: Context;
  main(paymentMethod: PaymentMethod, orderTotal: number) {
    switch (paymentMethod) {
      case "credit_card":
        this.context = new Context(new CreditCardStrategy());
        break;
      case "debit_card":
        this.context = new Context(new DebitCardStrategy());
        break;
      case "brecho_card":
        this.context = new Context(new BrechoCardStrategy());
        break;
      case "pix":
        this.context = new Context(new PixStrategy());
        break;
      default:
        throw new Error("Invalid payment method");
    }

    return this.context.executeStrategy(orderTotal);
  }
}
