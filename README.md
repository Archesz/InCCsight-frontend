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
0. **Splash Logo**: Ao iniciar o software, deve apresentar uma "splash art" enquanto a ferramneta inicia.
   - [x] A tela deve ser curta, cerca de 2 a 4 segundos.
   - [x] Deve ser o logo do InCCsight ou semelhante. 

1. **Entrada de dados:** Essa tela é a tela de entrada da ferramenta, onde o usuário poderá inserir o caminho de pastas de sujeitos ou grupos. 
   - [x] Essa tela deve possuir campos de preenchimento e validação, além de informações básicas (contato, descrição e repositório).
   - [x] Após inserido os dados, deve existir um botão que enviará os caminhos para o backend realizar a execução.

2. **Visualização dos dados:** A tela de visualização deve conter todas as tabelas, gráficos e formas de visualizações da ferramenta original, além da possibilidade de implementar novas.
   - [x] Tabelas
   - [x] Boxplot
   - [x] Lines
   - [x] Inserção de novas visualizações
  
3. **Configuração:** Essa tela deve permitir que o usuário altere ou realize configurações sobre a ferramenta. Desde configurações estéticas (tema, cores, tamanho de fonte e afins) quanto de inserir novos métodos e gráficos.

### Aplicação Desktop
Por ser uma aplicação desktop (feita com electron), algumas features foram inseridas. 

- [x] Icone de inicialização.
- [x] Instalação através do método convencional (clique em um botão).
- [x] Notificação.
- [x] Banco de dados local para armazenar informações de usuário.

### Comunicação
1. A comunicação com o terminal para iniciar a ferramenta é: `python app.py`
    - `python app.py -f ./Subject_00001 ./Subject_00002 ...`: -f passa o caminho de uma pasta (sujeito) podendo selecionar multiplos.
    - `python app.py -p ./Healt_Controls ./Condition_X` -p passa o caminho de pastas com vários sujeitos.
