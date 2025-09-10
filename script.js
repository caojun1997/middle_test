// 模拟应用数据
// 模拟应用数据
const appsData = [
    // 热门应用前三
    {
        id: 1,
        name: "Dify",
        description: "开源的LLM应用开发平台，轻松构建和部署AI应用",
        category: "ai",
        parentCategory: "application",
        icon: "fas fa-brain",
        tags: ["AI", "LLM", "开发平台"],
        downloads: 89420,
        rating: 4.9,
        version: "0.6.12",
        author: "Dify.AI",
        documentation: "Dify AI应用开发平台使用指南",
        requirements: "Python 3.10+, Docker",
        status: "stopped" // 容器状态：stopped, running
    },
    {
        id: 2,
        name: "Core",
        description: "高性能的云原生应用核心引擎，提供微服务架构支持",
        category: "kubernetes",
        parentCategory: "container",
        icon: "fas fa-cube",
        tags: ["微服务", "云原生", "Core"],
        downloads: 76890,
        rating: 4.8,
        version: "2.1.5",
        author: "Core Team",
        documentation: "Core微服务引擎配置和部署指南",
        requirements: "Kubernetes 1.24+, 最低4GB内存",
        status: "stopped"
    },
    {
        id: 3,
        name: "n8n",
        description: "可扩展的工作流自动化工具，支持无代码集成各种服务",
        category: "ai",
        parentCategory: "application",
        icon: "fas fa-project-diagram",
        tags: ["工作流", "自动化", "无代码"],
        downloads: 65430,
        rating: 4.7,
        version: "1.19.4",
        author: "n8n.io",
        documentation: "n8n工作流自动化平台使用指南",
        requirements: "Node.js 18+, 最低2GB内存",
        status: "stopped"
    },
    // SAAS软件应用
    {
        id: 4,
        name: "企业CRM系统",
        description: "全功能客户关系管理系统，包含销售、市场营销和客户服务",
        category: "saas",
        icon: "fas fa-users",
        tags: ["CRM", "销售管理", "客户服务"],
        downloads: 35670,
        rating: 4.6,
        version: "3.2.1",
        author: "CRM Solutions",
        documentation: "CRM系统配置和用户管理指南",
        requirements: "支持多租户架构",
        status: "stopped",
        type: "saas" // 标记为SAAS应用
    },
    {
        id: 5,
        name: "在线协作办公",
        description: "企业级在线办公平台，支持文档协作、视频会议和项目管理",
        category: "saas",
        icon: "fas fa-briefcase",
        tags: ["办公", "协作", "会议"],
        downloads: 42150,
        rating: 4.5,
        version: "1.8.5",
        author: "Office365",
        documentation: "在线办公平台使用和管理指南",
        requirements: "支持SSO单点登录",
        status: "stopped",
        type: "saas"
    },
    {
        id: 6,
        name: "锐通慧",
        description: "智能财务管理系统，提供AI驱动的财务分析和预测功能",
        category: "saas",
        parentCategory: "application",
        icon: "fas fa-chart-line",
        tags: ["财务", "AI分析", "智能预测"],
        downloads: 28450,
        rating: 4.8,
        version: "2.3.1",
        author: "锐通科技",
        documentation: "锐通慧智能财务系统使用指南",
        requirements: "支持云端部署",
        status: "stopped",
        type: "saas"
    },
    {
        id: 7,
        name: "锐通晓",
        description: "企业知识管理平台，智能文档处理和知识图谱构建",
        category: "saas",
        parentCategory: "application",
        icon: "fas fa-book-open",
        tags: ["知识管理", "文档处理", "智能搜索"],
        downloads: 31280,
        rating: 4.7,
        version: "1.9.2",
        author: "锐通科技",
        documentation: "锐通晓知识管理平台操作手册",
        requirements: "支持大数据处理",
        status: "stopped",
        type: "saas"
    },
    // 数据库
    {
        id: 8,
        name: "MySQL数据库",
        description: "世界上最流行的开源关系型数据库管理系统",
        category: "database",
        parentCategory: "application",
        icon: "fas fa-database",
        tags: ["数据库", "MySQL", "关系型"],
        downloads: 45420,
        rating: 4.8,
        version: "8.0.35",
        author: "Oracle",
        documentation: "MySQL数据库配置和优化指南",
        requirements: "最低2GB内存，20GB存储空间",
        status: "stopped"
    },
    {
        id: 9,
        name: "Redis缓存",
        description: "高性能的内存数据结构存储，用作数据库、缓存和消息代理",
        category: "database",
        parentCategory: "application",
        icon: "fas fa-memory",
        tags: ["缓存", "内存数据库", "NoSQL"],
        downloads: 32890,
        rating: 4.9,
        version: "7.2.3",
        author: "Redis Ltd.",
        documentation: "Redis缓存配置和优化指南",
        requirements: "最低1GB内存",
        status: "stopped"
    }
];

