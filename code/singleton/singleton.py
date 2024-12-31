class Singleton:
    __instance = None

    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super(Singleton, cls).__new__(cls)
        return cls.__instance

    @classmethod
    def get_instance(cls):
        if cls.__instance is None:
            cls.__instance = cls()
        return cls.__instance


if __name__ == "__main__":
    db1 = Singleton.get_instance()
    db2 = Singleton()
    db3 = Singleton.get_instance()

    print(db1 is db2)
    print(db1 is db3)
    print(db2 is db3)
