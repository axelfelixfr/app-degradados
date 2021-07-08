// Este if es para comprobar que existe un Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    // Si existe el registro de Service Worker entonces mandara este mensaje:
    .then((reg) => console.log("Registro Exitoso"))
    .catch((err) => console.log(err));
}
