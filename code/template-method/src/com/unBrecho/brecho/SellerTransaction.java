package com.unBrecho.brecho;

public class SellerTransaction extends TransactionProcess {
    @Override
    protected void validateUser() {
        System.out.println("Validando vendedor: verificando produtos listados e status da conta.");
    }

    @Override
    protected void prepareTransaction() {
        System.out.println("Preparando transação: verificando estoque e confirmando disponibilidade.");
    }

    @Override
    protected void executeTransaction() {
        System.out.println("Executando transação: confirmando venda e atualizando estoque.");
    }
}
