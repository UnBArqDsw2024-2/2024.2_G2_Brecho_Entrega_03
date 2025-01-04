package prototype;

@Override
    public Address clone() {
        return new Address(this.street, this.number);
    }

    @Override
    public String toString() {
        return "Address{street='" + street + "', number=" + number + "}";
    }

