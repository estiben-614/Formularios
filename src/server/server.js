const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.post('/api', (req, res) => {

  const {data} = req.body;
  console.log(atob(data));
  res.send({
    success: true, message: 'Datos recibidos con éxito'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});