export type PaymentMethod =
  | "credit_card"
  | "debit_card"
  | "brecho_card"
  | "pix";

export type InstallmentResult = {
  numberOfInstallments: number;
  formattedInstallmentAmount: string;
};

export type NonEmptyArray<T> = [T, ...T[]];
