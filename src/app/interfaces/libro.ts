export interface Libro{

    id: string,
       data:{
         titulo:string,
         autor:string,
         numPag:string,
         categoria:string;
         editorial:string
         foto:string,
         description:string;
         precio:string;
         prestado:boolean;
         libroActivo:boolean;
       }
 }

