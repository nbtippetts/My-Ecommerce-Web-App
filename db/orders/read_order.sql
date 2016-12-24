SELECT order_first_name, order_last_name, order_email, order_phone, order_address, order_city, order_state, order_zip, order_country
FROM orders
WHERE order_id=$1
