package adapter;

public class PayPalAPI {
    public boolean makePayment(String transactionId, double value) {
        System.out.println("Pagamento processado no PayPal:");
        System.out.println("Transação: " + transactionId + ", Valor: R$" + value);
        return true; 
    }
}
