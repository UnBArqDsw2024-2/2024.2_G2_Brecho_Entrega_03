package com.unBrecho.brecho;

public abstract class TransactionProcess {
	
    public final void execute() {
        validateUser();
        prepareTransaction();
        executeTransaction();
        notifyUsers();
    }

    protected abstract void validateUser();
    protected abstract void prepareTransaction();
    protected abstract void executeTransaction();

    
    protected void notifyUsers() {
        System.out.println("Notificando as partes envolvidas na transação.");
    }
}
