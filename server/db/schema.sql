CREATE TABLE passenger
(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(40),
  lastname VARCHAR(40),
  email VARCHAR(100),
  phone varchar(22)
);

CREATE TABLE ride
(
  rideid SERIAL PRIMARY KEY,
  driverid INT,
  originlat INT,
  originlong INT,
  origindate VARCHAR(40),
  destlat INT,
  destlong INT,
  destdate VARCHAR(40),
  rating INT,
  review VARCHAR(1000)
);

CREATE TABLE driver
(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(40),
  lastname VARCHAR(40),
  ridetype VARCHAR(40),
  make VARCHAR(40),
  model VARCHAR(40),
  year INT,
  licence VARCHAR(10),
  color VARCHAR(40),
  img VARCHAR(200)
);


INSERT INTO passenger (id, firstname, lastname, email, phone)
VALUES (1, 'John', 'Doe', 'johndoe@gmail.com', '6025551234');

INSERT INTO passenger (id, firstname, lastname, email, phone)
VALUES (2, 'Sally', 'Doe', 'Sallydoe@gmail.com', '1235551234');

INSERT INTO passenger (id, firstname, lastname, email, phone)
VALUES (3, 'Billy', 'Bob', 'billybob@gmail.com', '3015551234');

INSERT INTO ride (rideid, driverid, originlat, originlong, origindate, destlat, destlong, destdate, rating, review)
VALUES (1, 1, 40.226284, -111.660637, '2016-10-23 10:30:00', 40.229396, -111.653237, '2016-10-23 10:40:00', 5, 'Great Ride!, slow but safe. :D');

INSERT INTO driver (id, firstname, lastname, ridetype, make, model, year, licence, color, img)
VALUES (1, 'Speedy', 'McFast', 'Lyft', 'Chevy', 'Cobalt', 2007, '2F4ST4U', 'Red', 'https://media.ed.edmunds-media.com/chevrolet/cobalt/2007/oem/2007_chevrolet_cobalt_coupe_ss-supercharged_fq_oem_1_400.jpg');

INSERT INTO driver (id, firstname, lastname, ridetype, make, model, year, licence, color, img)
VALUES (2, 'Sloth', 'McSlow', 'Lyft', 'Ford', 'Fusion', 2007, '2F4ST4U', 'black', 'http://images.gtcarlot.com/pictures/28124359.jpg');
