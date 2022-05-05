let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
let mensaje: string;
btnEnv.addEventListener("click", () => {
  mensaje = console.log("el dato ingresado es ", dato.value);
  console.log(mensaje);
  //}
});
