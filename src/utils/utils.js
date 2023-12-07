import { notification } from "antd";
import CryptoJS from "crypto-js";

export const cifradoAES = (jsonB64) => (
  CryptoJS.AES.encrypt(jsonB64, import.meta.env.VITE_CIFRADO_AES).toString()
  );
export const descifradoAES = (texto, clave) => {
  const bytes = CryptoJS.AES.decrypt(texto, clave)
  const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
  return textoDescifrado;
}

export const onFinish = (values) => {
    console.log(values);
    values.recheckTime *= 5;
    values.vpdRanges.range0.offDuration *= 60;
    values.vpdRanges.range1.offDuration *= 60;
    values.vpdRanges.range2.offDuration *= 60;
    values.vpdRanges.range3.offDuration *= 60;
    values.vpdRanges.range4.offDuration *= 60;
  
    const jsonValues = JSON.stringify(values);
  
    // Cifrado BASE 64
    const jsonB64 = btoa(jsonValues);
    //Descifrado BASE 64
    // atob(jsonB64)
    fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: cifradoAES(jsonB64),
      }),
    })
      .then((response) =>
        response
          .json()
          .then((data) => {
            notification.success({
              message: "Información enviada con éxito",
              duration: 3,
            });
            console.log(data);
          })
          .catch((error) => {
            notification.error({
              message: "Error",
              description: "Intentelo de nuevo",
              duration: 3,
            });
            console.log(error);
          })
      )
      .catch((error) => {
        notification.error({
          message: "No se pudo conectar con el servidor",
          description: "Contactese con el administrador",
          duration: 5,
        });
        console.log(error);
      });
    
  };