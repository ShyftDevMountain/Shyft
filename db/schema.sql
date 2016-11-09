CREATE TABLE customer
(
  fb text PRIMARY KEY,
  displayName VARCHAR(100),
  email VARCHAR(100),
  phone varchar(22)
);


CREATE TABLE drivers
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  ridetype VARCHAR(40),
  make VARCHAR(40),
  model VARCHAR(40),
  year INTEGER,
  licence VARCHAR(10),
  color VARCHAR(40),
  img TEXT
);

CREATE TABLE rides
(
  rideId SERIAL PRIMARY KEY,
  originlat decimal,
  originlong decimal,
  origindate text,
  destlat decimal,
  destlong decimal,
  status VARCHAR(40),
  destdate text,
  rating text,
  review TEXT
);

alter table rides add column driver_id integer references drivers(id);
alter table rides add column facebook_id text references customer(fb);


INSERT INTO drivers (name, ridetype, make, model, year, licence, color, img)
VALUES ('Speedy McFast', 'Lyft', 'Chevy', 'Cobalt', 2007, '2F4ST4U', 'Red', 'https://media.ed.edmunds-media.com/chevrolet/cobalt/2007/oem/2007_chevrolet_cobalt_coupe_ss-supercharged_fq_oem_1_400.jpg');

INSERT INTO drivers (name, ridetype, make, model, year, licence, color, img)
VALUES ('Sloth McSlow', 'Lyft', 'Ford', 'Fusion', 2007, '2F4ST4U', 'black', 'http://images.gtcarlot.com/pictures/28124359.jpg');

insert into drivers (name, ridetype, make, model, year, licence, color, img) values('Kenna Martin', 'Shyft', 'Toyota', 'Corolla', 2015, '39xkys', 'Red', 'fdsf');

insert into drivers (name, ridetype, make, model, year, licence, color, img) values('Dan Martin', 'Shyft', 'Toyota', 'Camry', 2016, '39xkyv', 'Black', 'fdsfdfas');

insert into drivers (name, ridetype, make, model, year, licence, color, img) values('Heidi Martin', 'Shyft', 'Subaru', 'Forrester', 2017, '39xked', 'Green', 'fdsfadf');

insert into drivers (name, ridetype, make, model, year, licence, color, img) values('Tim Martin', 'Shyft', 'Honda', 'CR-V', 2015, '39xgdf', 'Blue', 'fdsffadsf');


CREATE TABLE cities
(
  id serial PRIMARY KEY,
  city VARCHAR(50),
  state VARCHAR(50),
  img TEXT,
  map_img TEXT
);


