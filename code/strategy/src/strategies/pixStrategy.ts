import { formatAmountBRL } from "../shared/formatAmount.";
import { InstallmentResult, NonEmptyArray } from "../shared/types";
import { Strategy } from "./strategy";
import Big from "big.js";

// For payments with pix we offer a 10% discount on the total amount
export class PixStrategy implements Strategy {
  private readonly DISCOUNT_PERCENTAGE = 0.1;

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
