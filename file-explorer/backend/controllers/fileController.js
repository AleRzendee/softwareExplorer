const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../../'); //! Diretório base

const listFiles = (req, res) => {
    fs.readdir(baseDir, (err, files) => {
        if (err) return res.status(500).json({ error: 'Failed to list files' });
        const details = files.map(file => ({
            name: file,
            type: fs.statSync(path.join(baseDir, file)).isDirectory() ? 'folder' : 'file'
        }));
        res.json(details);
    });
};

const deleteFile = (req, res) => {
    const { name } = req.params;
    fs.unlink(path.join(baseDir, name), err => {
        if (err) return res.status(500).json({ error: 'Failed to delete file' });
        res.json({ message: 'File deleted' });
    });
};

const renameFile = (req, res) => {
    const { name } = req.params;
    const { newName } = req.body;
    fs.rename(path.join(baseDir, name), path.join(baseDir, newName), err => {
        if (err) return res.status(500).json({ error: 'Failed to rename file' });
        res.json({ message: 'File renamed' });
    });
};

module.exports = { listFiles, deleteFile, renameFile };
