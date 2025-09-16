# @imprakhartripathi/scafollder

🚀 A CLI tool to scaffold a **Node.js + Express + TypeScript + MongoDB backend** with my custom **Modified MVC structure**.
No need to waste time setting up boilerplate – just scaffold and start coding.

---

## ✨ Features

* Pre-configured **Express + MongoDB backend**
* **TypeScript** support out of the box
* Pre-wired **Nodemon + ts-node** for development
* Ready-to-use **auth, environment configs, and structure**
* Automatically merges **scripts** and **dependencies** into your project’s `package.json`

---

## 📦 Installation

You don’t need to install it globally — just use `npx`:

```bash
npx @imprakhartripathi/scafollder init
```

Or install globally:

```bash
npm install -g @imprakhartripathi/scafollder
scafollder init
```

---

## ⚡ Usage

Run inside an empty directory (or an existing Node.js project):

```bash
scafollder init
```

This will:

1. Copy the backend template into your current directory.
2. Merge the template’s `scripts`, `dependencies`, and `devDependencies` into your project’s root `package.json`.
3. Leave you ready to go with a working backend setup.

---

## 📜 Example Scripts

After initialization, you’ll have these scripts in your `package.json`:

```json
{
  "scripts": {
    "start": "cd src && nodemon --exec ts-node server.ts",
    "build": "tsc",
    "fresh": "clear && npm start",
    "setup": "npm i && npm fund && clear && npm start"
  }
}
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB + Mongoose
* JWT Auth
* Nodemailer
* Razorpay integration

---

## 🚀 Getting Started

1. Scaffold your backend:

   ```bash
   npx @imprakhartripathi/scafollder init
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```

---

## 📌 Notes

* If you previously used the unscoped package `scafollder`, migrate to `@imprakhartripathi/scafollder`.
* Old package is deprecated and will no longer receive updates.

---

## 📄 License

MIT © [Prakhar Tripathi](https://www.npmjs.com/~imprakhartripathi)
