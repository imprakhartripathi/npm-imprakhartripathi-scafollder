#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

async function initProject() {
  const cwd = process.cwd();
  const templateDir = path.join(__dirname, "../template");
  const templatePkgPath = path.join(templateDir, "package.json");
  const userPkgPath = path.join(cwd, "package.json");

  // 1. Copy all template files except package.json
  await fs.copy(templateDir, cwd, {
    overwrite: true,
    filter: (src) => !src.endsWith("package.json"),
  });

  // 2. Merge package.json files
  let templatePkg = {};
  if (fs.existsSync(templatePkgPath)) {
    templatePkg = JSON.parse(fs.readFileSync(templatePkgPath, "utf-8"));
  }

  let userPkg = {};
  if (fs.existsSync(userPkgPath)) {
    userPkg = JSON.parse(fs.readFileSync(userPkgPath, "utf-8"));
  } else {
    userPkg = { name: "my-app", version: "1.0.0" };
  }

  // Merge scripts
  userPkg.scripts = { ...(userPkg.scripts || {}), ...(templatePkg.scripts || {}) };

  // Merge dependencies
  userPkg.dependencies = { ...(userPkg.dependencies || {}), ...(templatePkg.dependencies || {}) };

  // Merge devDependencies
  userPkg.devDependencies = { ...(userPkg.devDependencies || {}), ...(templatePkg.devDependencies || {}) };

  fs.writeFileSync(userPkgPath, JSON.stringify(userPkg, null, 2));

  console.log("✅ Backend scaffolded successfully!");
  console.log("👉 Run `npm install` to install dependencies.");
}

async function run() {
  const [, , command] = process.argv;

  if (command === "init") {
    await initProject();
  } else {
    console.log("Usage: scafollder init");
  }
}

run();
