# Minha Lista 🛒

Aplicativo responsivo de listas de compras em Next.js + Tailwind + SQLite/libSQL.

## Recursos
- Acesso simples por e-mail (MVP sem senha)
- Várias listas por conta
- Itens, quantidade, marcar como comprado e excluir
- Isolamento das consultas pelo e-mail da conta
- Responsivo para celular e desktop

## Banco
Local: use `TURSO_DATABASE_URL=file:local.db`.
Produção/Vercel: use Turso/libSQL com `TURSO_DATABASE_URL` e `TURSO_AUTH_TOKEN`.

> Importante: identificação somente por e-mail não é autenticação segura. Qualquer pessoa que saiba o e-mail pode acessar a conta neste MVP. Uma próxima versão deve usar magic link/OTP.

## Rodar
```bash
cp .env.example .env.local
npm install
npm run dev
```
