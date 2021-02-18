<p align="center">
  <a href="https://strapi.io">
    <img src="https://strapi.io/assets/strapi-logo-dark.svg" width="318px" alt="Strapi logo" />
  </a>
</p>
<h3 align="center">API creation made simple, secure and fast.</h3>
<p align="center">The most advanced open-source headless CMS to build powerful APIs with no effort.</p>
<br />

## Getting Started

<a href="https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html" target="_blank">Read the Getting Started tutorial</a> or follow the steps below:

### 🖐 Requirements

Complete installation requirements can be found in the documentation under <a href="https://strapi.io/documentation/developer-docs/latest/installation/cli.html#step-1-make-sure-requirements-are-met">Installation Requirements</a>.

**Node:**

- NodeJS >= 10.16 <=14
- NPM >= 6.x

**Database:**

- MongoDB >= 3.6

### ⏳ Installation
- NPM
```bash
npm i -g strapi
npm i --save
```
**or**
- YARN
```bash
yarn global add strapi
yarn
```

Copy .env
```bash
cp .env.example .env
```

Generate a secure token.
```bash
openssl rand 64 | base64 # (linux/macOS users)
# or
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" # (all users)
```

Edit it to you env variables
```bash
ADMIN_JWT_SECRET=token_generated_above
```

```bash
strapi dev
```

Enjoy 🎉
