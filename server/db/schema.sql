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




CREATE TABLE cities
(
  id serial PRIMARY KEY,
  city VARCHAR(50),
  state VARCHAR(50),
  img TEXT,
  center_lat INT,
  center_long INT,
  map_path TEXT
)


INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Flagstaff', 'Arizona', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Tucson', 'Arizona', 'https://www.lyft.com/images/cities/heroes/tus.e6d5a845.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Phoenix', 'Arizona', 'https://www.lyft.com/images/cities/heroes/phx.6b8d4060.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('San Francisco Bay Area', 'California', 'https://www.lyft.com/images/cities/heroes/sfo.00a4fac1.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Bakersfield', 'California', 'https://www.lyft.com/images/cities/heroes/bfl.7ce2babd.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Los Angeles', 'California', 'https://www.lyft.com/images/cities/heroes/lax.818476ea.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('San Diego', 'California', 'https://www.lyft.com/images/cities/heroes/san.756f6cd5.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Inland Empire', 'California', 'https://www.lyft.com/images/cities/heroes/sbd.7cc0b93b.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Silicon Valley', 'California', 'https://www.lyft.com/images/cities/heroes/sjc.c5cf074f.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Sacramento', 'California', 'https://www.lyft.com/images/cities/heroes/smf.9065545f.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Napa and Sonoma County', 'California', 'https://www.lyft.com/images/cities/heroes/sts.fdd5bc8a.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Fresno', 'California', 'https://www.lyft.com/images/cities/heroes/fat.7ed6adea.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Orange County', 'California', 'https://www.lyft.com/images/cities/heroes/ocx.6144b946.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Lake Tahoe', 'California', 'https://www.lyft.com/images/cities/heroes/tvl.31c8965c.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Stockton', 'California', 'https://www.lyft.com/images/cities/heroes/sck.f0b7967c.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Modesto', 'California', 'https://www.lyft.com/images/cities/heroes/mod.9989410c.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Santa Barbara', 'California', 'https://www.lyft.com/images/cities/heroes/sba.84ce47c8.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Denver', 'Colorado', 'https://www.lyft.com/images/cities/heroes/den.aa10bc19.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Colorado Springs', 'Colorado', 'https://www.lyft.com/images/cities/heroes/cos.b8f6ef3e.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Fort Collins', 'Colorado', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Fairfield', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Norwich', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Hartford', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('New Haven', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Hartford', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Washington, D.C.', 'District of Columbia', 'https://www.lyft.com/images/cities/heroes/dca.79791953.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Miami', 'Florida', 'https://www.lyft.com/images/cities/heroes/mia.85997ff8.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Bradenton', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Tampa Bay Area', 'Florida', 'https://www.lyft.com/images/cities/heroes/tpa.9a74dae1.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Jacksonville', 'Florida', 'https://www.lyft.com/images/cities/heroes/jax.ce901b3f.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Orlando', 'Florida', 'https://www.lyft.com/images/cities/heroes/mco.bd4b99eb.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Naples', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Sarasota', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Port Charlotte', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Atlanta', 'Georgia', 'https://www.lyft.com/images/cities/heroes/atl.16d3136b.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Athens', 'Georgia', 'https://www.lyft.com/images/cities/heroes/ahn.1da51a4b.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Savannah', 'Georgia', 'https://www.lyft.com/images/cities/heroes/sav.80a1cc13.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Honolulu', 'Hawaii', 'https://www.lyft.com/images/cities/heroes/hnl.a8967c49.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Boise', 'Idaho', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Champaign', 'Illinois', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Chicago', 'Illinois', 'https://www.lyft.com/images/cities/heroes/chi.9f2e9996.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Indianapolis', 'Indiana', 'https://www.lyft.com/images/cities/heroes/ind.0a0cc18e.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Lexington', 'Kentucky', 'https://www.lyft.com/images/cities/heroes/lex.a0737c96.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Louisville', 'Kentucky', 'https://www.lyft.com/images/cities/heroes/sdf.7400abd1.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('New Orleans', 'Louisiana', 'https://www.lyft.com/images/cities/heroes/msy.b21d21bf.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Portland', 'Maine', 'https://www.lyft.com/images/cities/heroes/pwm.3bb428e7.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Baltimore', 'Maryland', 'https://www.lyft.com/images/cities/heroes/bwi.f8bbdb1b.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Boston', 'Massachusetts', 'https://www.lyft.com/images/cities/heroes/bos.61275fd0.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Cape Cod', 'Massachusetts', 'https://www.lyft.com/images/cities/heroes/ccd.a4cc9acc.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Providence', 'Rhode Island', 'https://www.lyft.com/images/cities/heroes/pvd.4d2e6861.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Ann Arbor', 'Michigan', 'https://www.lyft.com/images/cities/heroes/arb.65f2265f.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Detroit', 'Michigan', 'https://www.lyft.com/images/cities/heroes/dtw.2744a836.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Lansing', 'Michigan', 'https://www.lyft.com/images/cities/heroes/lan.6cc829c1.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Grand Rapids', 'Michigan', 'https://www.lyft.com/images/cities/heroes/grr.250631fc.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Minneapolis - St. Paul Area', 'Minnesota', 'https://www.lyft.com/images/cities/heroes/msp.270afa43.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Omaha', 'Nebraska', 'https://www.lyft.com/images/cities/heroes/oma.d5dbc0a5.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Lincoln', 'Nebraska', 'https://www.lyft.com/images/cities/heroes/lnk.64f939aa.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Las Vegas', 'Nevada', 'https://www.lyft.com/images/cities/heroes/las.8abfb0e7.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Reno', 'Nevada', 'https://www.lyft.com/images/cities/heroes/rno.80ec4075.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('New Jersey Area', 'New Jersey', 'https://www.lyft.com/images/cities/heroes/nyc.ff6b1622.jpg');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Albuquerque', 'New Mexico', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img, center_lat, center_long, map_path) VALUES ('Santa Fe', 'New Mexico', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
