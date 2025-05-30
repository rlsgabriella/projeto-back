# Backend – RemoveBG API
✨ Descrição
Este é o backend de um micro SaaS de remoção de fundo de imagem. Criado com Express e pronto para integrar com uma API externa como remove.bg.

# Tecnologias utilizadas
Node.js

Express

Cors

Multer (para uploads) 

---

### 🔑 Configuração da API do Remove.bg

Para utilizar a funcionalidade de remoção de fundo da imagem, é necessário obter uma chave de API gratuita ou paga no site da [Remove.bg](https://www.remove.bg/api).

**Passos para obter a chave:**

1. Acesse: [https://www.remove.bg/api](https://www.remove.bg/api)
2. Clique em **"Get API Key"** e crie sua conta (ou faça login).
3. Copie a chave de API gerada no seu painel.

**Configuração no projeto:**

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione a seguinte variável ao arquivo:
REMOVE_BG_API_KEY= sua_chave_aqui


# Instalação
1. Clone o repositório:

- git clone https://github.com/rlsgabriella/projeto-back.git

2.  Acesse o diretório:

- cd projeto-back

3.  Instale as dependências:

npm install

4. Inicie o servidor:

- node index.js


| Método | Rota           | Descrição                           |
| ------ | -------------- | ----------------------------------- |
| GET    | /usuarios      | Retorna usuários cadastrados        |
| POST   | /usuarios      | Cadastra um novo usuário            |
| POST   | /api/remove-bg | (Opcional) Remove o fundo da imagem |


✅ (próximos passos)

 -Aplicar melhorias no projeto

 -Implementar integração com API remove.bg ou IA local

 -Armazenar histórico de imagens removidas

 -Upload com Multer

 Autenticação (futuramente)

