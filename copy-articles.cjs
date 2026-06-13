const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const srcDir = path.join(baseDir, 'src/articles');
const publicDir = path.join(baseDir, 'public/articles');

// 确保 public/articles/ 目录存在
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created directory:', publicDir);
}

// 需要复制的文件
const files = [
  'sorting-algorithms.md',
  'search-algorithms.md',
  'graph-theory-basics.md',
];

// 复制文件
for (const f of files) {
  const srcPath = path.join(srcDir, f);
  const destPath = path.join(publicDir, f);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied: ${f}`);
}

console.log('All files copied successfully!');
