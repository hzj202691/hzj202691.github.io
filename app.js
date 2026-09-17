/* ===== 主逻辑 ===== */

// 类型图标映射
const typeIcons = {
    pdf: '📄',
    doc: '📝',
    code: '💻',
    video: '🎬',
    other: '📦'
};

const typeNames = {
    pdf: 'PDF',
    doc: '文档',
    code: '代码',
    video: '视频',
    other: '其他'
};

// ===== 渲染博客 =====
function renderBlogs() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = blogPosts.map(post => `
        <article class="blog-card">
            <div class="blog-date">${post.date}</div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');

    // 更新统计数字
    document.getElementById('blogCount').textContent = blogPosts.length;
}

// ===== 渲染资料 =====
let currentFilter = 'all';
let currentSearch = '';

function renderResources() {
    const filtered = resources.filter(res => {
        const matchFilter = currentFilter === 'all' || res.type === currentFilter;
        const matchSearch = currentSearch === '' || 
            res.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            res.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
            res.category.toLowerCase().includes(currentSearch.toLowerCase());
        return matchFilter && matchSearch;
    });

    const grid = document.getElementById('resourceGrid');
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-light); text-align: center; grid-column: 1/-1;">暂无资料，去添加一些吧~</p>';
        return;
    }

    grid.innerHTML = filtered.map(res => `
        <div class="resource-card">
            <div class="resource-icon">${typeIcons[res.type] || '📦'}</div>
            <h4 class="resource-title">${res.name}</h4>
            <p class="resource-desc">${res.description}</p>
            <div class="resource-meta">
                <span class="resource-type">${typeNames[res.type] || '其他'}</span>
                <span>${res.size} · ${res.date}</span>
            </div>
            <a href="${res.file}" class="download-btn" download>
                <i class="fas fa-download"></i> 下载
            </a>
        </div>
    `).join('');

    // 更新统计
    document.getElementById('resourceCount').textContent = resources.length;
}

// ===== 筛选功能 =====
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderResources();
        });
    });
}

// ===== 搜索功能 =====
function setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderResources();
    });
}

// ===== 移动端菜单 =====
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// ===== 平滑滚动 =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // 关闭移动端菜单
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    renderBlogs();
    renderResources();
    setupFilters();
    setupSearch();
    setupSmoothScroll();
});
