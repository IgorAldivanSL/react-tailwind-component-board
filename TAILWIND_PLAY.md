# Tailwind Play — Exercícios e Aprendizados

## Objetivo

Registrar os exercícios da atividade Tailwind Play, os conceitos estudados, as modificações propostas e as perguntas de revisão.

Os exercícios exploram a abordagem **utility-first** do Tailwind CSS, a construção de interfaces responsivas, os estados de interação, a acessibilidade e a utilização de temas.

## 01 — Profile Card: Utility-First

**Objetivo:** construir um cartão de perfil usando utilities do Tailwind CSS.

**Conceitos estudados:**
- Centralização com `mx-auto` e `place-items-center`.
- Espaçamento com `p-*`, `mt-*` e `gap-*`.
- Flexbox com `flex`, `items-center` e `flex-1`.
- Dimensões com `size-*` e `max-w-*`.
- Aparência com `rounded-*`, `border`, `shadow-*` e `bg-*`.
- Tipografia com `text-*`, `font-*`, `tracking-*` e `leading-*`.

**Modificações propostas:** alterar padding, largura máxima, bordas, sombras, espaçamento, tamanho do avatar, cor, direção do Flexbox e comportamento dos botões.

**Perguntas de revisão:**
1. O que significa utility-first?
2. Qual é a diferença entre padding, margin e gap?
3. O que `max-w-md` controla?
4. Como `size-20` define largura e altura?
5. Qual é a função de `flex-1`?

## 02 — Product Grid: Estados e Responsividade

**Objetivo:** construir uma grade responsiva de produtos com diferentes estados visuais.

**Conceitos estudados:**
- Grid com `grid` e `grid-cols-*`.
- Breakpoints com `sm:` e `lg:`.
- Estados com `hover:`, `focus-visible:`, `active:` e `disabled:`.
- Animações com `transition` e `duration-*`.
- Efeitos relacionados com `group` e `group-hover:`.
- Transformações com `scale-*` e `translate-y-*`.
- Proporção e recorte com `aspect-*` e `overflow-hidden`.

**Comportamento esperado:** uma coluna em telas pequenas, duas a partir do breakpoint `sm` e três no breakpoint `lg`.

**Modificações propostas:** alterar os breakpoints, experimentar quatro colunas, remover `group` e `transition`, trocar escala por rotação, modificar o estado `active`, ajustar a opacidade de elementos desabilitados e adicionar um quarto card.

**Revisão:** explicar dez classes relacionadas à responsividade ou aos estados.

## 03 — Theme Lab: Design Tokens

**Objetivo:** explorar tokens de design e criar componentes compatíveis com temas claro e escuro.

**Conceitos estudados:**
- Variáveis CSS em `:root` e `.dark`.
- Variáveis de tema com `@theme`.
- Cores semânticas como `background`, `surface`, `foreground`, `muted`, `border` e `primary`.
- Variantes com `dark:`.
- Organização de estilos com `@layer components`.
- Reutilização de declarações com `@apply`.
- Personalização de variantes com `@custom-variant`.

**Modificações propostas:** alterar a cor principal, personalizar a cor `chestnut` no tema escuro, criar uma cor `success`, aplicar a nova utility e experimentar uma classe de componente.

**Perguntas de revisão:**
1. Qual é a diferença entre `:root`, `.dark` e `@theme`?
2. O que uma variável `--color-primary` representa?
3. Por que utilizar nomes semânticos para as cores?
4. Qual é a finalidade de `@custom-variant`?
5. Como `@layer components` organiza estilos?
6. Para que serve `@apply`?

## 04 — Login Form: Foco e Acessibilidade

**Objetivo:** estilizar um formulário de login com campos identificados, estados de foco e layout responsivo.

**Conceitos estudados:**
- Associação entre `label` e `input`.
- Tipos apropriados de campos.
- Estados `focus:` e `focus-visible:`.
- Cores de borda e indicadores de foco.
- Espaçamento, tipografia, bordas e sombras.
- Feedback visual durante a interação.

**Revisão:** verificar se os campos possuem rótulos acessíveis, se a navegação por teclado funciona e se o foco permanece visível.

## 05 — Pricing Cards

**Objetivo:** apresentar planos de serviço em cartões comparáveis, destacando uma opção recomendada.

