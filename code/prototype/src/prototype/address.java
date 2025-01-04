package prototype;

public class Address implements Prototype {
    private String street;
    private int number;

    // Construtor
    public Address(String street, int number) {
        this.street = street;
        this.number = number;
    }

    // Getter e Setter
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}