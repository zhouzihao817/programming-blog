const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoUrl = 'git@github.com:zhouzihao817/programming-blog.git';
const distDir = path.join(__dirname, 'dist');

try {
  // 1. 构建
  console.log('Building...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2. 进入 dist 目录
  if (!fs.existsSync(distDir)) {
    console.error('dist/ not found!');
    process.exit(1);
  }

  // 3. 初始化 git（如果不存在）
  const gitDir = path.join(distDir, '.git');
  if (!fs.existsSync(gitDir)) {
    console.log('Initializing git in dist/...');
    execSync('git init', { cwd: distDir, stdio: 'inherit' });
    execSync(`git remote add origin ${repoUrl}`, { cwd: distDir, stdio: 'inherit' });
  }

  // 4. 配置 git（允许长路径）
  execSync('git config core.longPaths true', { cwd: distDir, stdio: 'inherit' });

  // 5. 添加所有文件
  console.log('Adding files...');
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });

  // 6. 提交
  console.log('Committing...');
  try {
    execSync('git commit -m "Deploy: update"', { cwd: distDir, stdio: 'inherit' });
  } catch (e) {
    console.log('Nothing to commit.');
  }

  // 7. 推送到 gh-pages 分支
  console.log('Pushing to gh-pages...');
  execSync('git push origin master:gh-pages --force', { cwd: distDir, stdio: 'inherit' });

  console.log('Deploy complete!');
} catch (err) {
  console.error('Deploy failed:', err.message);
  process.exit(1);
}
