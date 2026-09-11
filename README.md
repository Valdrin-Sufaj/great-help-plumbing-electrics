# Great Help Plumbing & Electrics

Modern responsive Next.js website for a plumbing-only service business.

## Run

```bash
pnpm install
pnpm dev
```

## Quote Form Delivery

The request quote form posts to `/api/quote`.

Recommended inbox setup:

1. Use the quote inbox `ghplumbingelectrics@gmail.com`, or create a branded inbox later.
2. Use an email API provider such as Resend, SendGrid or Mailgun.
3. Add these environment variables:

```bash
RESEND_API_KEY=your_api_key
QUOTE_TO_EMAIL=ghplumbingelectrics@gmail.com
QUOTE_FROM_EMAIL="Great Help Plumbing & Electrics <quotes@greathelpplumbing.co.uk>"
```

Without `RESEND_API_KEY`, the route accepts the request and logs the details on the server. That is useful for development but not enough for a live website.

## Update Before Launch

- Replace `https://www.greathelpplumbing.co.uk` in `app/layout.tsx` with the final domain.
- Confirm the quote recipient email in hosting environment variables.