**Conceitos a praticar:**
- Grid e Flexbox.
- Hierarquia tipográfica para preço e benefícios.
- Espaçamento, bordas, cores e sombras.
- Reutilização de estilos entre cartões.
- Destaque visual para o plano recomendado.
- Responsividade em diferentes larguras de tela.

**Revisão:** verificar alinhamento, legibilidade, consistência visual e adaptação para dispositivos menores.

## 06 — Settings Toggle

**Objetivo:** criar controles visuais para preferências usando inputs acessíveis e utilities condicionais.

**Conceitos estudados:**
- `peer` e `peer-checked:`.
- `sr-only` para manter o input acessível visualmente oculto.
- Posicionamento com `relative` e `absolute`.
- Movimento com `translate-x-*`.
- `rounded-full`, `cursor-pointer` e `transition`.

**Modificações propostas:** observar o efeito de remover `peer`, alterar as cores do estado marcado, modificar o deslocamento do controle, testar a remoção de `sr-only` e adicionar uma terceira preferência.

**Perguntas de revisão:**
1. Por que o input utiliza `peer`?
2. O que `peer-checked:` faz?
3. Para que serve `sr-only`?
4. Por que o indicador utiliza `absolute`?
5. Como `translate-x-*` movimenta o indicador?

## 07 — FAQ Accordion: `details` e `open`

**Objetivo:** criar perguntas expansíveis utilizando os elementos HTML nativos `details` e `summary`.

**Conceitos estudados:**
- Elementos semânticos para conteúdo expansível.
- Estado aberto com `open:`.
- Aparência do marcador com `marker:`.
- Cursor, bordas, cores e espaçamento.
- Estados de hover no título da pergunta.

**Modificações propostas:** alterar `open:bg-blue-50`, remover `open:border-blue-500`, testar o marcador padrão, modificar o espaçamento e adicionar uma quarta pergunta.

**Perguntas de revisão:**
1. O que o atributo HTML `open` faz?
2. Como funciona a variante `open:`?
3. Para que serve `marker:hidden`?
4. Por que `details` e `summary` são alternativas semânticas a elementos `div` com interação personalizada?

## 08 — Dashboard Summary: Grid e Composição

**Objetivo:** combinar os conceitos anteriores em um dashboard estático e responsivo.

**Elementos esperados:**
- Cabeçalho com título e botão de exportação.
- Três indicadores principais.
- Área de desempenho com barras construídas usando elementos `span`.
- Área de atividades recentes.
- Grid responsivo, com maior espaço para a área de desempenho.

**Conceitos estudados:**
- `grid`, `sm:grid-cols-3` e `lg:grid-cols-[2fr_1fr]`.
- Flexbox com `flex`, `justify-between` e `items-center`.
- Dimensões com `h-*` e `w-*`.
- Espaçamento com `gap-*`.
- Cores, bordas e arredondamento.

**Modificações propostas:** alterar o número de colunas, proporções do layout, alturas das barras, cores, largura do container e quantidade de indicadores.

**Perguntas de revisão:**
1. Em quais situações Grid é mais adequado que Flexbox?
2. Em quais situações Flexbox é mais adequado que Grid?
3. O que significa `lg:grid-cols-[2fr_1fr]`?
4. Como `flex-1` afeta as barras?
5. Quais utilities foram mais reutilizadas?

## 09 — Theme Toggle: Light e Dark

**Objetivo:** alternar entre tema claro e escuro sem precisar reescrever as classes dos componentes.

**Conceitos a praticar:**
- Alternância da classe `.dark`.
- Personalização da variante `dark:`.
- Tokens de cores semânticas.
- `@custom-variant` no Tailwind CSS v4.
- Reutilização dos mesmos componentes nos dois temas.

**Revisão:** verificar se fundos, textos, bordas e superfícies continuam legíveis após a troca de tema.

## Conclusão

Os exercícios abordam desde a composição básica de interfaces até padrões reutilizáveis e layouts responsivos. O objetivo é compreender o efeito das utilities, experimentar modificações e conseguir explicar as decisões de estilização adotadas.

**Nota:** este documento funciona como roteiro e registro de revisão. Marque os exercícios como concluídos somente depois de realizar e conferir as atividades correspondentes no Tailwind Play.
