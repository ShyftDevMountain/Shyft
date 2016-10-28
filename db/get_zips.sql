select zip_codes.zip_code, cities.id from zip_codes
join cities on cities.id = zip_codes.city_id;
