# React + Tailwind — Board de Componentes Estáticos

Projeto acadêmico desenvolvido com **React, Vite e Tailwind CSS**, com o objetivo de praticar a criação, composição e estilização de componentes reutilizáveis para interfaces web.

A aplicação reúne dez demonstrações de componentes e interfaces, organizadas em uma navegação que permite visualizar cada exercício individualmente.

## Objetivos

- Praticar a criação de componentes reutilizáveis com React.
- Aplicar classes utilitárias do Tailwind CSS para estilização.
- Desenvolver interfaces com diferentes estruturas e finalidades.
- Explorar responsividade, estados visuais e interação com componentes.
- Organizar o código em componentes e demonstrações independentes.
- Consolidar os conhecimentos adquiridos nas atividades acadêmicas.

## Tecnologias utilizadas

- **React** — construção de interfaces por meio de componentes.
- **Vite** — ambiente de desenvolvimento e ferramenta de build.
- **Tailwind CSS v4** — estilização com classes utilitárias.
- **JavaScript** — lógica e composição das interfaces.
- **ESLint** — apoio à identificação de problemas no código.
- **Git e GitHub** — versionamento e hospedagem do código-fonte.

## Componentes desenvolvidos

O projeto contém os seguintes componentes:

| Componente | Descrição |
|---|---|
| `Button` | Botões com variantes, tamanhos e estado desabilitado. |
| `Avatar` | Representação visual de usuários por iniciais e cores. |
| `Badge` | Indicadores visuais com diferentes variantes. |
| `ProfileCard` | Cartão de perfil que reutiliza outros componentes. |
| `ProductCard` | Cartão de produto com imagem e efeitos visuais. |
| `LoginForm` | Formulário de autenticação. |
| `KPICard` | Cartão para apresentação de indicadores. |
| `PricingCard` | Cartão de plano ou preço. |
| `Alert` | Alertas informativos com diferentes estados. |
| `Navbar` | Barra de navegação responsiva. |
| `MiniDashboard` | Painel resumido que combina indicadores e etiquetas. |

## Demonstrações

A aplicação disponibiliza uma navegação para acessar dez demonstrações:

1. Botões (`ButtonDemo`)
2. Avatar e etiquetas (`BadgeAvatarDemo`)
3. Cartão de perfil (`ProfileCardDemo`)
4. Cartão de produto (`ProductCardDemo`)
5. Formulário de login (`LoginFormDemo`)
6. Cartões de indicadores (`KPICardDemo`)
7. Cartões de preços (`PricingCardDemo`)
8. Alertas (`AlertDemo`)
9. Barra de navegação (`NavbarDemo`)
10. Mini dashboard (`MiniDashboardDemo`)

Cada demonstração apresenta um componente ou conjunto de componentes, facilitando a visualização de suas características.

## Pré-requisitos

Antes de executar o projeto, instale:

- [Node.js](https://nodejs.org/) — versão compatível com o Vite utilizado.
- npm, instalado junto com o Node.js.
- Git, caso deseje clonar o repositório.

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Substitua `<URL_DO_REPOSITORIO>` pela URL HTTPS do repositório no GitHub.

### 2. Entrar na pasta do projeto

```bash
cd react-tailwind-component-board
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação. Abra esse endereço no navegador para acessar o projeto.

### 5. Gerar a versão de produção

Para verificar se a aplicação pode ser compilada para produção, execute:

```bash
npm run build
```

Os arquivos gerados serão disponibilizados na pasta `dist`, caso a compilação seja concluída com sucesso.

## Estrutura do projeto

```text
react-tailwind-component-board/
├── public/
├── src/
│   ├── components/
│   │   ├── Alert.jsx
│   │   ├── Avatar.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── KPICard.jsx
│   │   ├── LoginForm.jsx
│   │   ├── MiniDashboard.jsx
│   │   ├── Navbar.jsx
│   │   ├── PricingCard.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProfileCard.jsx
│   ├── demos/
│   │   ├── AlertDemo.jsx
│   │   ├── BadgeAvatarDemo.jsx
│   │   ├── ButtonDemo.jsx
│   │   ├── KPICardDemo.jsx
│   │   ├── LoginFormDemo.jsx
│   │   ├── MiniDashboardDemo.jsx
│   │   ├── NavbarDemo.jsx
│   │   ├── PricingCardDemo.jsx
│   │   ├── ProductCardDemo.jsx
│   │   └── ProfileCardDemo.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Tailwind_Play.md
├── package.json
├── vite.config.js
└── README.md
```

A estrutura acima representa a organização prevista do projeto. Arquivos adicionais de configuração, como `eslint.config.js`, podem existir no repositório.

## Organização do código

- **`src/components/`**: contém os componentes reutilizáveis.
- **`src/demos/`**: contém as demonstrações individuais.
- **`src/App.jsx`**: controla a navegação entre as demonstrações.
- **`src/index.css`**: importa o Tailwind CSS.
- **`vite.config.js`**: configura o Vite, o React e a integração com Tailwind CSS.
- **`Tailwind_Play.md`**: documentação complementar dos exercícios e aprendizados do Tailwind Play.

## Conceitos praticados

Durante o desenvolvimento, foram explorados conceitos como:

- Componentização e reutilização de código.
- Propriedades (*props*) para personalização de componentes.
- Organização de interfaces com Flexbox e Grid.
- Classes utilitárias e estilização responsiva.
- Estados visuais, como hover e disabled.
- Composição de componentes para formar interfaces maiores.
- Navegação entre demonstrações com React.

## Documentação complementar

Consulte o arquivo [`Tailwind_Play.md`](./Tailwind_Play.md) para acompanhar os exercícios e aprendizados relacionados às atividades no Tailwind Play.

## Contexto acadêmico

Este projeto foi desenvolvido como atividade prática de estudos de desenvolvimento de interfaces web com React e Tailwind CSS.

## Autor

Igor Aldivan

## Licença

Projeto desenvolvido para fins acadêmicos. Caso seja necessária uma licença específica para redistribuição, ela deverá ser definida pelo autor.
