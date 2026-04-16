const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const partnersDir = path.join(rootDir, "assets", "partners");

function slugify(value) {
  return value
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function uniquePath(dir, baseName, extension) {
  let candidate = path.join(dir, `${baseName}${extension}`);
  let index = 2;

  while (fs.existsSync(candidate)) {
    candidate = path.join(dir, `${baseName}-${index}${extension}`);
    index += 1;
  }

  return candidate;
}

function normalizeFile(filePath) {
  const dir = path.dirname(filePath);
  const extension = path.extname(filePath).toLowerCase();
  const rawBaseName = path.basename(filePath, path.extname(filePath));
  const baseName = slugify(rawBaseName) || "file";
  const targetPath = path.join(dir, `${baseName}${extension}`);

  if (filePath === targetPath) return null;

  const finalPath = fs.existsSync(targetPath) ? uniquePath(dir, baseName, extension) : targetPath;
  fs.renameSync(filePath, finalPath);

  return {
    from: path.relative(rootDir, filePath).split(path.sep).join("/"),
    to: path.relative(rootDir, finalPath).split(path.sep).join("/"),
  };
}

function walk(dir) {
  const changes = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      changes.push(...walk(entryPath));
      return;
    }

    if (!entry.isFile() || entry.name === ".gitkeep") return;

    const change = normalizeFile(entryPath);
    if (change) changes.push(change);
  });

  return changes;
}

const changes = walk(partnersDir);

if (!changes.length) {
  console.log("No filenames needed normalization.");
} else {
  changes.forEach(({ from, to }) => {
    console.log(`${from} -> ${to}`);
  });
  console.log(`Normalized ${changes.length} file(s).`);
}
