/*
6am-11am - Buenos Días
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas Noches
0am-6am - Durmiendo
*/

let horaDia = 12;
let mensaje;

if (horaDia >= 6 && horaDia <= 11) {
  mensaje = "Buenos Días";
} else if (horaDia >= 12 && horaDia <= 18) {
  mensaje = "Buenas Tardes";
} else if (horaDia >= 19 && horaDia <= 24) {
  mensaje = "Buenas Noches";
} else if (horaDia >= 0 && horaDia < 6) {
  mensaje = "Durmiendo";
}

console.log(mensaje);
