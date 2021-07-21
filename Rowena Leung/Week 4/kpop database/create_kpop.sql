
CREATE TABLE kpop (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  members INTEGER,
  best_song TEXT,
  image TEXT,
  active BOOLEAN
);

-- seed data

INSERT INTO kpop (name, members, best_song, active) VALUES ('SHINee', 5, 'Sherlock', 1);
INSERT INTO kpop (name, members, best_song, active) VALUES ('2NE1', 4, "I Don't Care", 0);
