package prototype;

public class Main {
    public static void main(String[] args) {
        Address address1 = new Address("Av Brasil", 15);

        Person person1 = new Person("Luiz", 30);
        person1.addAddress(address1);

        Person person2 = person1.clone();
    }
}    