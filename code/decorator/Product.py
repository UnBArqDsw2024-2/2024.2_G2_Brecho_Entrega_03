from require_permission import require_permission

class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    @require_permission('owner')
    def edit(self, username, role):
        print(f"produto {self.name} editado por {role}:{username}.")
        return True
