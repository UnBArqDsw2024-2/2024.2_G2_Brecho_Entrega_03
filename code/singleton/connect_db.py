import os

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_BASE = os.getenv("DB_BASE")

SQLALCHEMY_DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_BASE}"


class Connect_DB:
    __engine = create_engine( 
        SQLALCHEMY_DATABASE_URL,
        connect_args={
            "options" : "-c timezone=utc"
        }
    )

    __session_local = sessionmaker(autocommit=False, autoflush=False, bind=__engine)

    __base = declarative_base()
    __instance = __session_local()

    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super(Connect_DB, cls).__new__(cls)
        return cls.__instance

    @classmethod
    def get_instance(cls):
        if cls.__instance is None:
            cls.__instance = cls()
        return cls.__instance
