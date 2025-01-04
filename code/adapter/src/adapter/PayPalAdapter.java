package adapter;

public class PayPalAdapter implements PaymentGateway {
    private PayPalAPI payPal;

    public PayPalAdapter(PayPalAPI payPal) {
        this.payPal = payPal;
    }

    @Override
    public boolean pay(String orderId, double amount) {
        System.out.println("Adaptando pagamento para o PayPal...");
        return payPal.makePayment(orderId, amount);
    }
}