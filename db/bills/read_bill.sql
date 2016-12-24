SELECT bill_first_name, bill_last_name, bill_email, bill_phone, bill_address, bill_city, bill_state, bill_zip, bill_country
FROM bills
WHERE bill_id=$1
