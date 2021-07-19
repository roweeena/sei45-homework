CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  director_id INTEGER -- added later - doesn't work. must create new SQL file (director_id.sql) to alter original model
  name TEXT,
  year_release INTEGER,
  summary TEXT,
  image TEXT
);

-- seed data
INSERT INTO movies (name, year_release) VALUES ( 'Pulp Fiction', 1994);
INSERT INTO movies (name, year_release) VALUES ( 'Fantastic Mr. Fox', 2009);
INSERT INTO movies ( name, year_release) VALUES ( 'Parasite', 2019);
