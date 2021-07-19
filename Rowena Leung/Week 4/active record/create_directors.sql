CREATE TABLE directors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  country TEXT,
  number_of_awards INTEGER,
  image TEXT
);

-- seed data
INSERT INTO directors (first_name, last_name, country, number_of_awards, image) VALUES ('Quentin', 'Tarantino', 'USA', 23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVcD3Xv74ekzNLCKWpW6wmDCjVNVKqPzZ-w&usqp=CAU');
INSERT INTO directors (first_name, last_name, country, number_of_awards, image) VALUES ('Wes', 'Anderson', 'USA', 40, 'https://cdn5.iguzzini.com/getmedia/1a041dd3-dfac-4a01-b8f5-e5611bca06b2/copertina_articolo_lighthinking');
INSERT INTO directors (first_name, last_name, country, number_of_awards, image) VALUES ('Joon-ho', 'Bong', 'Korea', 88, 'https://deadline.com/wp-content/uploads/2019/12/michael-buckner.jpg?crop=0px%2C2px%2C1000px%2C560px&resize=681%2C383');
