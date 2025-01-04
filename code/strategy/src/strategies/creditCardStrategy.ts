import { calculateInstallmentsFromSecondToMaxInstallments } from "../shared/calculateInstallments";
import { formatAmountBRL } from "../shared/formatAmount.";
import { InstallmentResult, NonEmptyArray } from "../shared/types";
import { Strategy } from "./strategy";
import Big from "big.js";

// For payments using credit card we offer until 5 installments with minimum installment of 50
export class CreditCardStrategy implements Strategy {
  private readonly MINIMUM_INSTALLMENT_AMOUNT = 50;
  private readonly MAX_INSTALLMENTS = 5;
  calculateInstallment(orderTotal: number): NonEmptyArray<InstallmentResult> {
    const maxInstallments = Math.min(
      this.MAX_INSTALLMENTS,
      Math.floor(orderTotal / this.MINIMUM_INSTALLMENT_AMOUNT)
    );

    const installments: NonEmptyArray<InstallmentResult> = [
      {
        numberOfInstallments: 1,
        formattedInstallmentAmount: formatAmountBRL(
          new Big(orderTotal).toFixed(2)
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
