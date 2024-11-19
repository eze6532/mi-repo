CREATE TABLE persistencia1.persistencia1.personaje (
  id INT not null, 
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(50),
  vida INT DEFAULT 10,
  ataque INT DEFAULT 10 
);

select * from persistencia1.persistencia1.personaje; 