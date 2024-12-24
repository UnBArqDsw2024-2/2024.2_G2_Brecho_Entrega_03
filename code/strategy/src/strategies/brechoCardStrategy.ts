import { calculateInstallmentsFromSecondToMaxInstallments } from "../shared/calculateInstallments";
import { formatAmountBRL } from "../shared/formatAmount.";
import { InstallmentResult, NonEmptyArray } from "../shared/types";
import { Strategy } from "./strategy";
import Big from "big.js";

// For payments using brecho card we offer the following conditions:
// 8% discount in one installment
// or
// until 24 installments with minimum installment of 20
export class BrechoCardStrategy implements Strategy {
  private readonly ONE_INSTALLMENT_DISCOUNT_PERCENTAGE = 0.08;
  private readonly MINIMUM_INSTALLMENT_AMOUNT = 20;
  private readonly MAX_INSTALLMENTS = 24;
  calculateInstallment(orderTotal: number): NonEmptyArray<InstallmentResult> {
    const maxInstallments = Math.min(
      this.MAX_INSTALLMENTS,
      Math.floor(orderTotal / this.MINIMUM_INSTALLMENT_AMOUNT)
    );

    const installments: NonEmptyArray<InstallmentResult> = [
      {
        numberOfInstallments: 1,
        formattedInstallmentAmount: formatAmountBRL(
          new Big(orderTotal)
            .times(1 - this.ONE_INSTALLMENT_DISCOUNT_PERCENTAGE)
            .toFixed(2)
        ),
      },
      ...calculateInstallmentsFromSecondToMaxInstallments(
        orderTotal,
        maxInstallments
      ),
    ];

    return installments;
  }
}
