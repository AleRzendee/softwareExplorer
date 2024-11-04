import React from 'react';
import axios from 'axios';
import { FaFolder, FaFile, FaTrash, FaEdit } from 'react-icons/fa';

const FileList = ({ files, refreshFiles }) => {
  const deleteFile = async (name) => {
    await axios.delete(`http://localhost:5000/api/files/${name}`);
    refreshFiles();
  };

  return (
    <ul>
      {files.map(file => (
        <li key={file.name}>
          {file.type === 'folder' ? <FaFolder /> : <FaFile />} {file.name}
          <button onClick={() => deleteFile(file.name)}><FaTrash /></button>
          {/* Aqui você pode adicionar uma função para renomear */}
        </li>
      ))}
    </ul>
  );
};

export default FileList;
