# 🎓 我的学习空间 - 个人门户网站

零基础也能上线的个人学习资料分享网站！

---

## ✨ 功能特点

- 📝 **博客系统** - 记录学习心得
- 📚 **资料库** - 分类展示学习资料，支持搜索和筛选
- 📥 **一键下载** - 访问者可以直接下载文件
- 📱 **响应式设计** - 手机、平板、电脑都能完美显示
- 🎨 **美观界面** - 现代化设计，简洁大方

---

## 🚀 快速开始（3步上线）

### 第一步：注册 GitHub 账号
1. 打开 https://github.com
2. 点击 "Sign up" 注册（免费）
3. 验证邮箱

### 第二步：创建仓库并上传文件
1. 登录后点击右上角 `+` → `New repository`
2. 仓库名填：`你的用户名.github.io`（⚠️ 必须这样命名！）
   - 比如用户名是 `zhangsan`，就填 `zhangsan.github.io`
3. 设为 Public（公开）
4. 点击 "Create repository"
5. 把整个文件夹的所有文件拖拽上传
6. 点击 "Commit changes"

### 第三步：访问你的网站！🎉
- 等待约1分钟
- 浏览器打开：`https://你的用户名.github.io`
- 你的网站就上线了！

---

## 📂 文件结构说明

```
你的网站文件夹/
├── index.html      ← 网页主体（一般不用改）
├── style.css       ← 样式文件（想换颜色改这里）
├── data.js         ← ⭐ 核心数据文件（主要改这个！）
├── app.js          ← 功能逻辑（一般不用改）
├── files/          ← ⭐ 放你的资料文件（PDF、Word等）
│   ├── 高等数学复习笔记.pdf
│   ├── 英语四级词汇表.xlsx
│   └── ...
└── README.md       ← 本说明文件
```

---

## ✏️ 如何添加/修改内容

### 添加资料（最常见操作）

**第1步**：把文件放进 `files/` 文件夹

**第2步**：打开 `data.js`，在 `resources` 数组里加一项：

```javascript
{
    name: "文件名.pdf",           // 文件的名字
    description: "简单描述",       // 一句话说明
    type: "pdf",                  // pdf / doc / code / video / other
    category: "数学",              // 分类标签
    size: "2.3 MB",              // 文件大小（自己看一下）
    date: "2026-09-17",          // 上传日期
    file: "files/文件名.pdf"      // 文件路径（和files文件夹里的对应）
}
```

**就这么简单！** 保存后重新上传到 GitHub 即可。

### 添加博客

打开 `data.js`，在 `blogPosts` 数组里加一项：

```javascript
{
    date: "2026-09-17",
    title: "你的文章标题",
    excerpt: "文章摘要...",
    tags: ["标签1", "标签2"],
    link: "#"
}
```

### 修改个人信息

打开 `index.html`，找到 `<section id="about">` 部分，修改：
- 名字 "XX" → 改成你的名字
- 描述文字 → 改成你的介绍
- 社交链接 → 改成你的 GitHub/邮箱/微信

### 修改网站标题

打开 `index.html`，找到 `<title>我的学习空间</title>`，改成你的标题。

---

## 🎨 简单自定义

### 改主题颜色

打开 `style.css`，找到 `:root` 部分：

```css
:root {
    --primary: #6366f1;    ← 改成你喜欢的颜色！
    ...
}
```

推荐几个好看的颜色：
- 紫色：`#6366f1`（默认）
- 蓝色：`#3b82f6`
- 绿色：`#10b981`
- 粉色：`#ec4899`
- 橙色：`#f97316`

### 换背景渐变

打开 `style.css`，找到 `.hero` 部分的 `background`：

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

可以去 https://uigradients.com 挑选喜欢的渐变色替换。

---

## 📝 日常维护流程

每次想更新内容时：

1. **修改文件**：在电脑上编辑 `data.js` 或添加文件到 `files/`
2. **上传到 GitHub**：
   - 打开你的仓库页面
   - 点 `Add file` → `Upload files`
   - 拖入修改后的文件
   - 点 `Commit changes`
3. **等1分钟** → 刷新网站，搞定！

---

## ❓ 常见问题

**Q: 网站打不开？**
A: 确认仓库名是 `用户名.github.io` 格式，且设为 Public。

**Q: 下载文件失败？**
A: 确认 `data.js` 里的 `file` 路径和实际文件位置一致。

**Q: 想用自定义域名？**
A: 可以在仓库 Settings → Pages → Custom domain 里设置。

**Q: 文件太大上传不了？**
A: GitHub 单个文件限制 100MB，建议大文件用压缩包。

---

## 🔧 进阶玩法（学有余力时）

- 添加评论系统（Giscus）
- 博客支持 Markdown 写作
- 添加访问统计（Google Analytics）
- 自定义域名 + HTTPS

---

祝你学习愉快！🎉
