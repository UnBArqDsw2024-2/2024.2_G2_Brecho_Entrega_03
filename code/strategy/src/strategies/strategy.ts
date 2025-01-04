import { InstallmentResult, NonEmptyArray } from "../shared/types";

export interface Strategy {
  calculateInstallment(orderTotal: number): NonEmptyArray<InstallmentResult>;
}
