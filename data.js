/* 
==========================================
📝 数据配置文件 - 你只需要修改这个文件！
==========================================
说明：
- 想添加博客 → 在 blogPosts 数组里加一项
- 想添加资料 → 在 resources 数组里加一项
- 就这么简单！
==========================================
*/

// ===== 博客文章列表 =====
const blogPosts = [
    {
        date: "2026-09-15",
        title: "Hello World - 我的第一篇博客",
        excerpt: "记录一下搭建这个网站的过程和学习心得...",
        tags: ["网站搭建", "入门"],
        link: "#"  // 如果有单独的文章页面，填链接；没有就保持 #
    },
    {
        date: "2026-09-10",
        title: "学习笔记：如何高效记忆知识点",
        excerpt: "分享几个实用的学习方法和记忆技巧...",
        tags: ["学习方法", "笔记"],
        link: "#"
    },
    {
        date: "2026-09-05",
        title: "推荐几本改变我思维方式的好书",
        excerpt: "书单分享，附带简短读后感...",
        tags: ["读书", "推荐"],
        link: "#"
    }
];

// ===== 学习资料列表 =====
const resources = [
    {
    name: "我的资料.pdf", 
    description: "学习资料",
    type: "pdf", 
    category: "资料",
    size: "2 MB", 
    date: "2026-09-17",
    file: "files/我的资料.pdf" 
    },
    {
        name: "高等数学复习笔记.pdf",
        description: "高数重点公式整理 + 典型例题解析",
        type: "pdf",           // 类型：pdf / doc / code / video / other
        category: "数学",
        size: "2.3 MB",
        date: "2026-09-01",
        file: "files/高等数学复习笔记.pdf"   // 文件路径（放在 files 文件夹里）
    },
    {
        name: "英语四级词汇表.xlsx",
        description: "核心高频词汇 + 例句 + 记忆技巧",
        type: "doc",
        category: "英语",
        size: "1.1 MB",
        date: "2026-08-28",
        file: "files/英语四级词汇表.xlsx"
    },
    {
        name: "Python入门教程.py",
        description: "从零开始的Python基础代码示例",
        type: "code",
        category: "编程",
        size: "15 KB",
        date: "2026-08-20",
        file: "files/python_basics.py"
    },
    {
        name: "数据结构课件.pptx",
        description: "数据结构与算法核心知识点整理",
        type: "doc",
        category: "计算机",
        size: "8.5 MB",
        date: "2026-08-15",
        file: "files/数据结构课件.pptx"
    },
    {
        name: "机器学习入门指南.pdf",
        description: "机器学习基础概念和实战案例",
        type: "pdf",
        category: "AI",
        size: "5.7 MB",
        date: "2026-08-10",
        file: "files/机器学习入门指南.pdf"
    },
    {
        name: "项目实战源码.zip",
        description: "完整项目代码 + 详细注释",
        type: "code",
        category: "编程",
        size: "12 MB",
        date: "2026-08-05",
        file: "files/project_source.zip"
    }
];

/* 
类型图标映射（一般不需要修改）：
- pdf  → 📄
- doc  → 📝
- code → 💻
- video → 🎬
- other → 📦
*/
