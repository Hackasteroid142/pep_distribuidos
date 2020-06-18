CREATE TABLE permiso(
    user_id serial PRIMARY KEY,
    rut CHAR(10) UNIQUE NOT NULL,
    user_name CHAR(50) NOT NULL,
    direccion CHAR(50) NOT NULL, 
    motivo CHAR(50) NOT NULL
);