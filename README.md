# React Desempenho de Lojas - Alex Sandro A. Souza @asasouza
Esta aplicação está disponível para uso em https://react-store-performance.herokuapp.com/.

## Configurando o ambiente de desenvolvimento
1. Acesse o repositório do projeto hospedado no <a href='https://github.com/asasouza/react_store_performance'>Github</a> e clone-o para o diretório desejada através do comando <code>git clone https://github.com/asasouza/react_store_performance.git</code>.
	- Obs: Caso opte por não realizar a operação anterior pelo <i>git</i> é possível realizar o download do projeto no formato <i>.zip</i> e descompacta-lo no diretório de preferência.
2. Com o prompt de comando de seu sistema operacional, vá a pasta onde o projeto foi salvo e execute o comando <code>npm install</code>. Este comando instalará todas as dependências listadas na aplicação.
	- Caso não possua, é necessária a instalação do npm, disponível através deste <a href="https://www.npmjs.com/get-npm">link</a>
3. Com as dependências instaladas, execute o comando <code>npm start</code> dentro do diretório do projeto. Isto deve iniciar um servidor local de testes da aplicação. Assim abra o navegador no endereço <code>localhost:8080</code> e teste-a.

## Estrutura de arquivos
A aplicação é divida na seguinte hierarquia de diretórios:

	|-app
		|- actions
		|- components
		|- reducers
		|- resources
			|- data
			|- images
			|- fonts
		|- styles
		index.js

Para testes da aplicação foram utilizados os dados disponibilizados nos <i>resources</i> enviados, entretanto, devido à um problema no <i>loader 'json-loader'</i> do Webpack, que é reportado neste <a href="https://github.com/webpack-contrib/json-loader/pull/11">issue</a> do projeto, o arquivo em <i>.json</i> não era analisado corretamente pela aplicação, assim foi necessária a mudança da extensão do arquivo de dados para <b><i>.js</i></b> e adicionada a expressão <code lang="promt">export default</code>. Ainda assim, a estrutura dos dados não foi modificada e assim foi utilizada pela aplicação.

## Gerando arquivos de produção
Para gerar os arquivos de produção é necessário executar no diretório do projeto o comando <code>npx webpack</code>. Este gerará a pasta contendo toda o código unificado e minificado da aplicação e importará as imagens, fontes e css necessários e utilizados pela aplicação.

## Tecnologias
Foram utilizadas as seguintes tecnologias para desenvolvimento desta aplicação de teste:
		- React JS;
		- Redux;
		- Leaflet;
		- Webpack;
		- Javascript ES6 + Babel;
		- HTML + CSS;
		- ESLint;
		- Bootstrap 4 + Flexbox;