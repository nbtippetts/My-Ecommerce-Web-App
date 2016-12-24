SELECT customer_first_name, customer_last_name, customer_email, customer_phone, customer_address, customer_city, customer_state, customer_zip, customer_country
FROM customers
WHERE customer_id=$1
