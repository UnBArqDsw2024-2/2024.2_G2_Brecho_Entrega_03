import { ExampleApplication } from "./exampleApplication";

const app = new ExampleApplication();

const creditCardPayment = app.main("credit_card", 293.47);
const debitCardPayment = app.main("debit_card", 293.47);
const brechoCardPayment = app.main("brecho_card", 293.47);
const pixPayment = app.main("pix", 293.47);

console.log(
  JSON.stringify(
    [
      { creditCardPayment },
      { debitCardPayment },
      { brechoCardPayment },
      { pixPayment },
    ],
    null,
    2
  )
);
