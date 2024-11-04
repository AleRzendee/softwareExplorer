const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//! Rotas para operações com arquivos
app.use('/api/files', fileRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
