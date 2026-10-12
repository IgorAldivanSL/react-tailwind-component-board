# Tailwind Play — exercícios, soluções e checkpoints

Este documento reúne a solução de referência e as respostas conceituais para os nove exercícios do PDF da atividade. Para seguir o fluxo pedido na atividade, primeiro cole o HTML base sem classes em [Tailwind Play](https://play.tailwindcss.com/), tente estilizar por conta própria e só então compare com os exemplos abaixo. O projeto React entregue separadamente demonstra os mesmos conceitos de forma navegável.

> CSS inicial comum aos exercícios: `@import "tailwindcss";`. Nos exercícios 03 e 09, use também a configuração de tokens indicada nesses tópicos.

## 01 — Card de Perfil: utility-first

### HTML de referência estilizado

```html
<main class="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
  <article class="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
    <div class="flex items-center gap-4">
      <div class="size-20 shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white"></div>
      <div class="min-w-0">
        <span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">Front-end</span>
        <h1 class="mt-2 text-xl font-bold tracking-normal text-gray-900">Igor Aldivan</h1>
        <p class="mt-1 text-sm leading-5 text-gray-500">FullStack Developer · React · Node • PHP • Angular • Laravel</p>
      </div>
    </div>
    <p class="mt-6 leading-7 text-gray-600">Estudando como pequenas utilities podem ser combinadas para construir uma interface completa sem criar uma classe CSS para cada elemento.</p>
    <div class="mt-6 flex gap-3">
      <button class="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-300">Seguir</button>
      <button class="rounded-xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50">Perfil</button>
    </div>
  </article>
</main>
```

### O que fazem as classes

| Classe | Função |
|---|---|
| `min-h-screen` | Define altura mínima de uma viewport. |
| `bg-gray-100` | Aplica fundo cinza claro. |
| `mx-auto` | Centraliza horizontalmente um bloco com largura definida. |
| `max-w-md` | Limita a largura máxima do card ao tamanho `md`. |
| `p-6` | Aplica espaçamento interno nos quatro lados. |
| `flex` | Ativa Flexbox. |
| `items-center` | Alinha os itens no eixo transversal. |
| `gap-4` | Cria espaço entre itens de um layout flex/grid. |
| `size-20` | Define largura e altura iguais. |
| `rounded-full` | Cria borda totalmente arredondada, útil para avatar e pill. |
| `shadow-xl` | Aplica sombra mais pronunciada. |
| `flex-1` | Permite que o botão ocupe o espaço flexível disponível. |

### Experimentos obrigatórios e efeito esperado

- `p-6` → `p-10`: aumenta o espaço interno do card.
- `max-w-md` → `max-w-xl`: permite um card mais largo.
- `rounded-3xl` → `rounded-none`: remove o arredondamento.
- `shadow-xl` → `shadow-none`: remove a sombra.
- `gap-4` → `gap-8`: aumenta o espaço entre os itens.
- `size-20` → `size-28`: aumenta largura e altura do avatar.
- `bg-blue-600` → `bg-purple-600`: altera a cor do avatar/botão correspondente.
- `flex` → `flex-col`: empilha os itens verticalmente, em vez de colocá-los em linha.
- Remover `flex-1` do botão Seguir: o botão deixa de preencher o espaço flexível restante.
- `tracking-wider` → `tracking-normal`: reduz o espaçamento entre letras para o padrão.

### Checkpoint — respostas

1. **O que é utility-first?** É uma abordagem em que o estilo é construído combinando classes pequenas, cada uma responsável por uma propriedade ou conjunto específico de propriedades, diretamente no markup.
2. **Padding, margin e gap:** padding é o espaço interno de um elemento; margin é o espaço externo; gap é o espaço entre itens de um layout Grid ou Flexbox.
3. **O que `max-w-md` controla?** A largura máxima do elemento, evitando que o card fique largo demais.
4. **Por que `size-20` substitui width e height?** Porque a utility define largura e altura com o mesmo valor.
5. **O que `flex-1` faz no botão?** Permite que o botão cresça e ocupe o espaço disponível no container flexível.

## 02 — Product Grid: estados e responsividade

### Solução de referência

```html
<main class="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6">
  <section class="mx-auto max-w-6xl">
    <header class="mb-8">
      <span class="text-sm font-bold uppercase tracking-widest text-blue-300">Tailwind Play</span>
      <h1 class="mt-2 text-3xl font-bold">Product Grid Responsivo</h1>
      <p class="mt-2 text-slate-400">Pratique breakpoints, Grid, hover, focus, active e disabled.</p>
    </header>
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article class="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition hover:-translate-y-1 hover:border-blue-400">
        <div class="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-950 transition duration-300 group-hover:scale-105"><span class="text-5xl font-black">01</span></div>
        <div class="p-5"><span class="rounded-full bg-slate-800 px-3 py-1 text-xs">Starter</span><h2 class="mt-4 text-xl font-bold">UI Foundations</h2><p class="mt-2 text-sm text-slate-400">Layout, spacing, tipografia e cores.</p><button class="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 focus-visible:ring-4 focus-visible:ring-blue-300 active:scale-95">Escolher</button></div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition hover:-translate-y-1 hover:border-blue-400">
        <div class="flex aspect-video items-center justify-center bg-gradient-to-br from-violet-600 to-fuchsia-950 transition duration-300 group-hover:scale-105"><span class="text-5xl font-black">02</span></div>
        <div class="p-5"><span class="rounded-full bg-slate-800 px-3 py-1 text-xs">Intermediate</span><h2 class="mt-4 text-xl font-bold">Responsive UI</h2><p class="mt-2 text-sm text-slate-400">Breakpoints e variantes condicionais.</p><button class="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 focus-visible:ring-4 focus-visible:ring-blue-300 active:scale-95">Escolher</button></div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition hover:-translate-y-1 hover:border-slate-500">
        <div class="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 transition duration-300 group-hover:rotate-2"><span class="text-5xl font-black">03</span></div>
        <div class="p-5"><span class="rounded-full bg-slate-800 px-3 py-1 text-xs">Locked</span><h2 class="mt-4 text-xl font-bold">Advanced UI</h2><p class="mt-2 text-sm text-slate-400">Este plano ainda está indisponível.</p><button disabled class="mt-5 w-full rounded-lg bg-slate-700 px-4 py-3 font-semibold text-slate-400 disabled:cursor-not-allowed disabled:opacity-50">Indisponível</button></div>
      </article>
    </div>
  </section>
</main>
```

### Dez classes de responsividade/estados

- `grid`: ativa CSS Grid.
- `grid-cols-1`: uma coluna por padrão.
- `sm:grid-cols-2`: duas colunas a partir do breakpoint `sm`.
- `lg:grid-cols-3`: três colunas a partir de `lg`.
- `group`: permite que estados do elemento pai sejam usados em descendentes.
- `group-hover:scale-105`: aumenta ligeiramente o elemento visual quando o grupo recebe hover.
- `hover:border-blue-400`: altera a borda quando o ponteiro passa sobre o card.
- `focus-visible:ring-4`: destaca o botão quando recebe foco visível, normalmente por teclado.
- `active:scale-95`: reduz ligeiramente o botão enquanto é pressionado.
- `disabled:opacity-50`: reduz a opacidade quando o botão está desabilitado.

### Experimentos e checkpoint

- Remover `sm:grid-cols-2`: em telas médias a grade continua com uma coluna até atingir `lg`.
- `lg:grid-cols-3` → `lg:grid-cols-4`: solicita quatro colunas grandes; com três cards sobrará espaço na última coluna.
- Remover `group`: `group-hover:*` deixa de responder ao hover do pai.
- `group-hover:scale-105` → `group-hover:rotate-2`: gira a área visual em vez de aumentá-la.
- Remover `transition`: a mudança de estado deixa de ser animada suavemente.
- `active:scale-95` → `active:scale-90`: torna o efeito de pressionar mais intenso.
- Remover `disabled:opacity-50`: o botão desabilitado mantém sua opacidade normal.
- Quarto card: duplique um `article`, troque número, rótulo, título e descrição.

## 03 — Theme Lab: tokens, dark mode e @layer

### CSS fornecido

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-primary: #2563eb;
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-chestnut: var(--chestnut);
  --color-success: var(--success);
}
:root { --background:#fff; --surface:#f4f4f5; --foreground:#18181b; --muted:#71717a; --border:#e4e4e7; --chestnut:#973f29; --success:#15803d; }
.dark { --background:#15155a; --surface:#18181b; --foreground:#fafafa; --muted:#a1a1aa; --border:#27272a; --chestnut:#d9785f; --success:#4ade80; }
@layer components {
  .custom-colors { @apply bg-chestnut p-2 text-center text-2xl text-white; }
  .success-panel { @apply rounded-xl border border-border bg-surface p-4 text-foreground; }
}
```

### HTML de referência

```html
<main class="min-h-screen bg-background p-6 text-foreground">
  <header class="mx-auto mb-8 max-w-5xl"><span class="text-sm font-semibold text-primary">Theme Lab</span><h1 class="mt-2 text-3xl font-bold">Tailwind Design Tokens</h1><p class="mt-2 text-muted">O mesmo componente funciona com tokens do tema claro e escuro.</p></header>
  <div class="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
    <section class="rounded-2xl border border-border bg-surface p-5 shadow-sm"><span class="text-xs font-bold uppercase text-muted">Light</span><h2 class="mt-2 text-xl font-bold">Tema claro</h2><p class="mt-2 text-muted">Valores definidos em :root.</p><div class="mt-4 rounded-xl border border-border bg-background p-4"><strong>Surface token</strong><p class="mt-1 text-sm text-muted">Background, surface, muted e border.</p></div><div class="custom-colors mt-4 rounded-xl">Cor Chestnut customizada</div><button class="mt-4 rounded-lg bg-primary px-4 py-2 font-semibold text-white">Primary Button</button></section>
    <section class="dark rounded-2xl border border-border bg-background p-5 text-foreground"><span class="text-xs font-bold uppercase text-muted">Dark</span><h2 class="mt-2 text-xl font-bold">Tema escuro</h2><p class="mt-2 text-muted">Valores definidos em .dark.</p><div class="mt-4 rounded-xl border border-border bg-surface p-4"><strong>Surface token</strong><p class="mt-1 text-sm text-muted">As utilities são as mesmas; os tokens mudam.</p></div><div class="custom-colors mt-4 rounded-xl">Cor Chestnut customizada</div><button class="mt-4 rounded-lg bg-primary px-4 py-2 font-semibold text-white">Primary Button</button><p class="mt-3 text-sm dark:text-blue-300">Esta frase utiliza a variante dark:.</p></section>
  </div>
</main>
```

### Checkpoint — respostas

1. `:root` define variáveis globais padrão; `.dark` sobrescreve variáveis quando o tema escuro está ativo; `@theme` conecta valores/variáveis a utilities e tokens reconhecidos pelo Tailwind.
2. `--color-primary` define o token de cor `primary`, que permite utilizar `bg-primary` e utilities relacionadas.
3. Nomes semânticos descrevem o papel da cor (fundo, superfície, texto secundário) e não a aparência exata, facilitando mudar tema sem reescrever componentes.
4. `@custom-variant` define uma variante Tailwind personalizada; aqui, `dark:` corresponde a elementos dentro de `.dark`.
5. `@layer components` organiza classes de componentes customizados dentro da camada apropriada.
6. `@apply` incorpora utilities Tailwind existentes dentro de uma regra CSS própria.

### Experimentos

- Mude `--color-primary` e observe todos os elementos com `bg-primary`.
- Altere `--chestnut` somente dentro de `.dark`; o bloco dark deve mudar sem afetar o claro.
- Remova `class="dark"`: o segundo painel deixa de usar os valores escuros.
- Crie `--color-success` em `@theme`, vinculado a `var(--success)`, e defina `--success` em `:root` e `.dark`; depois use `bg-success`.
- Crie outra classe em `@layer components` e aplique `@apply` com utilities.
- Troque `lg:grid-cols-2` por `md:grid-cols-2` ou por uma coluna para observar a mudança do breakpoint.

## 04 — Login Form: focus e acessibilidade

### HTML de referência

```html
<main class="grid min-h-screen place-items-center bg-slate-100 p-4">
  <section class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
    <h1 class="text-2xl font-bold text-slate-900">Welcome back</h1><p class="mt-2 text-sm text-slate-500">Entre na sua conta para continuar.</p>
    <form class="mt-7 space-y-4">
      <div><label for="email" class="mb-2 block text-sm font-medium text-slate-700">E-mail</label><input id="email" type="email" placeholder="you@example.com" class="h-12 w-full rounded-xl border border-slate-300 px-4 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100" /></div>
      <div><label for="password" class="mb-2 block text-sm font-medium text-slate-700">Senha</label><input id="password" type="password" placeholder="••••••••" class="h-12 w-full rounded-xl border border-slate-300 px-4 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100" /></div>
      <div class="flex items-center justify-between gap-3 text-sm"><label class="flex items-center gap-2"><input type="checkbox" checked class="size-4 accent-blue-600" />Lembrar de mim</label><a href="#forgot" class="font-semibold text-blue-600 hover:underline">Esqueci minha senha</a></div>
      <button type="submit" class="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Sign In</button>
    </form>
  </section>
</main>
```

### Checkpoint — respostas

1. `focus:` aplica estilo sempre que o elemento tem foco; `focus-visible:` enfatiza o foco quando o navegador considera que ele deve ficar visualmente indicado, como na navegação por teclado.
2. `outline-none` remove o contorno padrão. Deve ser usado apenas se outro indicador de foco visível for fornecido.
3. `accent-*` altera a cor de destaque de controles nativos, como checkbox e radio.
4. Labels identificam o propósito do campo e, quando associados com `for`/`htmlFor` ao `id`, aumentam a área clicável e a acessibilidade.
5. `space-y-4` adiciona espaçamento vertical entre filhos consecutivos, sem aplicar esse espaçamento depois do último filho.

### Experimentos

- Altere `max-w-md` para `max-w-lg` ou `max-w-sm`.
- Remova `space-y-4` para perceber a perda de espaçamento vertical.
- `h-12` → `h-14` aumenta a altura dos inputs.
- Remova `focus:ring-4`: o halo deixa de aparecer ao focar, embora a borda possa continuar mudando.
- Mude `accent-blue-600` para `accent-emerald-600`.
- Altere `rounded-xl` para `rounded-none`.
- Navegue com Tab e confirme que todos os controles têm foco visível.

## 05 — Pricing Cards: composição e hierarquia

### HTML de referência

```html
<main class="min-h-screen bg-slate-50 px-4 py-12">
  <section class="mx-auto max-w-6xl"><header class="mb-10 text-center"><span class="text-sm font-bold uppercase tracking-widest text-blue-600">Pricing</span><h1 class="mt-2 text-3xl font-bold">Escolha o plano ideal</h1><p class="mt-2 text-slate-500">Compare recursos e preços.</p></header>
    <div class="grid gap-6 lg:grid-cols-3">
      <article class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 class="text-lg font-bold">Starter</h2><div class="mt-4"><strong class="text-4xl font-extrabold">$0</strong><span class="ml-1 text-sm text-slate-500">/ month</span></div><ul class="my-6 flex-1 space-y-3 text-slate-600"><li>✓ Projects</li><li>✓ Basic support</li></ul><button class="w-full rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-50">Choose</button></article>
      <article class="relative flex flex-col rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-xl lg:-translate-y-2"><span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">Popular</span><h2 class="text-lg font-bold">Pro</h2><div class="mt-4"><strong class="text-4xl font-extrabold">$29</strong><span class="ml-1 text-sm text-slate-500">/ month</span></div><ul class="my-6 flex-1 space-y-3 text-slate-600"><li>✓ Projects</li><li>✓ Analytics</li><li>✓ Priority support</li></ul><button class="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">Choose</button></article>
      <article class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 class="text-lg font-bold">Team</h2><div class="mt-4"><strong class="text-4xl font-extrabold">$79</strong><span class="ml-1 text-sm text-slate-500">/ month</span></div><ul class="my-6 flex-1 space-y-3 text-slate-600"><li>✓ Projects</li><li>✓ Analytics</li><li>✓ Team access</li></ul><button class="w-full rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-50">Choose</button></article>
    </div>
  </section>
</main>
```

### Experimentos

- Remova `lg:-translate-y-2`: o card Pro deixa de ficar elevado.
- Troque `border-2` por `ring-4`: o destaque passa a ser um anel, não uma borda mais espessa.
- Altere a paleta do plano Pro, por exemplo `blue` para `violet` em borda, badge e CTA.
- `lg:grid-cols-3` → `md:grid-cols-3`: os três cards passam a caber em telas médias.
- Troque `text-4xl` por `text-3xl` ou `text-5xl` para comparar a hierarquia dos preços.
- Adicione `hover:-translate-y-1 hover:shadow-lg transition` aos três cards.

## 06 — Settings Toggle: peer e checked

### HTML de referência

```html
<main class="grid min-h-screen place-items-center bg-slate-50 p-4">
  <section class="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h1 class="text-2xl font-bold">Notification Settings</h1><p class="mt-2 text-sm text-slate-500">Controle suas preferências de comunicação.</p>
    <div class="mt-5 divide-y divide-slate-200">
      <label class="flex cursor-pointer items-center justify-between gap-4 py-5"><span><strong class="block">Email notifications</strong><span class="mt-1 block text-sm text-slate-500">Receive product updates</span></span><span class="relative inline-flex items-center"><input type="checkbox" checked class="peer sr-only" /><span class="h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-blue-600"></span><span class="pointer-events-none absolute left-1 size-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span></span></label>
      <label class="flex cursor-pointer items-center justify-between gap-4 py-5"><span><strong class="block">Marketing</strong><span class="mt-1 block text-sm text-slate-500">Receive campaigns</span></span><span class="relative inline-flex items-center"><input type="checkbox" class="peer sr-only" /><span class="h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-blue-600"></span><span class="pointer-events-none absolute left-1 size-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span></span></label>
    </div>
  </section>
</main>
```

### Checkpoint — respostas

1. O input usa `peer` para que elementos irmãos posteriores possam reagir ao estado dele.
2. `peer-checked:` aplica uma utility quando o input marcado como peer está selecionado.
3. `sr-only` esconde visualmente o checkbox, mas mantém o controle disponível para leitores de tela e teclado.
4. O knob usa `absolute` para ficar posicionado dentro da área do switch sem alterar o fluxo do layout.
5. `translate-x-5` move o knob horizontalmente para indicar o estado ligado.

### Experimentos

Remover `peer` quebra as variantes `peer-checked:*`; mudar `peer-checked:bg-blue-600` altera a cor ligada; mudar `translate-x-5` muda a distância do knob; remover `sr-only` mostra o checkbox nativo; altere `h-7 w-12` e `size-5` em conjunto para redimensionar; duplique uma preferência para criar uma terceira opção.

## 07 — FAQ Accordion: details e open

### HTML de referência

```html
<main class="min-h-screen bg-slate-50 px-4 py-12"><section class="mx-auto max-w-3xl"><h1 class="mb-6 text-3xl font-bold">Frequently Asked Questions</h1><div class="space-y-4">
  <details open class="group rounded-xl border border-blue-300 bg-blue-50 open:border-blue-500"><summary class="cursor-pointer list-none p-4 font-semibold marker:hidden hover:text-blue-700"><span class="mr-2 inline-block transition-transform group-open:rotate-90">›</span>O que é utility-first?</summary><p class="px-5 pb-5 text-sm leading-6 text-slate-600">É uma abordagem baseada na composição de pequenas utilities.</p></details>
  <details class="group rounded-xl border border-slate-200 bg-white open:bg-blue-50"><summary class="cursor-pointer list-none p-4 font-semibold marker:hidden hover:text-blue-700">Tailwind substitui CSS?</summary><p class="px-5 pb-5 text-sm leading-6 text-slate-600">Tailwind continua sendo CSS, mas oferece utilities e ferramentas.</p></details>
  <details class="group rounded-xl border border-slate-200 bg-white open:bg-blue-50"><summary class="cursor-pointer list-none p-4 font-semibold marker:hidden hover:text-blue-700">Como funciona dark mode?</summary><p class="px-5 pb-5 text-sm leading-6 text-slate-600">Variantes permitem alterar estilos quando um tema dark está ativo.</p></details>
  <details class="group rounded-xl border border-slate-200 bg-white open:bg-blue-50"><summary class="cursor-pointer list-none p-4 font-semibold marker:hidden hover:text-blue-700">Por que usar HTML nativo?</summary><p class="px-5 pb-5 text-sm leading-6 text-slate-600">Details e summary oferecem comportamento nativo de expandir e recolher.</p></details>
</div></section></main>
```

### Checkpoint — respostas

1. `open` é um atributo booleano que deixa o elemento `<details>` expandido inicialmente.
2. A variante `open:` aplica estilos enquanto o `<details>` está aberto.
3. `marker:hidden` remove o marcador padrão da lista/summary, permitindo criar um indicador próprio.
4. `details` e `summary` oferecem semântica, interação por teclado e comportamento nativo, reduzindo a necessidade de JavaScript e de controles customizados.

Experimente alterar `open:bg-blue-50`, remover `open:border-blue-500`, remover `marker:hidden`, alterar `space-y-4`, adicionar a quarta pergunta e incluir `hover:` no summary.

## 08 — Dashboard Summary: Grid e composição

### HTML de referência

```html
<main class="min-h-screen bg-slate-50 p-4 sm:p-8"><section class="mx-auto max-w-6xl"><header class="flex items-center justify-between gap-4"><div><h1 class="text-3xl font-bold">Overview</h1><p class="mt-1 text-sm text-slate-500">Resumo do desempenho.</p></div><button class="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">Export</button></header>
  <div class="mt-6 grid gap-4 sm:grid-cols-3"><article class="rounded-xl border bg-white p-5"><span class="text-sm text-slate-500">Revenue</span><strong class="mt-2 block text-2xl">128k</strong></article><article class="rounded-xl border bg-white p-5"><span class="text-sm text-slate-500">Orders</span><strong class="mt-2 block text-2xl">1,842</strong></article><article class="rounded-xl border bg-white p-5"><span class="text-sm text-slate-500">Conversion</span><strong class="mt-2 block text-2xl">4.7%</strong></article></div>
  <div class="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]"><section class="rounded-xl border bg-white p-5"><h2 class="font-bold">Performance</h2><div class="mt-6 flex h-44 items-end gap-3"><span class="h-16 flex-1 rounded-t bg-blue-500"></span><span class="h-24 flex-1 rounded-t bg-blue-500"></span><span class="h-20 flex-1 rounded-t bg-blue-500"></span><span class="h-32 flex-1 rounded-t bg-blue-500"></span><span class="h-28 flex-1 rounded-t bg-blue-500"></span><span class="h-40 flex-1 rounded-t bg-violet-500"></span></div></section><aside class="rounded-xl border bg-white p-5"><h2 class="font-bold">Activity</h2><p class="mt-4 border-b py-3 text-sm">New order</p><p class="border-b py-3 text-sm">Payment approved</p><p class="py-3 text-sm">User created</p></aside></div>
</section></main>
```

### Checkpoint — respostas

1. Grid é melhor para a estrutura bidimensional (cards em linhas e colunas e as duas áreas inferiores).
2. Flexbox é melhor para alinhar itens em uma única direção, como título e botão no header e barras na base do gráfico.
3. `lg:grid-cols-[2fr_1fr]` cria duas colunas no breakpoint `lg`, distribuindo o espaço disponível em proporção 2:1.
4. `flex-1` permite que cada barra ocupe uma parte igual do espaço horizontal disponível.
5. Resposta reflexiva sugerida: `flex`, `grid`, `gap-*`, `p-*`, `rounded-*`, `text-*`, `bg-*`, `sm:*`, `lg:*` e `hover:*` aparecem repetidamente porque cobrem layout, espaçamento, tipografia, cor e estados.

Experimente trocar `sm:grid-cols-3`, mudar a proporção `lg:grid-cols-[2fr_1fr]`, variar alturas `h-*`, remover `flex-1` das barras, alterar a cor da última barra, modificar `max-w-6xl` e criar um quarto KPI.

## 09 — Theme Toggle: botão Light / Dark

### CSS e markup principais

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-primary: #2563eb;
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-chestnut: var(--chestnut);
}
:root { --background:#fff; --surface:#f4f4f5; --foreground:#18181b; --muted:#71717a; --border:#e4e4e7; --chestnut:#973f29; }
.dark { --background:#15155a; --surface:#18181b; --foreground:#fafafa; --muted:#a1a1aa; --border:#27272a; --chestnut:#d9785f; }
```

```html
<main class="grid min-h-screen place-items-center bg-background p-4 text-foreground transition-colors duration-500">
  <section class="w-full max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-lg">
    <header class="flex items-center justify-between gap-4"><div><span class="text-sm font-bold text-primary">Theme Lab</span><h1 class="mt-1 text-2xl font-bold">Light & Dark Mode</h1></div><button type="button" onclick="document.documentElement.classList.toggle('dark')" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-amber-300 dark:text-slate-900"> <span class="dark:hidden">☾ Dark mode</span><span class="hidden dark:inline">☀ Light mode</span></button></header>
    <p class="mt-4 text-muted">O mesmo componente muda de aparência sem trocar sua estrutura.</p>
    <div class="mt-5 rounded-xl border border-border bg-background p-4"><strong>Surface token</strong><p class="mt-1 text-sm text-muted">Background e texto respondem ao tema.</p></div>
    <div class="custom-colors mt-4 rounded-xl">Chestnut</div>
    <div class="mt-4 rounded-xl border border-green-300 bg-green-50 p-4 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100"><strong>Success alert</strong><p class="mt-1 text-sm">Um alerta de exemplo.</p></div>
  </section>
</main>
```

### Checkpoint — respostas

1. A classe `.dark` é adicionada/removida no elemento raiz `document.documentElement`, isto é, no `<html>`.
2. `classList.toggle('dark')` adiciona a classe se ela não existe e remove se já existe.
3. `bg-background` muda porque a utility usa a variável semântica `--background`, cujo valor é redefinido no seletor `.dark`.
4. Tokens mudam o valor compartilhado de uma cor/função semântica em vários componentes; `dark:` aplica uma utility alternativa somente no contexto do tema escuro.
5. `dark:hidden` esconde o elemento quando `.dark` está ativo.
6. Dois spans alternativos são controlados por `dark:hidden` e `hidden dark:inline`; cada um fica visível no tema correspondente.
7. `transition-colors` suaviza a transição de cores e reduz a mudança visual abrupta.

### Experimentos obrigatórios

Clique repetidamente no botão e observe a classe no `<html>`; remova `transition-colors`; altere `duration-500` para `duration-1000`; remova `dark:hidden`; remova `hidden dark:inline`; troque a cor do botão; altere `--background` e `--chestnut` em `.dark`; adicione outra área com `bg-surface`; aplique explicitamente uma utility `dark:`. Para o desafio de switch, preserve a mesma chamada `document.documentElement.classList.toggle('dark')` e use um checkbox estilizado com `peer`/`peer-checked`.

## Referências oficiais

- [Tailwind CSS — Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Responsive design](https://tailwindcss.com/docs/responsive-design)
- [Hover, focus and other states](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Theme variables](https://tailwindcss.com/docs/theme)
- [Dark mode](https://tailwindcss.com/docs/dark-mode)
- [Functions and directives](https://tailwindcss.com/docs/functions-and-directives)
- [Adding custom styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Grid template columns](https://tailwindcss.com/docs/grid-template-columns)
- [Flex](https://tailwindcss.com/docs/flex)
- [Screen readers](https://tailwindcss.com/docs/screen-readers)
- [Transition property](https://tailwindcss.com/docs/transition-property)