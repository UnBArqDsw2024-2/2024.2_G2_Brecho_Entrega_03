package prototype;

import java.util.ArrayList;
import java.util.List;

public class Person implements Prototype {
    private String name;
    private int age;
    private List<Address> addresses;

    // Construtor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.addresses = new ArrayList<>();
    }

    // Getter e Setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void addAddress(Address address) {
        this.addresses.add(address);
    }

    // Implementação do método clone
    @Override
    public Person clone() {
        Person newPerson = new Person(this.name, this.age);
        for (Address address : this.addresses) {
            newPerson.addAddress(address.clone());
        }
        return newPerson;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", addresses=" + addresses + "}";
    }
}