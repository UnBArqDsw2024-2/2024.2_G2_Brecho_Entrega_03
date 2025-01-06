export const formatAmountBRL = (amount: string): string => {
  return `R$ ${amount
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
};
