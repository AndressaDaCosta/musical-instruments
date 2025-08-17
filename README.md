# Sistema de Gestão de Instrumentos Musicais

Sistema completo para gerenciamento de instrumentos musicais com frontend React e backend Node.js.

## 📁 Estrutura do Projeto

```
musical-instruments/
├── instruments-app/        # Frontend React + TypeScript
└── musical-equipment-api/  # Backend Node.js + Express
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

### 1️⃣ Backend (API)

Primeiro, inicie o servidor da API:

```bash
# Navegue até a pasta da API
cd musical-equipment-api

# Instale as dependências
npm install

# Inicie o servidor
npm run servidor
```

A API estará rodando em: **http://localhost:3000**

#### Endpoints disponíveis:
- `GET /equipamentos` - Lista todos os instrumentos
- `POST /equipamentos` - Cadastra um novo instrumento

### 2️⃣ Frontend (React)

Em um novo terminal, inicie a aplicação React:

```bash
# Navegue até a pasta do frontend
cd instruments-app

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

O frontend estará disponível em: **http://localhost:5173**

## 📋 Funcionalidades

- **Listagem em Cards**: Visualização dos instrumentos em formato de cards
- **Listagem em Tabela**: Visualização dos instrumentos em formato tabular
- **Navegação**: Alternância entre as duas visualizações
- **Hook Customizado**: `useGetInstruments` para reutilização da lógica de busca
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18
- TypeScript
- Vite
- React Router DOM
- Axios
- CSS Modules

### Backend
- Node.js
- Express
- CORS
- FS-Extra

## 📊 Estrutura de Dados

Cada instrumento possui os seguintes campos:

```typescript
interface Instrument {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  voltagem?: string;
  ano: number;
  preco: number;
  peso_kg: number;
  ativo: boolean;
}
```

## 🎨 Telas do Sistema

1. **Listagem em Cards** (`/cards`)
   - Exibe os instrumentos em formato de cards
   - Layout em grid responsivo
   - Indicação visual do status (ativo/inativo)

2. **Listagem em Tabela** (`/table`)
   - Exibe os instrumentos em formato tabular
   - Todas as informações em colunas organizadas
   - Status com cores diferenciadas

## 🔧 Comandos Úteis

### Frontend
```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção
```

### Backend
```bash
npm run servidor # Inicia o servidor da API
```

## 📝 Observações

- Certifique-se de que a API esteja rodando antes de iniciar o frontend
- A API utiliza um arquivo JSON local para persistência dos dados
- O frontend se conecta automaticamente à API em http://localhost:3000
- Ambos os servidores precisam estar rodando simultaneamente

## 🚨 Solução de Problemas

### Erro de CORS
Se encontrar erros de CORS, verifique se a biblioteca `cors` está instalada e configurada na API.

### Porta em uso
Se as portas padrão estiverem em uso:
- API: Modifique a variável `PORT` em `musical-equipment-api/index.js`
- Frontend: O Vite escolherá automaticamente outra porta disponível

### Dados não aparecem
1. Verifique se a API está rodando
2. Confirme que existe o arquivo `musical-equipment-api/data/equipments.json`
3. Verifique o console do navegador para erros

## 👩🏻‍💻 Desenvolvido por Andressa Costa

## 📄 Licença

Este projeto é para fins educacionais.