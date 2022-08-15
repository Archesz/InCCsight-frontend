# InCCsight - Frontend

Desenvolvimento da interface do software InCCsight (Software para analise e visualização de dados sobre o Corpo Caloso)

### Desenvolvimento
1. Clone esse repositório com `git clone https://github.com/Archesz/InCCsight-frontend`.
2. instale as depêndencias com `npm install`
3. Execute `yarn electron:serve` para executar o software.
4. Execute `yarn electron:build` para buildar o executável da ferramenta.

### Tecnologias
- React.js (Interface)
- Electron.js (Desktop Dev)
- NOde.js (Comunicação Backend)

### Telas
1. Entrada de dados: Essa tela é a tela de entrada da ferramenta, onde o usuário poderá inserir o caminho de pastas de sujeitos ou grupos. 
   - Essa tela deve possuir campos de preenchimento e validação, além de informações básicas (contato, descrição e repositório).
   - Após inserido os dados, deve existir um botão que enviará os caminhos para o backend realizar a execução.

### Comunicação
1. A comunicação com o terminal para iniciar a ferramenta é: `python app.py`
    - `python app.py -f ./Subject_00001 ./Subject_00002 ...`: -f passa o caminho de uma pasta (sujeito) podendo selecionar multiplos.
    - `python app.py -p ./Healt_Controls ./Condition_X` -p passa o caminho de pastas com vários sujeitos.
