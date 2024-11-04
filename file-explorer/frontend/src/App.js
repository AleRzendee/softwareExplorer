import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FileList from './components/FileList';

function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const response = await axios.get('http://localhost:5000/api/files');
    setFiles(response.data);
  };

  return (
    <div>
      <h1>Explorador de Arquivos</h1>
      <FileList files={files} refreshFiles={fetchFiles} />
    </div>
  );
}

export default App;
