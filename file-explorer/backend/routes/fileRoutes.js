const express = require('express');
const { listFiles, deleteFile, renameFile } = require('../controllers/fileController');
const router = express.Router();

// Listar arquivos e pastas
router.get('/', listFiles); 

// Excluir arquivo
router.delete('/:name', deleteFile); 

// Renomear arquivo
router.put('/:name', renameFile);

module.exports = router;
