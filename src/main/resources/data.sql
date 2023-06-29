CREATE TABLE IF NOT EXISTS category (
  id BIGINT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS product (
  id BIGINT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  bought_date DATE NOT NULL,
  category_id BIGINT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category (id)
);

INSERT INTO category (id, name) VALUES
(1, 'Jedzenie'),
(2, 'Napoje'),
(3, 'Domowe'),
(4, 'Samochód');

INSERT INTO product (id, name, price, bought_date, category_id) VALUES
(1, 'Chleb tostowy', 7.99, '2023-06-01', 1),
(2, 'Monster', 6.99, '2023-06-05', 2),
(3, 'Gąbki do naczyń', 10.99, '2023-06-10', 3),
(4, 'Ser', 3.99, '2023-06-15', 1),
(5, 'Paliwo', 49.99, '2023-06-20', 4);