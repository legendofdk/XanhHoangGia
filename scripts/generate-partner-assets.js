const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const partnersDir = path.join(rootDir, "assets", "partners");
const outputFile = path.join(rootDir, "partner-assets.js");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function toPosixPath(filePath) {
  return path.relative(rootDir, filePath).split(path.sep).join("/");
}

function listImages(folderPath) {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => path.join(folderPath, entry.name))
    .sort((a, b) => a.localeCompare(b, "vi", { numeric: true }))
    .map(toPosixPath);
}

const manifest = {};

fs.readdirSync(partnersDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, "vi", { numeric: true }))
  .forEach((partnerId) => {
    const partnerDir = path.join(partnersDir, partnerId);
    manifest[partnerId] = {
      product: listImages(path.join(partnerDir, "product")),
      paper: listImages(path.join(partnerDir, "paper")),
    };
  });

const output = `window.XANH_HOANG_GIA_PARTNER_ASSETS = ${JSON.stringify(manifest, null, 2)};\n`;
fs.writeFileSync(outputFile, output);

console.log(`Generated ${toPosixPath(outputFile)}`);
