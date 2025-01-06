package com.unBrecho.brecho;

public class Main {
    public static void main(String[] args) {
        TransactionProcess buyerTransaction = new BuyerTransaction();
        System.out.println("Processo do Comprador:");
        buyerTransaction.execute();

        System.out.println("\n");

        TransactionProcess sellerTransaction = new SellerTransaction();
        System.out.println("Processo do Vendedor:");
        sellerTransaction.execute();
    }
}
