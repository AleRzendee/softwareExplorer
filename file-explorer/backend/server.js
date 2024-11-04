// backend/server.js
const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/files', fileRoutes); // Rotas para operações com arquivos

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
