package com.unBrecho.brecho;

public class BuyerTransaction extends TransactionProcess {
    @Override
    protected void validateUser() {
        System.out.println("Validando comprador: verificando saldo e histórico de compras.");
    }

    @Override
    protected void prepareTransaction() {
        System.out.println("Preparando transação: reservando o item.");
    }

    @Override
    protected void executeTransaction() {
        System.out.println("Executando transação: debitando pagamento e confirmando pedido.");
    }
}
