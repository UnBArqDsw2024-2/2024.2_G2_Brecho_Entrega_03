import { Observer } from "./Observer";

export class UserObserver implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`Olá, ${this.name}! ${message}`);
  }
}