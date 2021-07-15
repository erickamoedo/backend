Aula: https://www.udemy.com/course/projeto-completo-xd-nodejs-mongodb-react-native-e-react/learn/lecture/18473600#overview

1º npm init -y = inidica um diretorio com pacote node, e cria um arquivo chamado package.json

2º criar estrutura:

src

- config <br>
- controller <br>
- model <br>
- routes <br>
- index.js <br>

3º usar o "npm install express"

4º ira surgir uma nova pasta chamada node_modules e dentro do arquivo package.json irá ser adicionado a dependencia nova

5º Se precisar atualizar o express, deleta a pasta node_modules, e roda o comando: "npm install" que ele irá ler o arquivo package.json e instalar tudo que precisa.

6º Instalar o nodemon para sempre atualizar o ultimo arquivo node, sem ficar reiniciando: npm install -g nodemon

7º Vamos instalar o nodemon como uma dependencia de desenvolvimento (Somente em dev e nao em producao): npm install nodemin -D

8º nodemon src/index.js já resolve e nao precisa ficar resetando o server, basta um refresh

9º pode add um atalho em scripts dentro do package.json para start = nodemon src/index.js

10º instalar o $ npm install mongoose e ver se ficou em package.json certo

==========

- Navegador só faz Get, nao faz post... então por isso vamos usar o insomnia para testar a API

obs: Mongo vs Mysql: https://www.leak.pt/mongodb-vs-mysql/
