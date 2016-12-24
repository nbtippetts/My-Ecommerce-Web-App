SELECT product_name, product_price, product_description, product_details, product_image_url, product_specs
From products
WHERE product_id = $1;
