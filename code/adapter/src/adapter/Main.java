package adapter;


public class Main {
 public static void main(String[] args) {
     // Criando o pedido
     Order order = new Order("12345", 250.75);

     // Configurando o Adapter para usar o PayPal
     PaymentGateway paymentGateway = new PayPalAdapter(new PayPalAPI());

     // Processando o pagamento
     order.processPayment(paymentGateway);
 }
}


