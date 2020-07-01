CREATE TABLE permiso(
    user_id serial PRIMARY KEY,
    rut CHAR(10) NOT NULL,
    nombre CHAR(50) NOT NULL,
    edad CHAR(3) NOT NULL,
    region CHAR(50) NOT NULL,
    comuna CHAR(50) NOT NULL, 
    direccion CHAR(50) NOT NULL,
    motivo CHAR(100) NOT NULL,
    origen CHAR(50) NOT NULL,
    destino CHAR(50) NOT NULL,
    emision VARCHAR(50) NOT NULL,
    vence VARCHAR(50) NOT NULL
);