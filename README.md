# tempStatus

Projeto desenvolvido em **React Native** utilizando **Expo**, com foco em exibição de informações de status a partir de dados definidos no próprio projeto. O aplicativo é voltado para fins educacionais e prática de desenvolvimento mobile.

---

## Sobre o projeto

O **tempStatus** é um aplicativo mobile criado com React Native e Expo. Ele utiliza dados estáticos (definidos em um arquivo JSON) para exibir informações de forma organizada na interface do usuário. O projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de desenvolvimento mobile, como estrutura de componentes, leitura de dados e renderização de interface.

---

## Requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* Node.js (versão LTS recomendada)
* npm ou yarn
* Git
* Expo Go (no celular) ou emulador configurado

---

## Clonando o repositório

```bash
git clone https://github.com/Mcaua7/tempStatus.git
```

```bash
cd tempStatus
```

---

## Instalando as dependências

Após entrar na pasta do projeto, instale as dependências:

```bash
npm install
```

Ou, se preferir usar yarn:

```bash
yarn install
```

---

## Executando o projeto

Para iniciar o projeto com Expo, execute:

```bash
npx expo start
```

Após iniciar, você pode:

* Escanear o QR Code com o aplicativo Expo Go no celular
* Pressionar `a` para abrir no emulador Android
* Pressionar `i` para abrir no simulador iOS (macOS)

---

## Estrutura do projeto

```text
tempStatus
 ├── assets/              # Recursos estáticos (imagens, ícones etc.)
 ├── App.js               # Arquivo principal do aplicativo
 ├── data.json            # Dados utilizados pelo aplicativo
 ├── index.js             # Ponto de entrada da aplicação
 ├── app.json             # Configurações do Expo
 ├── package.json         # Dependências e scripts
 ├── package-lock.json    # Versão exata das dependências
 └── README.md            # Documentação do projeto
```

---

## Requisitos opcionais

* Conta no Expo (opcional, utilizada para builds):

```bash
npx expo login
```

* Arquivo `.env`, caso o projeto utilize variáveis de ambiente

---

## Observações

* O computador e o celular devem estar conectados à mesma rede Wi-Fi
* Verifique a versão do Node.js em caso de erros
* Consulte o arquivo `package.json` para outros scripts disponíveis

---

## Autor

Cauã

GitHub: [https://github.com/Mcaua7](https://github.com/Mcaua7)

---

Este projeto é voltado para fins educacionais e pode ser livremente estudado e modificado.
