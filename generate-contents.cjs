const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'src/articles');
const files = [
  'problem-bank-luogu-nowcoder.md',
  'algorithm-basics-branch-loop.md',
  'algorithm-advanced-greedy-dp-dfs.md',
  'gesp-guide.md',
  'csp-guide.md',
  'getting-started-with-react.md',
  'git-essential-commands.md',
  'understanding-typescript.md',
];

let output = '// 自动生成：内置文章内容（原始字符串，无需任何解码）\n\n';
output += 'const builtinContents: Record<string, string> = {\n';

for (const f of files) {
  const slug = f.replace('.md', '');
  const content = fs.readFileSync(path.join(articlesDir, f), 'utf8');
  // 使用模板字符串（反引号），只需转义反引号和 ${}
  const safe = content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  output += `  '${slug}': \`${safe}\`,\n`;
}

output += '};\n\nexport default builtinContents;\n';

fs.writeFileSync(path.join(articlesDir, 'builtin-contents.ts'), output, 'utf8');
console.log('Generated builtin-contents.ts successfully');
console.log('Size:', (Buffer.byteLength(output) / 1024).toFixed(1), 'KB');
