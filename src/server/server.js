import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { descifradoAES } from '../utils/utils.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.post('/api', (req, res) => {
  const {data} = req.body;
  console.log(`JSON CIFRADO : ${data}`);
  const textoDescifrado = descifradoAES(data, 'INTELECTRONICA')
  console.log(`JSON DESCIFRADO : ${atob(textoDescifrado)}`)
  res.send({
    success: true, message: 'Datos recibidos con éxito'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});