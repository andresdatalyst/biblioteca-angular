export interface Socio{

  id: string,
     data:{
       nombre:string,
       apellidos:string,
       edad:string,
       nick:string;//lo pongo a string para no tener conflicto con la base de datos de firebase
       pais:string;
       activo:boolean;
       cuentaActiva:boolean;
     }
}
