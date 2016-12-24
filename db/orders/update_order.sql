UPDATE orders
SET order_first_name=$1 order_last_name=$2 order_email=$3 order_phone=$4 order_address=$5 order_city=$6 order_state=$7 order_zip=$8 order_country=$9
WHERE order_id=$10
