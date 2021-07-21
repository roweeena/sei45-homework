CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  national_goals INTEGER,
  image TEXT
);

-- seed some data
INSERT INTO players (name, family, national_goals) VALUES ('Cristiano', 'Ronaldo', 109);
INSERT INTO players (name, family, national_goals) VALUES ('Lionel', 'Messi', 76);