INSERT INTO cities (city, state, img, map_img) VALUES ('Flagstaff', 'Arizona', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Flagstaff,AZ&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Tucson', 'Arizona', 'https://www.lyft.com/images/cities/heroes/tus.e6d5a845.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Tucson,AZ&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Phoenix', 'Arizona', 'https://www.lyft.com/images/cities/heroes/phx.6b8d4060.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Phoenix,AZ&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('San Francisco Bay Area', 'California', 'https://www.lyft.com/images/cities/heroes/sfo.00a4fac1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SanFransisco,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Bakersfield', 'California', 'https://www.lyft.com/images/cities/heroes/bfl.7ce2babd.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Bakersfield,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Los Angeles', 'California', 'https://www.lyft.com/images/cities/heroes/lax.818476ea.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=LosAngeles,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('San Diego', 'California', 'https://www.lyft.com/images/cities/heroes/san.756f6cd5.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SanDiego,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Inland Empire', 'California', 'https://www.lyft.com/images/cities/heroes/sbd.7cc0b93b.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=InlandEmpire,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Silicon Valley', 'California', 'https://www.lyft.com/images/cities/heroes/sjc.c5cf074f.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SiliconValley,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Sacramento', 'California', 'https://www.lyft.com/images/cities/heroes/smf.9065545f.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Sacramento,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Napa and Sonoma County', 'California', 'https://www.lyft.com/images/cities/heroes/sts.fdd5bc8a.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SonomaCounty,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Fresno', 'California', 'https://www.lyft.com/images/cities/heroes/fat.7ed6adea.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Fresno,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Orange County', 'California', 'https://www.lyft.com/images/cities/heroes/ocx.6144b946.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=OrangeCounty,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Lake Tahoe', 'California', 'https://www.lyft.com/images/cities/heroes/tvl.31c8965c.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=LakeTahoe,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Stockton', 'California', 'https://www.lyft.com/images/cities/heroes/sck.f0b7967c.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Stockton,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Modesto', 'California', 'https://www.lyft.com/images/cities/heroes/mod.9989410c.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Modesto,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Santa Barbara', 'California', 'https://www.lyft.com/images/cities/heroes/sba.84ce47c8.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SantaBarbara,CA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Denver', 'Colorado', 'https://www.lyft.com/images/cities/heroes/den.aa10bc19.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Denver,CO&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Colorado Springs', 'Colorado', 'https://www.lyft.com/images/cities/heroes/cos.b8f6ef3e.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=ColoradoSprings,CO&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Fort Collins', 'Colorado', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=FortCollins,CO&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Fairfield', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Fairfield,CT&zoom=14&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Norwich', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Norwich,CT&zoom=14&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Hartford', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Hartford,CT&zoom=14&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('New Haven', 'Connecticut', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=NewHaven,CT&zoom=14&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Washington, D.C.', 'District of Columbia', 'https://www.lyft.com/images/cities/heroes/dca.79791953.jpg','https://maps.googleapis.com/maps/api/staticmap?center=Washington,DC&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Miami', 'Florida', 'https://www.lyft.com/images/cities/heroes/mia.85997ff8.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Miami,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Bradenton', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Bradenton,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Tampa Bay Area', 'Florida', 'https://www.lyft.com/images/cities/heroes/tpa.9a74dae1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Tampa,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Jacksonville', 'Florida', 'https://www.lyft.com/images/cities/heroes/jax.ce901b3f.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Jacksonville,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Orlando', 'Florida', 'https://www.lyft.com/images/cities/heroes/mco.bd4b99eb.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Orlando,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Naples', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Naples,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Sarasota', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Sarasota,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Port Charlotte', 'Florida', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=PortCharlotte,FL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Atlanta', 'Georgia', 'https://www.lyft.com/images/cities/heroes/atl.16d3136b.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Atlanta,GA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Athens', 'Georgia', 'https://www.lyft.com/images/cities/heroes/ahn.1da51a4b.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Athens,GA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Savannah', 'Georgia', 'https://www.lyft.com/images/cities/heroes/sav.80a1cc13.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Savannah,GA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Honolulu', 'Hawaii', 'https://www.lyft.com/images/cities/heroes/hnl.a8967c49.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Honolulu,HI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Boise', 'Idaho', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Boise,ID&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Champaign', 'Illinois', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Champaign,IL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Chicago', 'Illinois', 'https://www.lyft.com/images/cities/heroes/chi.9f2e9996.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Chicago,IL&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Indianapolis', 'Indiana', 'https://www.lyft.com/images/cities/heroes/ind.0a0cc18e.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Indianapolis,IN&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Lexington', 'Kentucky', 'https://www.lyft.com/images/cities/heroes/lex.a0737c96.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Lexington,KY&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Louisville', 'Kentucky', 'https://www.lyft.com/images/cities/heroes/sdf.7400abd1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Louisville,KY&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('New Orleans', 'Louisiana', 'https://www.lyft.com/images/cities/heroes/msy.b21d21bf.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=NewOrleans,LA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Portland', 'Maine', 'https://www.lyft.com/images/cities/heroes/pwm.3bb428e7.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Portland,ME&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Baltimore', 'Maryland', 'https://www.lyft.com/images/cities/heroes/bwi.f8bbdb1b.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Baltimore,MD&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Boston', 'Massachusetts', 'https://www.lyft.com/images/cities/heroes/bos.61275fd0.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Boston,MA&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Cape Cod', 'Massachusetts', 'https://www.lyft.com/images/cities/heroes/ccd.a4cc9acc.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=CapeCod,MA&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Providence', 'Rhode Island', 'https://www.lyft.com/images/cities/heroes/pvd.4d2e6861.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Providence,RI&zoom=14&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Ann Arbor', 'Michigan', 'https://www.lyft.com/images/cities/heroes/arb.65f2265f.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=AnnArbor,MI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Detroit', 'Michigan', 'https://www.lyft.com/images/cities/heroes/dtw.2744a836.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Detroit,MI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Lansing', 'Michigan', 'https://www.lyft.com/images/cities/heroes/lan.6cc829c1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Lansing,MI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Grand Rapids', 'Michigan', 'https://www.lyft.com/images/cities/heroes/grr.250631fc.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=GrandRapids,MI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Minneapolis - St. Paul Area', 'Minnesota', 'https://www.lyft.com/images/cities/heroes/msp.270afa43.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Minneapolis,MN&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Omaha', 'Nebraska', 'https://www.lyft.com/images/cities/heroes/oma.d5dbc0a5.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Omaha,NE&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Lincoln', 'Nebraska', 'https://www.lyft.com/images/cities/heroes/lnk.64f939aa.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Lincoln,NE&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Las Vegas', 'Nevada', 'https://www.lyft.com/images/cities/heroes/las.8abfb0e7.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=LasVegas,NV&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Reno', 'Nevada', 'https://www.lyft.com/images/cities/heroes/rno.80ec4075.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Reno,NV&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('New Jersey Area', 'New Jersey', 'https://www.lyft.com/images/cities/heroes/nyc.ff6b1622.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=AtlanticCity,NJ&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Albuquerque', 'New Mexico', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Albuquerque,NM&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Santa Fe', 'New Mexico', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=SantaFe,NM&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('New York City', 'New York', 'https://www.lyft.com/images/cities/heroes/bkn.d960e9b1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=NewYorkCity,NY&zoom=13&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Southampton', 'New York', 'https://www.lyft.com/images/cities/heroes/hamptons.83b45ef1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Southampton,NY&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Suffolk County', 'New York', 'https://www.lyft.com/images/cities/heroes/hamptons.83b45ef1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SuffolkCounty,NY&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Raleigh - Durham Area', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/rdu.acf4d793.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Raleigh,NC&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Charlotte', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/clt.f0c241ad.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Charlotte,NC&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Greensboro', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Greensboro,NC&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Wilmington', 'North Carolina', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Wilmington,NC&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Cleveland', 'Ohio', 'https://www.lyft.com/images/cities/heroes/cle.69e02a70.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Cleveland,OH&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Toledo', 'Ohio', 'https://www.lyft.com/images/cities/heroes/tol.7870b58e.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Toledo,OH&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Cincinnati', 'Ohio', 'https://www.lyft.com/images/cities/heroes/cvg.62a99446.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Cincinnati,OH&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Columbus', 'Ohio', 'https://www.lyft.com/images/cities/heroes/cmh.40a9793b.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Columbus,OH&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Dayton', 'Ohio', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Dayton,OH&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Tulsa', 'Oklahoma', 'https://www.lyft.com/images/cities/heroes/tul.bbd4c7e1.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Tulsa,OK&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Oklahoma City', 'Oklahoma', 'https://www.lyft.com/images/cities/heroes/okc.19ff4a30.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=OklahomaCity,OK&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Portland', 'Oregon', 'https://www.lyft.com/images/cities/heroes/pdx.a6fe789d.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Portland,OR&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Lehigh Valley', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=LeighCounty,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Philidelphia', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/phi.c309671e.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Philidelphia,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Lancaster', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Lancaster,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Pittsburgh', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/pit.525e42bf.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Pittsburgh,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Reading', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Reading,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Scranton', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Scranton,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('State College', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=StateCollege,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('York', 'Pennsylvania', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=York,PA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Charleston', 'South Carolina', 'https://www.lyft.com/images/cities/heroes/chs.67584a58.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Charleston,SC&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Chattanooga', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Chattanooga,TN&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Memphis', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/mem.ecc5fd7a.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Memphis,TN&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Knoxville', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Knoxville,TN&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Nashville', 'Tennesee', 'https://www.lyft.com/images/cities/heroes/bna.3cbae2a7.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Nashville,TN&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Dallas - Fort Worth Area', 'Texas', 'https://www.lyft.com/images/cities/heroes/dfw.a14f66ce.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Dallas,TX&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Austin', 'Texas', 'https://www.lyft.com/images/cities/heroes/aus.02b7c9ad.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('San Antonio', 'Texas', 'https://www.lyft.com/images/cities/heroes/sat.b1d051b0.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SanAntonio,TX&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Salt Lake City', 'Utah', 'https://www.lyft.com/images/cities/heroes/slc.96cd389a.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=SaltLakeCity,UT&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Charlottesville', 'Virginia', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Charlottesville,VA&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Virginia Beach - Hampton Roads', 'Virginia', 'https://www.lyft.com/images/cities/heroes/orf.94fda2d6.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=VirginiaBeach,VA&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Harrisburg', 'Virginia', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Harrisburg,VA&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Richmond', 'Virginia', 'https://www.lyft.com/images/cities/heroes/ric.59f01aa9.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Richmond,VA&zoom=12&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Seattle', 'Washington', 'https://www.lyft.com/images/cities/heroes/sea.f4906e0d.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Seattle,WA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Spokane', 'Washington', 'https://www.lyft.com/images/cities/heroes/geg.5249b705.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Spokane,WA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Tacoma', 'Washington', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=Tacoma,WA&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Green Bay', 'Wisconsin', 'https://www.lyft.com/images/cities/heroes/default.0145a1a8.png', 'https://maps.googleapis.com/maps/api/staticmap?center=GreenBay,WI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Madison', 'Wisconsin', 'https://www.lyft.com/images/cities/heroes/msn.0a434f5e.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Madison,WI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
INSERT INTO cities (city, state, img, map_img) VALUES ('Milwaukee', 'Wisconsin', 'https://www.lyft.com/images/cities/heroes/mke.43b9d5ff.jpg', 'https://maps.googleapis.com/maps/api/staticmap?center=Milwaukee,WI&zoom=10&size=640x400&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');



create table zip_codes
  (
    id serial primary key,
    zip_code integer
  );

alter table zip_codes add column city_id integer references cities(id);


 insert into zip_codes (zip_code, city_id) values (86001, 1);
 insert into zip_codes (zip_code, city_id) values (86004, 1);
 insert into zip_codes (zip_code, city_id) values (86005, 1);
 insert into zip_codes (zip_code, city_id) values (86011, 1);
 insert into zip_codes (zip_code, city_id) values (86002, 1);
 insert into zip_codes (zip_code, city_id) values (86003, 1);
 insert into zip_codes (zip_code, city_id) values (85710, 2);
 insert into zip_codes (zip_code, city_id) values (85706, 2);
 insert into zip_codes (zip_code, city_id) values (85719, 2);
 insert into zip_codes (zip_code, city_id) values (85705, 2);
 insert into zip_codes (zip_code, city_id) values (85711, 2);
 insert into zip_codes (zip_code, city_id) values (85713, 2);
 insert into zip_codes (zip_code, city_id) values (85730, 2);
 insert into zip_codes (zip_code, city_id) values (85712, 2);
 insert into zip_codes (zip_code, city_id) values (85716, 2);
 insert into zip_codes (zip_code, city_id) values (85745, 2);
 insert into zip_codes (zip_code, city_id) values (85756, 2);
 insert into zip_codes (zip_code, city_id) values (85747, 2);
 insert into zip_codes (zip_code, city_id) values (85746, 2);
 insert into zip_codes (zip_code, city_id) values (85748, 2);
 insert into zip_codes (zip_code, city_id) values (85715, 2);
 insert into zip_codes (zip_code, city_id) values (85714, 2);
 insert into zip_codes (zip_code, city_id) values (85701, 2);
 insert into zip_codes (zip_code, city_id) values (85032, 3);
 insert into zip_codes (zip_code, city_id) values (85008, 3);
 insert into zip_codes (zip_code, city_id) values (85033, 3);
 insert into zip_codes (zip_code, city_id) values (85041, 3);
 insert into zip_codes (zip_code, city_id) values (85009, 3);
 insert into zip_codes (zip_code, city_id) values (85035, 3);
 insert into zip_codes (zip_code, city_id) values (85022, 3);
 insert into zip_codes (zip_code, city_id) values (85029, 3);
 insert into zip_codes (zip_code, city_id) values (85037, 3);
 insert into zip_codes (zip_code, city_id) values (85042, 3);
 insert into zip_codes (zip_code, city_id) values (85254, 3);
 insert into zip_codes (zip_code, city_id) values (85051, 3);
 insert into zip_codes (zip_code, city_id) values (85017, 3);
 insert into zip_codes (zip_code, city_id) values (85015, 3);
 insert into zip_codes (zip_code, city_id) values (85021, 3);
 insert into zip_codes (zip_code, city_id) values (85027, 3);
 insert into zip_codes (zip_code, city_id) values (85044, 3);
 insert into zip_codes (zip_code, city_id) values (85018, 3);
 insert into zip_codes (zip_code, city_id) values (85016, 3);
 insert into zip_codes (zip_code, city_id) values (85020, 3);
 insert into zip_codes (zip_code, city_id) values (85048, 3);
 insert into zip_codes (zip_code, city_id) values (85023, 3);
 insert into zip_codes (zip_code, city_id) values (85031, 3);
 insert into zip_codes (zip_code, city_id) values (85040, 3);
 insert into zip_codes (zip_code, city_id) values (85043, 3);
 insert into zip_codes (zip_code, city_id) values (85053, 3);
 insert into zip_codes (zip_code, city_id) values (94112, 4);
 insert into zip_codes (zip_code, city_id) values (94110, 4);
 insert into zip_codes (zip_code, city_id) values (94109, 4);
 insert into zip_codes (zip_code, city_id) values (94122, 4);
 insert into zip_codes (zip_code, city_id) values (94116, 4);
 insert into zip_codes (zip_code, city_id) values (94121, 4);
 insert into zip_codes (zip_code, city_id) values (94134, 4);
 insert into zip_codes (zip_code, city_id) values (94117, 4);
 insert into zip_codes (zip_code, city_id) values (94118, 4);
 insert into zip_codes (zip_code, city_id) values (94124, 4);
 insert into zip_codes (zip_code, city_id) values (94115, 4);
 insert into zip_codes (zip_code, city_id) values (94102, 4);
 insert into zip_codes (zip_code, city_id) values (94114, 4);
 insert into zip_codes (zip_code, city_id) values (94132, 4);
 insert into zip_codes (zip_code, city_id) values (94103, 4);
 insert into zip_codes (zip_code, city_id) values (94107, 4);
 insert into zip_codes (zip_code, city_id) values (94131, 4);
 insert into zip_codes (zip_code, city_id) values (94133, 4);
 insert into zip_codes (zip_code, city_id) values (94123, 4);
 insert into zip_codes (zip_code, city_id) values (94127, 4);
 insert into zip_codes (zip_code, city_id) values (94108, 4);
 insert into zip_codes (zip_code, city_id) values (93307, 5);
 insert into zip_codes (zip_code, city_id) values (93312, 5);
 insert into zip_codes (zip_code, city_id) values (93304, 5);
 insert into zip_codes (zip_code, city_id) values (93313, 5);
 insert into zip_codes (zip_code, city_id) values (93311, 5);
 insert into zip_codes (zip_code, city_id) values (93306, 5);
 insert into zip_codes (zip_code, city_id) values (93305, 5);
 insert into zip_codes (zip_code, city_id) values (93301, 5);
 insert into zip_codes (zip_code, city_id) values (93314, 5);
 insert into zip_codes (zip_code, city_id) values (93308, 5);
 insert into zip_codes (zip_code, city_id) values (90011, 6);
 insert into zip_codes (zip_code, city_id) values (91331, 6);
 insert into zip_codes (zip_code, city_id) values (91342, 6);
 insert into zip_codes (zip_code, city_id) values (91335, 6);
 insert into zip_codes (zip_code, city_id) values (90026, 6);
 insert into zip_codes (zip_code, city_id) values (91402, 6);
 insert into zip_codes (zip_code, city_id) values (90003, 6);
 insert into zip_codes (zip_code, city_id) values (90019, 6);
 insert into zip_codes (zip_code, city_id) values (90044, 6);
 insert into zip_codes (zip_code, city_id) values (90006, 6);
 insert into zip_codes (zip_code, city_id) values (90037, 6);
 insert into zip_codes (zip_code, city_id) values (90042, 6);
 insert into zip_codes (zip_code, city_id) values (91343, 6);
 insert into zip_codes (zip_code, city_id) values (90034, 6);
 insert into zip_codes (zip_code, city_id) values (90731, 6);
 insert into zip_codes (zip_code, city_id) values (91605, 6);
 insert into zip_codes (zip_code, city_id) values (90744, 6);
 insert into zip_codes (zip_code, city_id) values (91344, 6);
 insert into zip_codes (zip_code, city_id) values (91406, 6);
 insert into zip_codes (zip_code, city_id) values (90016, 6);
 insert into zip_codes (zip_code, city_id) values (92154, 7);
 insert into zip_codes (zip_code, city_id) values (92126, 7);
 insert into zip_codes (zip_code, city_id) values (92105, 7);
 insert into zip_codes (zip_code, city_id) values (92114, 7);
 insert into zip_codes (zip_code, city_id) values (92115, 7);
 insert into zip_codes (zip_code, city_id) values (92113, 7);
 insert into zip_codes (zip_code, city_id) values (92117, 7);
 insert into zip_codes (zip_code, city_id) values (92129, 7);
 insert into zip_codes (zip_code, city_id) values (92130, 7);
 insert into zip_codes (zip_code, city_id) values (92037, 7);
 insert into zip_codes (zip_code, city_id) values (92128, 7);
 insert into zip_codes (zip_code, city_id) values (92109, 7);
 insert into zip_codes (zip_code, city_id) values (92104, 7);
 insert into zip_codes (zip_code, city_id) values (92111, 7);
 insert into zip_codes (zip_code, city_id) values (92102, 7);
 insert into zip_codes (zip_code, city_id) values (92122, 7);
 insert into zip_codes (zip_code, city_id) values (92101, 7);
 insert into zip_codes (zip_code, city_id) values (92139, 7);
 insert into zip_codes (zip_code, city_id) values (92131, 7);
 insert into zip_codes (zip_code, city_id) values (92103, 7);
 insert into zip_codes (zip_code, city_id) values (95823, 10);
 insert into zip_codes (zip_code, city_id) values (95822, 10);
 insert into zip_codes (zip_code, city_id) values (95831, 10);
 insert into zip_codes (zip_code, city_id) values (95833, 10);
 insert into zip_codes (zip_code, city_id) values (95838, 10);
 insert into zip_codes (zip_code, city_id) values (95835, 10);
 insert into zip_codes (zip_code, city_id) values (95820, 10);
 insert into zip_codes (zip_code, city_id) values (95834, 10);
 insert into zip_codes (zip_code, city_id) values (95815, 10);
 insert into zip_codes (zip_code, city_id) values (95818, 10);
 insert into zip_codes (zip_code, city_id) values (95819, 10);
 insert into zip_codes (zip_code, city_id) values (93722, 12);
 insert into zip_codes (zip_code, city_id) values (93727, 12);
 insert into zip_codes (zip_code, city_id) values (93702, 12);
 insert into zip_codes (zip_code, city_id) values (93720, 12);
 insert into zip_codes (zip_code, city_id) values (93726, 12);
 insert into zip_codes (zip_code, city_id) values (93705, 12);
 insert into zip_codes (zip_code, city_id) values (93710, 12);
 insert into zip_codes (zip_code, city_id) values (93706, 12);
 insert into zip_codes (zip_code, city_id) values (93711, 12);
 insert into zip_codes (zip_code, city_id) values (93703, 12);
 insert into zip_codes (zip_code, city_id) values (93704, 12);
 insert into zip_codes (zip_code, city_id) values (93725, 12);
 insert into zip_codes (zip_code, city_id) values (93728, 12);
 insert into zip_codes (zip_code, city_id) values (93701, 12);
 insert into zip_codes (zip_code, city_id) values (93730, 12);
 insert into zip_codes (zip_code, city_id) values (92656, 13);
 insert into zip_codes (zip_code, city_id) values (92801, 13);
 insert into zip_codes (zip_code, city_id) values (92802, 13);
 insert into zip_codes (zip_code, city_id) values (92804, 13);
 insert into zip_codes (zip_code, city_id) values (92805, 13);
 insert into zip_codes (zip_code, city_id) values (92806, 13);
 insert into zip_codes (zip_code, city_id) values (92807, 13);
 insert into zip_codes (zip_code, city_id) values (92808, 13);
 insert into zip_codes (zip_code, city_id) values (92821, 13);
 insert into zip_codes (zip_code, city_id) values (90620, 13);
 insert into zip_codes (zip_code, city_id) values (96150, 14);
 insert into zip_codes (zip_code, city_id) values (95206, 15);
 insert into zip_codes (zip_code, city_id) values (95207, 15);
 insert into zip_codes (zip_code, city_id) values (95210, 15);
 insert into zip_codes (zip_code, city_id) values (95209, 15);
 insert into zip_codes (zip_code, city_id) values (95219, 15);
 insert into zip_codes (zip_code, city_id) values (95205, 15);
 insert into zip_codes (zip_code, city_id) values (95212, 15);
 insert into zip_codes (zip_code, city_id) values (95204, 15);
 insert into zip_codes (zip_code, city_id) values (95203, 15);
 insert into zip_codes (zip_code, city_id) values (95202, 15);
 insert into zip_codes (zip_code, city_id) values (95355, 16);
 insert into zip_codes (zip_code, city_id) values (95350, 16);
 insert into zip_codes (zip_code, city_id) values (95356, 16);
 insert into zip_codes (zip_code, city_id) values (95354, 16);
 insert into zip_codes (zip_code, city_id) values (95351, 16);
 insert into zip_codes (zip_code, city_id) values (95358, 16);
 insert into zip_codes (zip_code, city_id) values (95357, 16);
 insert into zip_codes (zip_code, city_id) values (93101, 17);
 insert into zip_codes (zip_code, city_id) values (93103, 17);
 insert into zip_codes (zip_code, city_id) values (93105, 17);
 insert into zip_codes (zip_code, city_id) values (93109, 17);
 insert into zip_codes (zip_code, city_id) values (93110, 17);
 insert into zip_codes (zip_code, city_id) values (93108, 17);