// 当前筛选分类
let currentCategory = 'all';
let currentView = 'grid';
let displayedApps = 8; // 初始显示的应用数量

// DOM元素
const appsContainer = document.getElementById('appsContainer');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const modal = document.getElementById('appModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const modalDeploy = document.getElementById('modalDeploy');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderApps();
    bindEvents();
});

// 绑定事件
function bindEvents() {
    // 侧边栏折叠功能
    const sidebarToggle = document.getElementById('sidebarToggle');
    const expandBtn = document.getElementById('expandBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && expandBtn && sidebar) {
        // 收缩按钮
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.add('collapsed');
            expandBtn.style.display = 'flex';
        });
        
        // 展开按钮
        expandBtn.addEventListener('click', function() {
            sidebar.classList.remove('collapsed');
            expandBtn.style.display = 'none';
        });
    }
    
    // 侧边栏分类筛选
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有活动状态
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            displayedApps = 8; // 重置显示数量
            
            // 处理子分类显示
            handleSubCategories(currentCategory);
            
            renderApps();
        });
    });
    
    // 主分类点击展开子分类
    document.querySelectorAll('.nav-item[data-category="container"], .nav-item[data-category="application"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            toggleSubSection(category);
        });
    });

    // 视图切换
    document.querySelectorAll('.view-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-toggle').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentView = this.dataset.view;
            updateViewStyle();
        });
    });

    // 搜索功能
    searchInput.addEventListener('input', function() {
        displayedApps = 8;
        renderApps();
    });

    // 加载更多
    loadMoreBtn.addEventListener('click', function() {
        displayedApps += 8;
        renderApps();
    });

    // 模态框事件
    modalClose.addEventListener('click', closeModal);
    modalCancel.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// 处理子分类显示
