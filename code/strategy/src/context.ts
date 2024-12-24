import { InstallmentResult, NonEmptyArray } from "./shared/types";
import { Strategy } from "./strategies/strategy";

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(orderTotal: number): NonEmptyArray<InstallmentResult> {
    return this.strategy.calculateInstallment(orderTotal);
  }
}
