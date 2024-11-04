const express = require('express');
const { listFiles, deleteFile, renameFile } = require('../controllers/fileController');
const router = express.Router();

router.get('/', listFiles);       // Listar arquivos e pastas
router.delete('/:name', deleteFile); // Excluir arquivo
router.put('/:name', renameFile);  // Renomear arquivo

module.exports = router;
