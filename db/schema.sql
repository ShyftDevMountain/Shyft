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


INSERT INTO cities (city, state, img) VALUES ('Flagstaff', 'Arizona', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Tucson', 'Arizona', 'https://www.lyft.com/images/cities/heroes/tus.e6d5a845.jpg');
INSERT INTO cities (city, state, img) VALUES ('Phoenix', 'Arizona', 'https://www.lyft.com/images/cities/heroes/phx.6b8d4060.jpg');
INSERT INTO cities (city, state, img) VALUES ('San Francisco Bay Area', 'California', 'https://www.lyft.com/images/cities/heroes/sfo.00a4fac1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Bakersfield', 'California', 'https://www.lyft.com/images/cities/heroes/bfl.7ce2babd.jpg');
INSERT INTO cities (city, state, img) VALUES ('Los Angeles', 'California', 'https://www.lyft.com/images/cities/heroes/lax.818476ea.jpg');
INSERT INTO cities (city, state, img) VALUES ('San Diego', 'California', 'https://www.lyft.com/images/cities/heroes/san.756f6cd5.jpg');
INSERT INTO cities (city, state, img) VALUES ('Inland Empire', 'California', 'https://www.lyft.com/images/cities/heroes/sbd.7cc0b93b.jpg');
INSERT INTO cities (city, state, img) VALUES ('Silicon Valley', 'California', 'https://www.lyft.com/images/cities/heroes/sjc.c5cf074f.jpg');
INSERT INTO cities (city, state, img) VALUES ('Sacramento', 'California', 'https://www.lyft.com/images/cities/heroes/smf.9065545f.jpg');
INSERT INTO cities (city, state, img) VALUES ('Napa and Sonoma County', 'California', 'https://www.lyft.com/images/cities/heroes/sts.fdd5bc8a.jpg');
INSERT INTO cities (city, state, img) VALUES ('Fresno', 'California', 'https://www.lyft.com/images/cities/heroes/fat.7ed6adea.jpg');
INSERT INTO cities (city, state, img) VALUES ('Orange County', 'California', 'https://www.lyft.com/images/cities/heroes/ocx.6144b946.jpg');
INSERT INTO cities (city, state, img) VALUES ('Lake Tahoe', 'California', 'https://www.lyft.com/images/cities/heroes/tvl.31c8965c.jpg');
INSERT INTO cities (city, state, img) VALUES ('Stockton', 'California', 'https://www.lyft.com/images/cities/heroes/sck.f0b7967c.jpg');
INSERT INTO cities (city, state, img) VALUES ('Modesto', 'California', 'https://www.lyft.com/images/cities/heroes/mod.9989410c.jpg');
INSERT INTO cities (city, state, img) VALUES ('Santa Barbara', 'California', 'https://www.lyft.com/images/cities/heroes/sba.84ce47c8.jpg');
INSERT INTO cities (city, state, img) VALUES ('Denver', 'Colorado', 'https://www.lyft.com/images/cities/heroes/den.aa10bc19.jpg');
INSERT INTO cities (city, state, img) VALUES ('Colorado Springs', 'Colorado', 'https://www.lyft.com/images/cities/heroes/cos.b8f6ef3e.jpg');
INSERT INTO cities (city, state, img) VALUES ('Fort Collins', 'Colorado', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Fairfield', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Norwich', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Hartford', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('New Haven', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Hartford', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Washington, D.C.', 'District of Columbia', 'https://www.lyft.com/images/cities/heroes/dca.79791953.jpg');
INSERT INTO cities (city, state, img) VALUES ('Miami', 'Florida', 'https://www.lyft.com/images/cities/heroes/mia.85997ff8.jpg');
INSERT INTO cities (city, state, img) VALUES ('Bradenton', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Tampa Bay Area', 'Florida', 'https://www.lyft.com/images/cities/heroes/tpa.9a74dae1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Jacksonville', 'Florida', 'https://www.lyft.com/images/cities/heroes/jax.ce901b3f.jpg');
INSERT INTO cities (city, state, img) VALUES ('Orlando', 'Florida', 'https://www.lyft.com/images/cities/heroes/mco.bd4b99eb.jpg');
INSERT INTO cities (city, state, img) VALUES ('Naples', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Sarasota', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Port Charlotte', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Atlanta', 'Georgia', 'https://www.lyft.com/images/cities/heroes/atl.16d3136b.jpg');
INSERT INTO cities (city, state, img) VALUES ('Athens', 'Georgia', 'https://www.lyft.com/images/cities/heroes/ahn.1da51a4b.jpg');
INSERT INTO cities (city, state, img) VALUES ('Savannah', 'Georgia', 'https://www.lyft.com/images/cities/heroes/sav.80a1cc13.jpg');
INSERT INTO cities (city, state, img) VALUES ('Honolulu', 'Hawaii', 'https://www.lyft.com/images/cities/heroes/hnl.a8967c49.jpg');
INSERT INTO cities (city, state, img) VALUES ('Boise', 'Idaho', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Champaign', 'Illinois', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Chicago', 'Illinois', 'https://www.lyft.com/images/cities/heroes/chi.9f2e9996.jpg');
INSERT INTO cities (city, state, img) VALUES ('Indianapolis', 'Indiana', 'https://www.lyft.com/images/cities/heroes/ind.0a0cc18e.jpg');
INSERT INTO cities (city, state, img) VALUES ('Lexington', 'Kentucky', 'https://www.lyft.com/images/cities/heroes/lex.a0737c96.jpg');
INSERT INTO cities (city, state, img) VALUES ('Louisville', 'Kentucky', 'https://www.lyft.com/images/cities/heroes/sdf.7400abd1.jpg');
INSERT INTO cities (city, state, img) VALUES ('New Orleans', 'Louisiana', 'https://www.lyft.com/images/cities/heroes/msy.b21d21bf.jpg');
INSERT INTO cities (city, state, img) VALUES ('Portland', 'Maine', 'https://www.lyft.com/images/cities/heroes/pwm.3bb428e7.jpg');
INSERT INTO cities (city, state, img) VALUES ('Baltimore', 'Maryland', 'https://www.lyft.com/images/cities/heroes/bwi.f8bbdb1b.jpg');
INSERT INTO cities (city, state, img) VALUES ('Boston', 'Massachusetts', 'https://www.lyft.com/images/cities/heroes/bos.61275fd0.jpg');
INSERT INTO cities (city, state, img) VALUES ('Cape Cod', 'Massachusetts', 'https://www.lyft.com/images/cities/heroes/ccd.a4cc9acc.jpg');
INSERT INTO cities (city, state, img) VALUES ('Providence', 'Rhode Island', 'https://www.lyft.com/images/cities/heroes/pvd.4d2e6861.jpg');
INSERT INTO cities (city, state, img) VALUES ('Ann Arbor', 'Michigan', 'https://www.lyft.com/images/cities/heroes/arb.65f2265f.jpg');
INSERT INTO cities (city, state, img) VALUES ('Detroit', 'Michigan', 'https://www.lyft.com/images/cities/heroes/dtw.2744a836.jpg');
INSERT INTO cities (city, state, img) VALUES ('Lansing', 'Michigan', 'https://www.lyft.com/images/cities/heroes/lan.6cc829c1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Grand Rapids', 'Michigan', 'https://www.lyft.com/images/cities/heroes/grr.250631fc.jpg');
INSERT INTO cities (city, state, img) VALUES ('Minneapolis - St. Paul Area', 'Minnesota', 'https://www.lyft.com/images/cities/heroes/msp.270afa43.jpg');
INSERT INTO cities (city, state, img) VALUES ('Omaha', 'Nebraska', 'https://www.lyft.com/images/cities/heroes/oma.d5dbc0a5.jpg');
INSERT INTO cities (city, state, img) VALUES ('Lincoln', 'Nebraska', 'https://www.lyft.com/images/cities/heroes/lnk.64f939aa.jpg');
INSERT INTO cities (city, state, img) VALUES ('Las Vegas', 'Nevada', 'https://www.lyft.com/images/cities/heroes/las.8abfb0e7.jpg');
INSERT INTO cities (city, state, img) VALUES ('Reno', 'Nevada', 'https://www.lyft.com/images/cities/heroes/rno.80ec4075.jpg');
INSERT INTO cities (city, state, img) VALUES ('New Jersey Area', 'New Jersey', 'https://www.lyft.com/images/cities/heroes/nyc.ff6b1622.jpg');
INSERT INTO cities (city, state, img) VALUES ('Albuquerque', 'New Mexico', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Santa Fe', 'New Mexico', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('New York City', 'New York', 'https://www.lyft.com/images/cities/heroes/bkn.d960e9b1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Southhamton', 'New York', 'https://www.lyft.com/images/cities/heroes/hamptons.83b45ef1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Suffolk County', 'New York', 'https://www.lyft.com/images/cities/heroes/hamptons.83b45ef1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Raleigh - Durham Area', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/rdu.acf4d793.jpg');
INSERT INTO cities (city, state, img) VALUES ('Charlotte', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/clt.f0c241ad.jpg');
INSERT INTO cities (city, state, img) VALUES ('Greensboro', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Wilmington', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Cleveland', 'Ohio', 'https://www.lyft.com/images/cities/heroes/cle.69e02a70.jpg');
INSERT INTO cities (city, state, img) VALUES ('Toledo', 'Ohio', 'https://www.lyft.com/images/cities/heroes/tol.7870b58e.jpg');
INSERT INTO cities (city, state, img) VALUES ('Cincinnati', 'Ohio', 'https://www.lyft.com/images/cities/heroes/cvg.62a99446.jpg');
INSERT INTO cities (city, state, img) VALUES ('Columbus', 'Ohio', 'https://www.lyft.com/images/cities/heroes/cmh.40a9793b.jpg');
INSERT INTO cities (city, state, img) VALUES ('Dayton', 'Ohio', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Tulsa', 'Oklahoma', 'https://www.lyft.com/images/cities/heroes/tul.bbd4c7e1.jpg');
INSERT INTO cities (city, state, img) VALUES ('Oklahoma City', 'Oklahoma', 'https://www.lyft.com/images/cities/heroes/okc.19ff4a30.jpg');
INSERT INTO cities (city, state, img) VALUES ('Portland', 'Oregon', 'https://www.lyft.com/images/cities/heroes/pdx.a6fe789d.jpg');
INSERT INTO cities (city, state, img) VALUES ('Lehigh Valley', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Philidelphia', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/phi.c309671e.jpg');
INSERT INTO cities (city, state, img) VALUES ('Lancaster', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Pittsburgh', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/pit.525e42bf.jpg');
INSERT INTO cities (city, state, img) VALUES ('Reading', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Scranton', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('State College', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('York', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Charleston', 'South Carolina', 'https://www.lyft.com/images/cities/heroes/chs.67584a58.jpg');
INSERT INTO cities (city, state, img) VALUES ('Chattanooga', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Memphis', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/mem.ecc5fd7a.jpg');
INSERT INTO cities (city, state, img) VALUES ('Knoxville', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Nashville', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/bna.3cbae2a7.jpg');
INSERT INTO cities (city, state, img) VALUES ('Dallas - Fort Worth Area', 'Texas', 'https://www.lyft.com/images/cities/heroes/dfw.a14f66ce.jpg');
INSERT INTO cities (city, state, img) VALUES ('Austin', 'Texas', 'https://www.lyft.com/images/cities/heroes/aus.02b7c9ad.jpg');
INSERT INTO cities (city, state, img) VALUES ('San Antonio', 'Texas', 'https://www.lyft.com/images/cities/heroes/sat.b1d051b0.jpg');
INSERT INTO cities (city, state, img) VALUES ('Salt Lake City', 'Utah', 'https://www.lyft.com/images/cities/heroes/slc.96cd389a.jpg');
INSERT INTO cities (city, state, img) VALUES ('Charlottesville', 'Virginia', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Virginia Beach - Hampton Roads', 'Virginia', 'https://www.lyft.com/images/cities/heroes/orf.94fda2d6.jpg');
INSERT INTO cities (city, state, img) VALUES ('Harrisburg', 'Virginia', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Richmond', 'Virginia', 'https://www.lyft.com/images/cities/heroes/ric.59f01aa9.jpg');
INSERT INTO cities (city, state, img) VALUES ('Seattle', 'Washington', 'https://www.lyft.com/images/cities/heroes/sea.f4906e0d.jpg');
INSERT INTO cities (city, state, img) VALUES ('Spokane', 'Washington', 'https://www.lyft.com/images/cities/heroes/geg.5249b705.jpg');
INSERT INTO cities (city, state, img) VALUES ('Tacoma', 'Washington', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Green Bay', 'Wisconsin', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png');
INSERT INTO cities (city, state, img) VALUES ('Madison', 'Wisconsin', 'https://www.lyft.com/images/cities/heroes/msn.0a434f5e.jpg');
INSERT INTO cities (city, state, img) VALUES ('Milwaukee', 'Wisconsin', 'https://www.lyft.com/images/cities/heroes/mke.43b9d5ff.jpg');
