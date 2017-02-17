//service stats

by service -> SELECT SUM(co.amount_spent) as service FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = ? AND month(co.created_at) = month(now()) AND co.order_type = 'service'
by product -> SELECT SUM(co.amount_spent) as service FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = ? AND month(co.created_at) = month(now()) AND co.order_type = 'product'

avg and projection
SELECT SUM(co.amount_spent) as total,ceil((SUM(co.amount_spent)/DAY(now()) * DAY(LAST_DAY(now()))))  as projection FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14 AND month(co.created_at) = month(now())


stats by service
SELECT ss.service_id,s.name,SUM(co.amount_spent) as total
FROM customer_orders as co 
LEFT JOIN customers as c on c.id = co.customer_id
LEFT JOIN salon_services as ss on ss.category_id = co.category_inventory_id
LEFT JOIN services as s on s.id = ss.service_id
WHERE c.salon_id = ? AND month(co.created_at) = month(now()) AND co.order_type = 'service' GROUP BY s.name


SELECT IF((ins.category) IS NULL,'others',(ins.category)) as category, SUM(co.amount_spent) as total
FROM customer_orders as co 
LEFT JOIN customers as c on c.id = co.customer_id
LEFT JOIN inventory_salon as ins on ins.id = co.category_inventory_id
WHERE c.salon_id = ? AND month(co.created_at) = month(now()) AND co.order_type = 'product' GROUP BY ins.category










//client stats
avg spend -> SELECT (SUM(co.amount_spent)/COUNT(co.invoice_number)) as avg_spend FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14  AND month(co.created_at) = month(now())

total visits -> SELECT count(co.customer_id) as all_visits FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14 AND month(co.created_at) = month(now())
new-> SELECT count(co.customer_id) new_visit  FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14 AND month(co.created_at) = month(now()) group by customer_id having new_visit = 1

discounds Given


bar - SELECT dayname(co.created_at) AS day,COUNT(co.invoice_number) AS total FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14 GROUP BY DAYOFWEEK(co.created_at) ORDER BY DAYOFWEEK(co.created_at)
pie - 
// male -> SELECT SUM(co.amount_spent) as service FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14 AND c.gender = 'male' AND month(co.created_at) = month(now()) AND co.order_type = 'service'
// female ->SELECT SUM(co.amount_spent) as service FROM customer_orders as co LEFT JOIN customers as c on c.id = co.customer_id WHERE c.salon_id = 14 AND c.gender = 'female' AND month(co.created_at) = month(now()) AND co.order_type = 'service'