select rides.rideid from rides where status = 'pending' or status = 'arrived' and facebook_id = $1
