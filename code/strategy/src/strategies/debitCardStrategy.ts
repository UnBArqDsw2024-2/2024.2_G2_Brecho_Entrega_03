import { formatAmountBRL } from "../shared/formatAmount.";
import { InstallmentResult, NonEmptyArray } from "../shared/types";
import { Strategy } from "./strategy";
import Big from "big.js";

// For payments using the debit card we offer a 5% discount on the total amount
export class DebitCardStrategy implements Strategy {
  private readonly DISCOUNT_PERCENTAGE = 0.05;

  calculateInstallment(orderTotal: number): NonEmptyArray<InstallmentResult> {
    return [
      {
        numberOfInstallments: 1,
        formattedInstallmentAmount: formatAmountBRL(
          new Big(orderTotal).times(1 - this.DISCOUNT_PERCENTAGE).toFixed(2)
        ),
      },
    ];
  }
}
