<<<<<<< HEAD
# CI/CD Pipeline com GitHub Actions

Pipeline de integração e entrega contínua configurado com GitHub Actions, disparado automaticamente a cada `push` na branch `main`.

---

## O que foi feito

Este projeto configura um pipeline CI/CD do zero usando apenas GitHub Actions, sem nenhuma ferramenta externa paga. O objetivo foi aprender na prática como funciona automação de testes e deploy.

---

## O que o pipeline faz

A cada `push` na branch `main`, o GitHub Actions executa automaticamente os seguintes jobs em sequência:

```
Push → Testes e Build → Deploy Staging → Deploy Produção → Notificação
```

### Jobs

| Job | O que faz |
|-----|-----------|
| **Testes e Build** | Clona o código, instala dependências, roda lint, testes e build |
| **Deploy → Staging** | Simula deploy em ambiente de testes (roda após CI passar) |
| **Deploy → Produção** | Simula deploy em produção (roda após staging) |
| **Notificar resultado** | Exibe o status final do pipeline |

---

## Estrutura do projeto

```
ci-cd/
├── .github/
│   └── workflows/
│       └── ci-cd.yml   # Definição do pipeline
├── package.json         # Scripts: lint, test, build
└── README.md
```

---

## Tecnologias

- **GitHub Actions** — plataforma de CI/CD integrada ao GitHub, gratuita para repositórios públicos
- **Node.js / npm** — gerenciador de pacotes usado para instalar dependências e rodar scripts
- **YAML** — linguagem usada para escrever o arquivo de workflow

---

## Como rodar

Qualquer `push` na branch `main` dispara o pipeline automaticamente.

Para acompanhar a execução, acesse a aba **Actions** no repositório do GitHub.
=======
# ciEcd

Resumo rápido do que foi feito neste repositório:

- Adicionado um pipeline de CI/CD em `.github/workflows/ci-cd.yml`.
- O workflow foi criado para automatizar o processo de integração e entrega contínua.
- Este README serve como documentação breve do ajuste realizado.

Observação:
- O repositório contém também `package.json` e `package-lock.json`, indicando que é um projeto Node.js.
>>>>>>> 51a1271 (FIX: corrigindo logica de dependencias do pipe)
