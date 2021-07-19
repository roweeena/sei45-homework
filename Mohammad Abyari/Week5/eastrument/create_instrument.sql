CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cat TEXT,
  geo TEXT,
  image TEXT
);


INSERT INTO instruments (id,name,cat,geo) VALUES (1,'Sitar','Mo','Iran');
INSERT INTO instruments (id,name,cat,geo) VALUES (2,'Duduk','Winds','Armenia');
INSERT INTO instruments (id,name,cat,geo) VALUES (3,'Darbuka','Percussion','Egypt');
