import Big from "big.js";

export const formatAmountBRL = (amount: Big): string => {
  return `R$${amount
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
};
