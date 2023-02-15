create table tbl_clientes (
id_cliente int primary key auto_increment,
nombre_cliente varchar(255),
apellido_cliente varchar(255),
dni_cliente varchar(255),
direccion_cliente varchar(255)
);

create table tbl_productos (
id_producto int primary key auto_increment,
nombre_producto varchar(255),
caracteristicas_producto varchar(255),
id_marca int,
constraint foreign key fk_id_marca (id_marca) references tbl_marcas(id_marca)
);

create table tbl_marcas(
id_marca int primary key auto_increment,
nombre_marca varchar(255),
pais_origen varchar(255)
);

create table tbl_estado (
id_estado int primary key auto_increment,
tipo_estado varchar(255)
);

create table tbl_tipoEnvio (
id_tipoEnvio int primary key auto_increment,
el_tipoEnvio varchar(255)
);

create table tbl_paises (
id_pais int primary key auto_increment,
nombre_pais varchar(255)
);

create table tbl_pedidos (
id_pedido int primary key auto_increment,
id_cliente int,
id_producto int,
id_estado int,
id_pais int,
id_tipoEnvio int,
fecha_pedido date,
constraint foreign key fk_id_cliente (id_cliente) references tbl_clientes (id_cliente),
constraint foreign key fk_id_producto (id_producto) references tbl_productos (id_producto),
constraint foreign key fk_id_estado (id_estado) references tbl_estado (id_estado),
constraint foreign key fk_id_pais (id_pais) references tbl_paises (id_pais),
constraint foreign key fk_id_tipoEnvio (id_tipoEnvio) references tbl_tipoEnvio (id_tipoEnvio)
);