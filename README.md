# CI/CD Pipeline com GitHub Actions

Este repositório demonstra um pipeline básico de CI/CD usando GitHub Actions e Node.js.

## O que o workflow faz

O workflow definido em `.github/workflows/ci-cd.yml` executa:

- `npm ci`
- `npm run lint`
- `npm test`
- `npm run build`
- upload do artefato `dist/`

### Jobs principais

- `ci` — realiza checkout, instala dependências, roda lint, testes e build
- `deploy-staging` — executa após `ci` quando o push é feito em `develop`
- `deploy-production` — executa após `ci` quando o push é feito em `main`
- `notify` — notifica o resultado final do pipeline

## O que está sendo testado

Atualmente o projeto contém:

- `test.js` — teste básico em Node.js usando `assert`
- `build.js` — script que gera o arquivo `dist/bundle.js`

Os scripts no `package.json` são:

- `npm test` → roda `node test.js`
- `npm run lint` → atualmente exibe apenas `lint OK`
- `npm run build` → roda `node build.js`

## Como usar

1. Faça um commit e um `push` para a branch `main`.
2. Abra a aba **Actions** no GitHub para ver o workflow rodar.
3. O job `ci` deve passar se `npm test` e `npm run build` funcionarem.

## Observações

- Os deploys ainda são placeholders: eles não fazem deploy real.
- O pipeline é útil para validar se a integração e os testes básicos estão funcionando.
