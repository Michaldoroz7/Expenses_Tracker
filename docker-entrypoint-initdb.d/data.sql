INSERT INTO category (id, name) VALUES (1, 'Category 1');
INSERT INTO category (id, name) VALUES (2, 'Category 2');

INSERT INTO product (id, name, price, bought_date, category_id)
VALUES (1, 'Product 1', 10.99, '2023-06-01', 1);
INSERT INTO product (id, name, price, bought_date, category_id)
VALUES (2, 'Product 2', 20.99, '2023-06-02', 2);

INSERT INTO role (id, role_type) VALUES (1, 'REGISTERED');
INSERT INTO role (id, role_type) VALUES (2, 'GUEST');

INSERT INTO "user" (id, name, password, email, money_spend, role_id, product_id)
VALUES (1, 'John Doe', 'password123', 'john@example.com', 100.0, 1, 1);
INSERT INTO "user" (id, name, password, email, money_spend, role_id, product_id)
VALUES (2, 'Jane Smith', 'password456', 'jane@example.com', 200.0, 2, 2);