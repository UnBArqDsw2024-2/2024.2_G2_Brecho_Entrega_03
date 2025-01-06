from connect_db import Connect_DB


if __name__ == "__main__":

    db1 = Connect_DB.get_instance()
    db2 = Connect_DB()
    db3 = Connect_DB.get_instance()

    print("\nSINGLETON")
    print(db1 is db2)
    print(db1 is db3)
    print(db2 is db3)
