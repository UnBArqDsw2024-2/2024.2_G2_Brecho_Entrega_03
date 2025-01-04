import Big from "big.js";
import { formatAmountBRL } from "./formatAmount.";
import { InstallmentResult } from "./types";

// Couldn't think about a better name for this function :(
export const calculateInstallmentsFromSecondToMaxInstallments = (
  orderTotal: number,
  maxInstallments: number
) => {
  const installments: InstallmentResult[] = [];

  for (let installment = 2; installment <= maxInstallments; installment++) {
    installments.push({
      numberOfInstallments: installment,
      formattedInstallmentAmount: formatAmountBRL(
        new Big(orderTotal).div(installment).toFixed(2)
      ),
    });
  }

  return installments;
};
