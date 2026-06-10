const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "bundle.js"), "// build OK\n", "utf8");

console.log("Build concluído: dist/bundle.js criado.");
