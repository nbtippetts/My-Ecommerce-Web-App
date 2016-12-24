UPDATE customers
SET customer_first_name=$1, customer_last_name=$2, customer_password=$3, customer_email=$4, customer_phone=$5, customer_address=$6, customer_city=$7, customer_state=$8, customer_zip=$9, customer_country=$10
WHERE customer_id=$10
