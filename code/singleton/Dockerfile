FROM python:3.10.12-slim

RUN apt-get update && apt-get install -y \
    postgresql-client

WORKDIR /

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "connector.py"]
