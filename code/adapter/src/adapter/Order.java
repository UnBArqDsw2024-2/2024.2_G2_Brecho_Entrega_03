package adapter;

public class Order {
 private String orderId;
 private double totalPrice;

 public Order(String orderId, double totalPrice) {
     this.orderId = orderId;
     this.totalPrice = totalPrice;
 }

 public String getOrderId() {
     return orderId;
 }

 public double getTotalPrice() {
     return totalPrice;
 }

 public void processPayment(PaymentGateway paymentGateway) {
     System.out.println("Iniciando processamento do pagamento...");
     boolean success = paymentGateway.pay(orderId, totalPrice);
     if (success) {
         System.out.println("Pagamento aprovado para o pedido " + orderId);
     } else {
         System.out.println("Falha no pagamento do pedido " + orderId);
     }
 }
}
