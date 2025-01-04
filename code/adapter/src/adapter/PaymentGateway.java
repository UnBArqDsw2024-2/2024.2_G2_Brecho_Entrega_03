package adapter;

public interface PaymentGateway {
    boolean pay(String orderId, double amount);
}

