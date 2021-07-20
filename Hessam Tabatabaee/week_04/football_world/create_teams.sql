CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  world_cup_appearance INTEGER,
  world_cup_champions INTEGER,
  image TEXT
);

-- seed some data
INSERT INTO teams (name, world_cup_appearance, world_cup_champions) VALUES ('Portugal', 7, 0);
INSERT INTO teams (name, world_cup_appearance, world_cup_champions) VALUES ('Argentina', 17, 2);