function handleSubCategories(category) {
    // 隐藏所有子分类
    document.querySelectorAll('.sub-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示对应的子分类
    if (category === 'container' || category === 'application') {
        const subSection = document.querySelector(`.sub-section[data-parent="${category}"]`);
        if (subSection) {
            subSection.classList.add('active');
        }
    }
}

// 切换子分类显示
function toggleSubSection(category) {
    const subSection = document.querySelector(`.sub-section[data-parent="${category}"]`);
    if (subSection) {
        subSection.classList.toggle('active');
    }
}

// 渲染应用列表
function renderApps() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // 筛选应用
    let filteredApps = appsData.filter(app => {
        const matchesCategory = currentCategory === 'all' || 
                              app.category === currentCategory || 
                              app.parentCategory === currentCategory;
        const matchesSearch = app.name.toLowerCase().includes(searchTerm) || 
                            app.description.toLowerCase().includes(searchTerm) ||
                            app.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });

    // 限制显示数量
    const appsToShow = filteredApps.slice(0, displayedApps);
    
    // 清空容器
    appsContainer.innerHTML = '';
    
    // 生成应用卡片
    appsToShow.forEach(app => {
        const appCard = createAppCard(app);
        appsContainer.appendChild(appCard);
    });

    // 更新加载更多按钮状态
    if (filteredApps.length > displayedApps) {
        loadMoreBtn.style.display = 'inline-flex';
    } else {
        loadMoreBtn.style.display = 'none';
    }

    // 如果没有应用，显示空状态
    if (filteredApps.length === 0) {
        appsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: rgba(232, 244, 253, 0.6);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.3; color: #00bcff;"></i>
                <h3 style="color: #00bcff;">未找到匹配的应用</h3>
                <p>尝试调整搜索条件或浏览其他分类</p>
            </div>
        `;
    }
}

// 创建应用卡片
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    
    // 生成按钮 HTML
    const actionButtons = generateActionButtons(app);
    
    card.innerHTML = `
        <div class="app-card-header">
            <div class="app-icon">
                <i class="${app.icon}"></i>
            </div>
            <div class="app-title">${app.name}</div>
            <div class="app-description">${app.description}</div>
        </div>
        <div class="app-card-body">
            <div class="app-tags">
                ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
            </div>
            <div class="app-stats">
                <div class="app-stat">
                    <i class="fas fa-download"></i>
                    ${formatNumber(app.downloads)}
                </div>
                <div class="app-stat">
                    <i class="fas fa-star"></i>
                    ${app.rating}
                </div>
                <div class="app-stat">
                    <i class="fas fa-tag"></i>
                    v${app.version}
                </div>
            </div>
            <div class="app-actions">
                ${actionButtons}
                <button class="btn-preview" onclick="showAppDetails(${app.id})">
                    <i class="fas fa-eye"></i>
                    详情
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// 生成操作按钮
function generateActionButtons(app) {
    if (app.type === 'saas' || app.type === 'sdk') {
        // SAAS应用和SDK应用使用"使用"按钮
        if (app.status === 'running') {
            return `
                <button class="btn-stop" onclick="stopApp(${app.id})">
                    <i class="fas fa-stop"></i>
                    停止使用
                </button>
            `;
        } else {
            return `
                <button class="btn-use" onclick="useApp(${app.id})">
                    <i class="fas fa-play"></i>
                    使用
                </button>
            `;
        }
    } else {
        // 其他应用使用"部署"按钮
        if (app.status === 'running') {
            return `
                <button class="btn-stop" onclick="stopContainer(${app.id})">
                    <i class="fas fa-stop"></i>
                    停止
                </button>
                <button class="btn-restart" onclick="restartContainer(${app.id})">
                    <i class="fas fa-redo"></i>
                    重启
                </button>
            `;
        } else {
            return `
                <button class="btn-deploy" onclick="deployApp(${app.id})">
                    <i class="fas fa-rocket"></i>
                    部署
                </button>
            `;
        }
    }
}

// 显示应用详情
function showAppDetails(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    modalTitle.textContent = app.name;
    modalBody.innerHTML = `
        <div class="app-detail-info">
            <div class="detail-section">
                <h4><i class="fas fa-info-circle"></i> 应用信息</h4>
                <p><strong>描述：</strong>${app.description}</p>
                <p><strong>版本：</strong>v${app.version}</p>
                <p><strong>作者：</strong>${app.author}</p>
                <p><strong>分类：</strong>${getCategoryName(app.category)}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-cog"></i> 系统要求</h4>
                <p>${app.requirements}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-book"></i> 文档说明</h4>
                <p>${app.documentation}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-chart-bar"></i> 统计信息</h4>
                <p><strong>下载量：</strong>${formatNumber(app.downloads)} 次</p>
                <p><strong>评分：</strong>${app.rating}/5.0 ⭐</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-tags"></i> 标签</h4>
                <div class="app-tags">
                    ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    // 更新部署按钮
    modalDeploy.onclick = () => deployApp(appId);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 使用SAAS/SDK应用
function useApp(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    const useBtn = event.target;
    const originalText = useBtn.innerHTML;
    
    useBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 启动中...';
    useBtn.disabled = true;

    setTimeout(() => {
        // 更新应用状态
        app.status = 'running';
        
        // 显示成功消息
        showNotification(`${app.name} 已开始使用`, 'success');
        
        // 重新渲染应用列表
        renderApps();
        closeModal();
    }, 2000);
}

// 停止SAAS/SDK应用
function stopApp(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    const stopBtn = event.target;
    const originalText = stopBtn.innerHTML;
    
    stopBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 停止中...';
    stopBtn.disabled = true;

    setTimeout(() => {
        // 更新应用状态
        app.status = 'stopped';
        
        // 显示成功消息
        showNotification(`${app.name} 已停止使用`, 'success');
        
        // 重新渲染应用列表
        renderApps();
    }, 2000);
}
function deployApp(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    // 模拟部署过程
    const deployBtn = event.target;
    const originalText = deployBtn.innerHTML;
    
    deployBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 部署中...';
    deployBtn.disabled = true;

    setTimeout(() => {
        // 更新应用状态
        app.status = 'running';
        
        deployBtn.innerHTML = '<i class="fas fa-play"></i> 启动';
        deployBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
        
        // 显示成功消息
        showNotification(`${app.name} 部署成功！`, 'success');
        
        setTimeout(() => {
            // 重新渲染应用列表以显示新的按钮状态
            renderApps();
            closeModal();
        }, 2000);
    }, 3000);
}

// 停止容器
function stopContainer(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    const stopBtn = event.target;
    const originalText = stopBtn.innerHTML;
    
    stopBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 停止中...';
    stopBtn.disabled = true;

    setTimeout(() => {
        // 更新应用状态
        app.status = 'stopped';
        
        // 显示成功消息
        showNotification(`${app.name} 已停止`, 'success');
        
        // 重新渲染应用列表
        renderApps();
    }, 2000);
}

// 重启容器
function restartContainer(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    const restartBtn = event.target;
    const originalText = restartBtn.innerHTML;
    
    restartBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 重启中...';
    restartBtn.disabled = true;

    setTimeout(() => {
        // 显示成功消息
        showNotification(`${app.name} 重启成功`, 'success');
        
        // 重新渲染应用列表
        renderApps();
    }, 2000);
}

// 更新视图样式
function updateViewStyle() {
    if (currentView === 'list') {
        appsContainer.style.gridTemplateColumns = '1fr';
        appsContainer.querySelectorAll('.app-card').forEach(card => {
            card.style.display = 'flex';
            card.style.alignItems = 'center';
        });
    } else {
        appsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
        appsContainer.querySelectorAll('.app-card').forEach(card => {
            card.style.display = 'block';
        });
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00bcff' : '#00bcff'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
        z-index: 3000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);

    // 添加滑入动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// 工具函数
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function getCategoryName(category) {
    const categoryNames = {
        'container': '容器云市场',
        'application': '应用市场', 
        'developer': '开发者市场',
        'kubernetes': 'Kubernetes',
        'docker': 'Docker',
        'saas': 'SAAS应用',
        'database': '数据库',
        'sdk': 'SDK工具',
        'ai': 'AI工具'
    };
    return categoryNames[category] || category;
}

// 添加一些平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 添加滚动时导航栏样式变化
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.background = 'rgba(18, 35, 63, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(0, 188, 255, 0.4)';
    } else {
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.background = 'linear-gradient(135deg, rgba(18, 35, 63, 0.95) 0%, rgba(26, 47, 75, 0.95) 100%)';
        navbar.style.borderBottom = '1px solid rgba(0, 188, 255, 0.3)';
    }
});

// 懒加载图片（如果有的话）
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}