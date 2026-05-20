# Fernando Laqueações — Site

Site de divulgação para Fernando Laqueações, especialista em laqueação, restauração e marcenaria em São Paulo.

## Stack

- **Astro 4** + **React 18**
- **TailwindCSS** + paleta artesanal premium (preto laca, dourado fosco, madeira)
- **Framer Motion** para animações
- **Netlify Forms** para o formulário de contato

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Netlify)

O projeto já está configurado para deploy direto:

1. Conecte o repositório ao Netlify
2. O `netlify.toml` cuida do build
3. O formulário de contato usa Netlify Forms (sem backend) — os envios chegam no painel da Netlify e podem ser configurados para encaminhar para `fernandolaqueacoes@gmail.com`

## Imagens

Coloque as fotos do cliente em `public/images/galeria/` com os nomes indicados no `README.md` da pasta. Enquanto não houver fotos reais, o site exibe placeholders elegantes automaticamente.

## Personalização

- Dados de contato: `src/lib/utils.ts` (objeto `SITE`)
- Cores e tipografia: `tailwind.config.mjs`
- Estilos globais: `src/styles/global.css`
- Conteúdo: cada componente em `src/components/`

## Estrutura

```
src/
├── components/      # Componentes Astro e React
├── layouts/         # Layout principal com SEO
├── lib/             # Utilitários e dados do site
├── pages/           # Páginas (atualmente só index)
└── styles/          # CSS global
public/
├── favicon.svg
├── images/galeria/  # Fotos da galeria
└── robots.txt
```
