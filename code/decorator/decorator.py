from User import User
from Product import Product

if __name__ == "__main__":
    p1 = Product('product_name', 1000)

    print("\nPERMISSION ACCEPTED\n")
    p1_owner = User(username='joao', role='owner')
    p1.edit(username=p1_owner.username, role=p1_owner.role)

    print("\n" + "=" * 100 + "\n")

    print("\nPERMISSION DENIED\n")
    p1_customer = User(username='joana', role='customer')
    p1.edit(p1_customer.role, p1_customer.username)
