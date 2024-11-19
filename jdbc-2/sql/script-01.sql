
CREATE TABLE persistencia1.cuenta (
	codigo varchar(16) NOT NULL,
	cliente varchar(256) NOT NULL,
	email varchar(128) NOT NULL,
	saldo decimal not null default 0,
	CONSTRAINT cuenta_pkey PRIMARY KEY (codigo)
);

select * from persistencia1.persistencia1.cuenta c;

insert into persistencia1.persistencia1.cuenta 
  (codigo, cliente, email, saldo) 
  values ('C0001','General Lamadrid','soydelama@gmail.com',10000.55);