select * from rides
join drivers on drivers.id = rides.driver_id
where facebook_id = $1
