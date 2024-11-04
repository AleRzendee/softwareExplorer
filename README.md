# Explorador de Arquivos

Um explorador de arquivos básico, semelhante ao Explorador de Arquivos do Microsoft Windows, desenvolvido com Node.js e React. Este projeto permite visualizar, excluir e renomear arquivos e pastas do sistema.

## Funcionalidades

- **Visualização de Arquivos e Pastas**: Exibe a estrutura de arquivos e pastas do diretório base.
- **Operações com Arquivos**: Permite excluir e renomear arquivos.
- **Interface Responsiva**: Layout em React, com ícones para diferenciar pastas e arquivos.

## Estrutura do Projeto

```plaintext
file-explorer/
├── backend/
│   ├── server.js          # Configuração do servidor Express
│   ├── routes/
│   │   └── fileRoutes.js   # Rotas para operações com arquivos
│   ├── controllers/
│   │   └── fileController.js # Lógica para manipulação de arquivos
├── frontend/
│   ├── src/
│   │   ├── App.js          # Componente principal React
│   │   ├── components/
│   │   │   └── FileList.js # Componente de listagem de arquivos
│   ├── public/
│   ├── package.json
└── README.md
