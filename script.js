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

// 登录状态管理
let isLoggedIn = true; // 修改为已登录状态，方便测试

// 模拟用户数据库
const mockUsers = [
    {
        phone: '13800138000',
        password: '123456',
        name: '开发者',
        email: 'developer@example.com',
        certificate: {
            available: true,
            name: '开发者数字证书',
            issuer: 'CA机构',
            validUntil: '2025-12-31'
        }
    },
    {
        phone: '13900139000',
        password: '666888',
        name: '测试用户',
        email: 'test@example.com',
        certificate: {
            available: false,
            name: null,
            issuer: null,
            validUntil: null
        }
    },
    {
        phone: '15800158000',
        password: 'admin123',
        name: '管理员',
        email: 'admin@example.com',
        certificate: {
            available: true,
            name: '管理员数字证书',
            issuer: 'CA机构',
            validUntil: '2026-06-30'
        }
    }
];

// 用户数据
let userData = {
    name: '开发者',
    status: '在线',
    phone: '13800138000',
    email: 'developer@example.com',
    avatar: 'fas fa-user',
    certificate: {
        available: true,
        name: '开发者数字证书',
        issuer: 'CA机构',
        validUntil: '2025-12-31'
    },
    apiKeys: [
        {
            id: 'key_001',
            name: '主API Key',
            value: 'ak_1234567890abcdef1234567890abcdef',
            createdAt: '2024-01-15',
            lastUsed: '2024-01-20',
            usage: {
                total: 15420,
                today: 156,
                errorRate: 0.2
            }
        },
        {
            id: 'key_002',
            name: '测试API Key',
            value: 'ak_test1234567890abcdef1234567890',
            createdAt: '2024-01-18',
            lastUsed: '2024-01-19',
            usage: {
                total: 2340,
                today: 23,
                errorRate: 1.5
            }
        }
    ]
};

// 当前筛选分类
let currentCategory = 'all';
let currentView = 'grid';
let displayedApps = 8; // 初始显示的应用数量

// 用户应用管理
let userApps = [
    // 模拟用户已部署的应用数据
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
        status: "running", // 运行中
        addedAt: "2024-01-15T10:30:00Z",
        lastUsed: "2024-01-20T14:25:00Z",
        containerInfo: {
            containerId: "dify-app-001",
            image: "dify/dify:0.6.12",
            port: "3000",
            memory: "2GB",
            cpu: "1 Core",
            uptime: "5天 3小时",
            health: "healthy"
        }
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
        status: "running", // 运行中
        addedAt: "2024-01-10T09:15:00Z",
        lastUsed: "2024-01-20T16:45:00Z",
        containerInfo: {
            containerId: "core-engine-002",
            image: "core/engine:2.1.5",
            port: "8080",
            memory: "4GB",
            cpu: "2 Cores",
            uptime: "10天 8小时",
            health: "healthy"
        }
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
        status: "stopped", // 已停止
        addedAt: "2024-01-05T14:20:00Z",
        lastUsed: "2024-01-18T11:30:00Z",
        containerInfo: {
            containerId: "n8n-workflow-003",
            image: "n8nio/n8n:1.19.4",
            port: "5678",
            memory: "2GB",
            cpu: "1 Core",
            uptime: "0天 0小时",
            health: "stopped"
        }
    },
    {
        id: 4,
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
        status: "running", // 运行中
        addedAt: "2024-01-12T16:45:00Z",
        lastUsed: "2024-01-20T12:15:00Z",
        containerInfo: {
            containerId: "mysql-db-004",
            image: "mysql:8.0.35",
            port: "3306",
            memory: "2GB",
            cpu: "1 Core",
            uptime: "8天 12小时",
            health: "healthy"
        }
    },
    {
        id: 5,
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
        status: "stopped", // 已停止
        addedAt: "2024-01-08T13:30:00Z",
        lastUsed: "2024-01-19T09:20:00Z",
        containerInfo: {
            containerId: "redis-cache-005",
            image: "redis:7.2.3",
            port: "6379",
            memory: "1GB",
            cpu: "0.5 Core",
            uptime: "0天 0小时",
            health: "stopped"
        }
    }
]; // 用户已部署/使用的应用列表

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

// 退出登录确认框DOM元素
const logoutModal = document.getElementById('logoutModal');

// 我的应用相关DOM元素
const myAppsList = document.getElementById('myAppsList');
const myAppsCount = document.getElementById('myAppsCount');

// 手机号格式化
function formatPhoneNumber(phone) {
    // 只保留数字
    const cleaned = phone.replace(/\D/g, '');
    // 限制长度为11位
    return cleaned.substring(0, 11);
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，开始初始化');
    checkLoginState();
    updateLoginState();
    renderApps();
    bindEvents();
    
    // 添加手机号输入格式化
    const phoneInput = document.getElementById('loginPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            e.target.value = formatPhoneNumber(e.target.value);
        });
    }
    
    console.log('初始化完成');
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
    
    // 我的应用按钮特殊处理
    const myAppsBtn = document.querySelector('.my-apps-item');
    if (myAppsBtn) {
        myAppsBtn.addEventListener('click', function() {
            // 移除所有活动状态
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            currentCategory = 'my-apps';
            renderApps();
        });
    }
    
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

    // 退出登录确认框事件
    if (logoutModal) {
        logoutModal.addEventListener('click', function(e) {
            if (e.target === logoutModal) {
                closeLogoutModal();
            }
        });
    }

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.style.display === 'block') {
                closeModal();
            } else if (logoutModal && logoutModal.style.display === 'flex') {
                closeLogoutModal();
            }
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
    
    // 更新分类标题
    updateCategoryTitle();
    
    // 控制banner显示
    toggleBanner();
    
    // 如果是我的应用分类，显示用户应用
    if (currentCategory === 'my-apps') {
        renderMyAppsContent();
        return;
    }
    
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

    // 更新应用状态，基于用户应用列表
    filteredApps = filteredApps.map(app => {
        const userApp = userApps.find(ua => ua.id === app.id);
        if (userApp) {
            // 如果用户已经使用了这个应用，使用用户应用的状态
            return { ...app, status: userApp.status };
        }
        return app;
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
    
    // 检查是否是用户应用
    // 方法1：检查是否在userApps列表中
    const isUserApp = userApps.some(userApp => userApp.id === app.id);
    // 方法2：检查containerInfo属性（备用方案）
    const hasContainerInfo = app.containerInfo !== undefined;
    
    // 只有真正的用户应用才显示删除按钮
    // 如果app对象有containerInfo属性，说明它是用户应用
    const shouldShowDeleteButton = hasContainerInfo || isUserApp;
    
    // 调试信息
    console.log(`创建应用卡片 ${app.name} (ID: ${app.id}):`, {
        isUserApp,
        hasContainerInfo,
        shouldShowDeleteButton,
        inUserApps: userApps.map(u => u.id).includes(app.id),
        hasContainerInfoProperty: app.containerInfo !== undefined,
        containerInfo: app.containerInfo
    });
    
    // 只有用户应用才显示删除按钮
    const deleteButton = shouldShowDeleteButton ? `
        <button class="app-delete-btn" onclick="deleteApp(${app.id}, event)" title="删除应用" style="opacity: 1 !important;">
            <i class="fas fa-times"></i>
        </button>
    ` : '';
    
    // 如果是用户应用，添加状态指示器
    const statusIndicator = shouldShowDeleteButton ? `
        <div class="app-status-indicator ${app.status}">
            <i class="fas fa-circle"></i>
            ${app.status === 'running' ? '运行中' : '已停止'}
        </div>
    ` : '';
    
    // 如果是用户应用，添加容器信息
    const containerInfo = shouldShowDeleteButton && app.containerInfo ? `
        <div class="app-container-info">
            <div class="container-item">
                <i class="fas fa-server"></i>
                <span>${app.containerInfo.containerId}</span>
            </div>
            <div class="container-item">
                <i class="fas fa-plug"></i>
                <span>端口: ${app.containerInfo.port}</span>
            </div>
            <div class="container-item">
                <i class="fas fa-clock"></i>
                <span>${app.containerInfo.uptime}</span>
            </div>
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="app-card-header">
            <div class="app-icon">
                <i class="${app.icon}"></i>
            </div>
            <div class="app-title">${app.name}</div>
            <div class="app-description">${app.description}</div>
            ${deleteButton}
            ${statusIndicator}
        </div>
        <div class="app-card-body">
            <div class="app-tags">
                ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
            </div>
            ${containerInfo}
            <div class="app-bottom-section">
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
        </div>
    `;
    
    return card;
}

// 生成操作按钮
function generateActionButtons(app) {
    // 检查是否是用户应用（有containerInfo属性）
    const isUserApp = app.containerInfo !== undefined;
    
    if (isUserApp) {
        // 用户应用使用我的应用管理按钮
        if (app.status === 'running') {
            return `
                <button class="btn-stop" onclick="stopMyApp(${app.id})">
                    <i class="fas fa-stop"></i>
                    停止
                </button>
                <button class="btn-restart" onclick="restartMyApp(${app.id})">
                    <i class="fas fa-redo"></i>
                    重启
                </button>
            `;
        } else {
            return `
                <button class="btn-use" onclick="startMyApp(${app.id})">
                    <i class="fas fa-play"></i>
                    启动
                </button>
            `;
        }
    } else if (app.type === 'saas' || app.type === 'sdk') {
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
        // 其他应用（容器云应用）
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
        } else if (app.status === 'deployed') {
            // 已部署但未使用状态
            return `
                <button class="btn-use" onclick="useApp(${app.id})">
                    <i class="fas fa-play"></i>
                    启动使用
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

// 显示应用详情 - 跳转到详情页面
function showAppDetails(appId) {
    // 跳转到详情页面，传递应用ID作为参数
    window.location.href = `app-detail.html?id=${appId}`;
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 使用应用（适用于所有类型的应用）
function useApp(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    const useBtn = event.target;
    const originalText = useBtn.innerHTML;
    
    useBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 启动中...';
    useBtn.disabled = true;

    setTimeout(() => {
        // 更新应用状态为运行中
        app.status = 'running';
        
        // 添加到我的应用列表
        addToMyApps(appId);
        
        // 显示成功消息
        const appTypeText = app.type === 'saas' ? '开始使用' : '启动成功';
        showNotification(`${app.name} ${appTypeText}，已添加到我的应用`, 'success');
        
        // 重新渲染应用列表
        renderApps();
        
        // 如果是在模态框中，关闭模态框
        if (modal.style.display === 'block') {
            closeModal();
        }
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
        // 更新应用状态为已部署但未使用
        app.status = 'deployed';
        
        // 显示成功消息
        showNotification(`${app.name} 部署成功！请启动应用开始使用`, 'success');
        
        setTimeout(() => {
            // 重新渲染应用列表以显示新的按钮状态
            renderApps();
            closeModal();
        }, 1000);
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
    
    // 根据类型设置不同的颜色和图标
    let bgColor, iconClass, borderColor;
    switch (type) {
        case 'success':
            bgColor = '#007bff';
            borderColor = '#0056b3';
            iconClass = 'fas fa-check-circle';
            break;
        case 'error':
            bgColor = '#6c757d';
            borderColor = '#545b62';
            iconClass = 'fas fa-exclamation-circle';
            break;
        case 'info':
        default:
            bgColor = '#17a2b8';
            borderColor = '#138496';
            iconClass = 'fas fa-info-circle';
            break;
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, ${bgColor}, ${borderColor});
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        z-index: 3000;
        font-weight: 500;
        font-size: 14px;
        min-width: 250px;
        max-width: 350px;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border: 1px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
    `;
    
    // 添加图标和消息
    notification.innerHTML = `
        <i class="${iconClass}" style="font-size: 16px; flex-shrink: 0;"></i>
        <span style="flex: 1; line-height: 1.4;">${message}</span>
    `;
    
    document.body.appendChild(notification);

    // 添加滑入动画样式
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { 
                    transform: translateX(100%) scale(0.8);
                    opacity: 0;
                }
                to { 
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from { 
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
                to { 
                    transform: translateX(100%) scale(0.8);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 3秒后自动消失
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 更新分类标题
function updateCategoryTitle() {
    const categoryTitle = document.getElementById('categoryTitle');
    if (!categoryTitle) return;
    
    const categoryTitles = {
        'all': '全部应用',
        'container': '容器云市场',
        'application': '应用市场',
        'kubernetes': 'Kubernetes 应用',
        'docker': 'Docker 应用',
        'saas': 'SAAS 应用',
        'database': '数据库应用',
        'ai': 'AI 工具',
        'my-apps': '我的应用'
    };
    
    const title = categoryTitles[currentCategory] || '应用列表';
    categoryTitle.textContent = title;
}

// 控制banner显示
function toggleBanner() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // 只有"全部应用"时显示banner
    if (currentCategory === 'all') {
        heroSection.style.display = 'block';
    } else {
        heroSection.style.display = 'none';
    }
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

// ==================== 我的应用功能 ====================

// 渲染我的应用内容（在主内容区域）
function renderMyAppsContent() {
    // 清空容器
    appsContainer.innerHTML = '';
    
    // 按状态排序：运行中的在前，已停止的在后
    const sortedApps = [...userApps].sort((a, b) => {
        if (a.status === 'running' && b.status === 'stopped') return -1;
        if (a.status === 'stopped' && b.status === 'running') return 1;
        return 0;
    });
    
    // 生成应用卡片
    sortedApps.forEach(app => {
        const appCard = createAppCard(app);
        appsContainer.appendChild(appCard);
    });
    
    // 隐藏加载更多按钮
    loadMoreBtn.style.display = 'none';
    
    // 更新标题
    updateCategoryTitle();
}

// 渲染我的应用列表
function renderMyApps() {
    if (!myAppsList) return;
    
    // 清空列表
    myAppsList.innerHTML = '';
    
    if (userApps.length === 0) {
        myAppsList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #6c757d;">
                <i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 20px; opacity: 0.3; color: #00bcff;"></i>
                <h3 style="color: #00bcff; margin-bottom: 10px;">暂无应用</h3>
                <p style="font-size: 16px; opacity: 0.7;">部署应用后在这里查看和管理</p>
            </div>
        `;
    } else {
        // 按状态排序：运行中的在前，已停止的在后
        const sortedApps = [...userApps].sort((a, b) => {
            if (a.status === 'running' && b.status === 'stopped') return -1;
            if (a.status === 'stopped' && b.status === 'running') return 1;
            return 0;
        });
        
        sortedApps.forEach(app => {
            const appItem = createMyAppItem(app);
            myAppsList.appendChild(appItem);
        });
    }
    
    // 更新统计信息
    updateMyAppsStats();
}

// 创建我的应用项目
function createMyAppItem(app) {
    const item = document.createElement('div');
    item.className = `my-app-item ${app.status}`;
    
    const statusText = app.status === 'running' ? '运行中' : '已停止';
    const statusClass = app.status === 'running' ? 'running' : 'stopped';
    
    // 生成操作按钮
    const actionButtons = generateMyAppButtons(app);
    
    // 容器状态指示器
    const statusIndicator = app.status === 'running' ? 
        '<div class="status-indicator running"><i class="fas fa-circle"></i> 运行中</div>' : 
        '<div class="status-indicator stopped"><i class="fas fa-circle"></i> 已停止</div>';
    
    // 容器基本信息（折叠显示）
    const containerBasicInfo = app.containerInfo ? `
        <div class="container-basic-info">
            <div class="container-summary">
                <div class="container-item">
                    <i class="fas fa-server"></i>
                    <span>${app.containerInfo.containerId}</span>
                </div>
                <div class="container-item">
                    <i class="fas fa-plug"></i>
                    <span>端口: ${app.containerInfo.port}</span>
                </div>
                <div class="container-item">
                    <i class="fas fa-clock"></i>
                    <span>${app.containerInfo.uptime}</span>
                </div>
                <div class="container-item">
                    <i class="fas fa-heartbeat"></i>
                    <span class="health-${app.containerInfo.health}">${app.containerInfo.health === 'healthy' ? '健康' : '停止'}</span>
                </div>
            </div>
            <button class="btn-toggle-details" onclick="toggleContainerDetails(${app.id})">
                <i class="fas fa-chevron-down"></i>
                查看详情
            </button>
        </div>
    ` : '';
    
    // 详细容器信息（默认隐藏）
    const containerDetailedInfo = app.containerInfo ? `
        <div class="container-detailed-info" id="container-details-${app.id}" style="display: none;">
            <div class="container-details">
                <div class="detail-section">
                    <h4><i class="fas fa-info-circle"></i> 容器信息</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <label>容器ID:</label>
                            <span>${app.containerInfo.containerId}</span>
                        </div>
                        <div class="detail-item">
                            <label>镜像:</label>
                            <span>${app.containerInfo.image}</span>
                        </div>
                        <div class="detail-item">
                            <label>端口:</label>
                            <span>${app.containerInfo.port}</span>
                        </div>
                        <div class="detail-item">
                            <label>健康状态:</label>
                            <span class="health-${app.containerInfo.health}">${app.containerInfo.health === 'healthy' ? '健康' : '停止'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4><i class="fas fa-chart-bar"></i> 资源使用</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <label>内存:</label>
                            <span>${app.containerInfo.memory}</span>
                        </div>
                        <div class="detail-item">
                            <label>CPU:</label>
                            <span>${app.containerInfo.cpu}</span>
                        </div>
                        <div class="detail-item">
                            <label>运行时间:</label>
                            <span>${app.containerInfo.uptime}</span>
                        </div>
                        <div class="detail-item">
                            <label>最后更新:</label>
                            <span>${new Date(app.lastUsed).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4><i class="fas fa-cogs"></i> 管理操作</h4>
                    <div class="management-actions">
                        <button class="btn-management" onclick="viewContainerLogs(${app.id})">
                            <i class="fas fa-file-alt"></i>
                            查看日志
                        </button>
                        <button class="btn-management" onclick="viewContainerMetrics(${app.id})">
                            <i class="fas fa-chart-line"></i>
                            性能监控
                        </button>
                        <button class="btn-management" onclick="openContainerTerminal(${app.id})">
                            <i class="fas fa-terminal"></i>
                            终端访问
                        </button>
                        <button class="btn-management" onclick="viewContainerConfig(${app.id})">
                            <i class="fas fa-cog"></i>
                            配置管理
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ` : '';
    
    item.innerHTML = `
        <div class="my-app-header">
            <div class="my-app-icon">
                <i class="${app.icon}"></i>
            </div>
            <div class="app-title-section">
                <div class="my-app-name" title="${app.name}">${app.name}</div>
                <div class="app-meta">
                    <span class="app-version">v${app.version}</span>
                    <span class="app-category">${getCategoryName(app.category)}</span>
                </div>
            </div>
            <div class="app-status-section">
                ${statusIndicator}
                <div class="app-time">${new Date(app.addedAt).toLocaleDateString()}</div>
            </div>
        </div>
        
        <div class="app-description">
            ${app.description}
        </div>
        
        ${containerBasicInfo}
        ${containerDetailedInfo}
        
        <div class="my-app-actions">
            ${actionButtons}
        </div>
    `;
    
    return item;
}

// 生成我的应用操作按钮
function generateMyAppButtons(app) {
    if (app.status === 'running') {
        return `
            <button class="my-app-btn stop" onclick="stopMyApp(${app.id})">
                <i class="fas fa-stop"></i>
                停止
            </button>
            <button class="my-app-btn restart" onclick="restartMyApp(${app.id})">
                <i class="fas fa-redo"></i>
                重启
            </button>
            <button class="my-app-btn details" onclick="showAppDetails(${app.id})">
                <i class="fas fa-eye"></i>
                详情
            </button>
            <button class="my-app-btn delete" onclick="deleteContainer(${app.id})">
                <i class="fas fa-trash"></i>
                删除容器
            </button>
        `;
    } else {
        return `
            <button class="my-app-btn start" onclick="startMyApp(${app.id})">
                <i class="fas fa-play"></i>
                启动
            </button>
            <button class="my-app-btn details" onclick="showAppDetails(${app.id})">
                <i class="fas fa-eye"></i>
                详情
            </button>
            <button class="my-app-btn delete" onclick="deleteContainer(${app.id})">
                <i class="fas fa-trash"></i>
                删除容器
            </button>
        `;
    }
}

// 更新我的应用统计信息
function updateMyAppsStats() {
    if (!myAppsCount) return;
    
    const totalCount = userApps.length;
    myAppsCount.textContent = totalCount;
}

// 添加应用到我的应用列表
function addToMyApps(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;
    
    // 检查是否已经存在
    const existingApp = userApps.find(a => a.id === appId);
    if (existingApp) {
        showNotification(`${app.name} 已在您的应用列表中`, 'info');
        return;
    }
    
    // 添加到用户应用列表，包含容器信息
    const userApp = {
        ...app,
        addedAt: new Date().toISOString(),
        lastUsed: new Date().toISOString(),
        containerInfo: {
            containerId: `${app.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
            image: `${app.author?.toLowerCase() || 'app'}/${app.name.toLowerCase()}:${app.version}`,
            port: getRandomPort(),
            memory: app.requirements?.includes('GB') ? app.requirements.match(/(\d+)GB/)?.[1] + 'GB' : '1GB',
            cpu: '1 Core',
            uptime: '0天 0小时',
            health: app.status === 'running' ? 'healthy' : 'stopped'
        }
    };
    
    userApps.push(userApp);
    
    // 重新渲染我的应用列表
    renderMyApps();
    
    showNotification(`${app.name} 已添加到我的应用`, 'success');
}

// 生成随机端口号
function getRandomPort() {
    return Math.floor(Math.random() * (9999 - 3000) + 3000).toString();
}

// 从我的应用列表中移除应用
function removeFromMyApps(appId) {
    const appIndex = userApps.findIndex(a => a.id === appId);
    if (appIndex === -1) return;
    
    const app = userApps[appIndex];
    userApps.splice(appIndex, 1);
    
    // 重新渲染我的应用列表
    renderMyApps();
    
    // 如果当前显示的是我的应用页面，需要重新渲染主内容区域
    if (currentCategory === 'my-apps') {
        renderMyAppsContent();
    }
    
    showNotification(`${app.name} 已从我的应用中移除`, 'info');
}

// 启动我的应用
function startMyApp(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    const startBtn = event.target;
    const originalText = startBtn.innerHTML;
    
    startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 启动中...';
    startBtn.disabled = true;
    
    setTimeout(() => {
        app.status = 'running';
        app.lastUsed = new Date().toISOString();
        
        // 同步原始应用数据的状态
        const originalApp = appsData.find(a => a.id === appId);
        if (originalApp) {
            originalApp.status = 'running';
        }
        
        // 重新渲染我的应用列表和主应用列表
        renderMyApps();
        if (currentCategory === 'my-apps') {
            renderMyAppsContent();
        } else {
            renderApps();
        }
        
        showNotification(`${app.name} 启动成功`, 'success');
    }, 2000);
}

// 停止我的应用
function stopMyApp(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    const stopBtn = event.target;
    const originalText = stopBtn.innerHTML;
    
    stopBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 停止中...';
    stopBtn.disabled = true;
    
    setTimeout(() => {
        app.status = 'stopped';
        
        // 同步原始应用数据的状态
        const originalApp = appsData.find(a => a.id === appId);
        if (originalApp) {
            originalApp.status = 'stopped';
        }
        
        // 重新渲染我的应用列表和主应用列表
        renderMyApps();
        if (currentCategory === 'my-apps') {
            renderMyAppsContent();
        } else {
            renderApps();
        }
        
        showNotification(`${app.name} 已停止`, 'success');
    }, 2000);
}

// 重启我的应用
function restartMyApp(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    const restartBtn = event.target;
    const originalText = restartBtn.innerHTML;
    
    restartBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 重启中...';
    restartBtn.disabled = true;
    
    setTimeout(() => {
        app.lastUsed = new Date().toISOString();
        
        // 同步原始应用数据的状态
        const originalApp = appsData.find(a => a.id === appId);
        if (originalApp) {
            originalApp.status = 'running';
        }
        
        // 重新渲染我的应用列表和主应用列表
        renderMyApps();
        if (currentCategory === 'my-apps') {
            renderMyAppsContent();
        } else {
            renderApps();
        }
        
        showNotification(`${app.name} 重启成功`, 'success');
    }, 2000);
}

// 切换容器详情显示
function toggleContainerDetails(appId) {
    const detailsElement = document.getElementById(`container-details-${appId}`);
    const toggleBtn = event.target.closest('.btn-toggle-details');
    const icon = toggleBtn.querySelector('i');
    
    if (detailsElement.style.display === 'none') {
        detailsElement.style.display = 'block';
        icon.className = 'fas fa-chevron-up';
        toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i> 收起详情';
    } else {
        detailsElement.style.display = 'none';
        icon.className = 'fas fa-chevron-down';
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i> 查看详情';
    }
}

// 查看容器日志
function viewContainerLogs(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    showNotification(`正在打开 ${app.name} 的日志...`, 'info');
    // 这里可以集成实际的日志查看功能
    console.log(`查看 ${app.name} 的容器日志`);
}

// 查看容器性能监控
function viewContainerMetrics(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    showNotification(`正在打开 ${app.name} 的性能监控...`, 'info');
    // 这里可以集成实际的性能监控功能
    console.log(`查看 ${app.name} 的性能监控`);
}

// 打开容器终端
function openContainerTerminal(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    showNotification(`正在连接 ${app.name} 的终端...`, 'info');
    // 这里可以集成实际的终端访问功能
    console.log(`打开 ${app.name} 的容器终端`);
}

// 查看容器配置
function viewContainerConfig(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    showNotification(`正在打开 ${app.name} 的配置管理...`, 'info');
    // 这里可以集成实际的配置管理功能
    console.log(`查看 ${app.name} 的容器配置`);
}

// 删除容器
function deleteContainer(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    // 确认对话框
    if (!confirm(`确定要删除 ${app.name} 的容器吗？\n\n删除后：\n- 容器和相关数据将被永久删除\n- 应用将从"我的应用"列表中移除\n- 此操作不可恢复`)) {
        return;
    }
    
    // 如果容器正在运行，先停止
    if (app.status === 'running') {
        showNotification('正在停止容器...', 'info');
        
        setTimeout(() => {
            app.status = 'stopped';
            showNotification('容器已停止，开始删除...', 'info');
            
            setTimeout(() => {
                executeContainerDeletion(appId);
            }, 1000);
        }, 2000);
    } else {
        executeContainerDeletion(appId);
    }
}

// 执行容器删除
function executeContainerDeletion(appId) {
    const app = userApps.find(a => a.id === appId);
    if (!app) return;
    
    showNotification(`正在删除 ${app.name} 的容器...`, 'info');
    
    setTimeout(() => {
        // 从我的应用列表中移除
        const appIndex = userApps.findIndex(a => a.id === appId);
        if (appIndex !== -1) {
            userApps.splice(appIndex, 1);
        }
        
        // 重置原始应用数据的状态
        const originalApp = appsData.find(a => a.id === appId);
        if (originalApp) {
            originalApp.status = 'stopped';
        }
        
        // 重新渲染我的应用列表
        renderMyApps();
        
        // 如果当前显示的是我的应用页面，需要重新渲染主内容区域
        if (currentCategory === 'my-apps') {
            renderMyAppsContent();
        } else {
            // 如果当前显示的是其他分类，重新渲染应用列表
            renderApps();
        }
        
        showNotification(`${app.name} 的容器已删除，应用已从我的应用中移除`, 'success');
    }, 3000);
}

// 删除应用（只处理用户应用）
function deleteApp(appId, event) {
    console.log('deleteApp 被调用，appId:', appId);
    
    // 阻止事件冒泡
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    // 从用户应用列表中找到应用
    const app = userApps.find(a => a.id === appId);
    
    console.log('查找结果:', app);
    console.log('当前用户应用列表:', userApps.map(a => ({id: a.id, name: a.name})));
    
    if (!app) {
        console.error('用户应用列表中未找到应用，ID:', appId);
        console.log('当前用户应用列表:', userApps);
        showNotification('应用未找到', 'error');
        return;
    }
    
    console.log('找到应用，准备显示删除确认对话框:', app.name);
    
    // 显示自定义确认对话框
    showDeleteAppModal(appId, app.name);
}

// 登录状态管理函数
function updateLoginState() {
    const loginArea = document.getElementById('loginArea');
    const userArea = document.getElementById('userArea');
    
    console.log('更新登录状态:', isLoggedIn); // 调试信息
    console.log('loginArea元素:', loginArea); // 调试信息
    console.log('userArea元素:', userArea); // 调试信息
    
    if (isLoggedIn) {
        if (loginArea) {
            loginArea.style.display = 'none';
            console.log('隐藏登录区域');
        }
        if (userArea) {
            userArea.style.display = 'flex';
            console.log('显示用户区域');
        }
    } else {
        if (loginArea) {
            loginArea.style.display = 'flex';
            console.log('显示登录区域');
        }
        if (userArea) {
            userArea.style.display = 'none';
            console.log('隐藏用户区域');
        }
    }
    
    // 强制重新渲染
    setTimeout(() => {
        console.log('强制刷新UI');
        if (loginArea) {
            loginArea.style.visibility = 'hidden';
            loginArea.offsetHeight; // 触发重排
            loginArea.style.visibility = 'visible';
        }
        if (userArea) {
            userArea.style.visibility = 'hidden';
            userArea.offsetHeight; // 触发重排
            userArea.style.visibility = 'visible';
        }
    }, 10);
}

// 显示登录模态框
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 关闭登录模态框
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 执行登录（手机号+密码）
function performLogin() {
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // 验证手机号格式
    if (!phone) {
        showNotification('请输入手机号码', 'error');
        return;
    }
    
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        showNotification('请输入正确的手机号码', 'error');
        return;
    }
    
    // 验证密码
    if (!password) {
        showNotification('请输入密码', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('密码长度不能少于6位', 'error');
        return;
    }
    
    // 验证用户凭据
    const user = mockUsers.find(u => u.phone === phone && u.password === password);
    if (!user) {
        showNotification('手机号或密码错误', 'error');
        return;
    }
    
    // 模拟登录延迟
    showNotification('正在登录...', 'success');
    
    setTimeout(() => {
        isLoggedIn = true;
        
        // 更新用户数据
        userData = {
            ...userData,
            name: user.name,
            phone: user.phone,
            email: user.email,
            certificate: user.certificate
        };
        
        updateLoginState();
        closeLoginModal();
        showNotification(`欢迎回来，${userData.name}！`, 'success');
        
        // 如果选择记住我，保存登录状态
        if (rememberMe) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userPhone', phone);
        }
    }, 1500);
}

// 数字证书登录
function loginWithCertificate() {
    showNotification('正在检测数字证书...', 'success');
    
    // 模拟证书检测和验证过程
    setTimeout(() => {
        // 模拟找到有效的数字证书
        const certUser = mockUsers.find(u => u.certificate.available);
        
        if (certUser) {
            isLoggedIn = true;
            
            // 更新用户数据
            userData = {
                ...userData,
                name: certUser.name,
                phone: certUser.phone,
                email: certUser.email,
                certificate: certUser.certificate
            };
            
            updateLoginState();
            closeLoginModal();
            showNotification(`数字证书验证成功，欢迎 ${userData.name}！`, 'success');
            
            // 自动保存登录状态
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userPhone', certUser.phone);
            localStorage.setItem('loginMethod', 'certificate');
        } else {
            showNotification('未检测到有效的数字证书，请安装并配置数字证书后重试', 'error');
        }
    }, 2000);
}

// 退出登录 - 显示确认对话框
function logout() {
    const logoutModal = document.getElementById('logoutModal');
    if (logoutModal) {
        logoutModal.style.display = 'flex';
    }
}

// 关闭退出登录确认对话框
function closeLogoutModal() {
    const logoutModal = document.getElementById('logoutModal');
    if (logoutModal) {
        logoutModal.style.display = 'none';
    }
}

// 确认退出登录
function confirmLogout() {
    console.log('开始退出登录'); // 调试信息
    
    isLoggedIn = false;
    console.log('设置登录状态为false:', isLoggedIn); // 调试信息
    
    // 立即更新UI
    updateLoginState();
    
    // 清除本地存储的登录状态
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userPhone');
    localStorage.removeItem('loginMethod');
    
    // 关闭确认对话框
    closeLogoutModal();
    
    showNotification('已退出登录', 'info');
    
    // 再次确保UI更新
    setTimeout(() => {
        updateLoginState();
        console.log('延迟更新UI完成');
    }, 100);
    
    console.log('退出登录完成'); // 调试信息
}

// 存储当前要删除的应用ID
let pendingDeleteAppId = null;

// 显示删除应用确认对话框
function showDeleteAppModal(appId, appName) {
    const modal = document.getElementById('deleteAppModal');
    const appNameElement = document.getElementById('deleteAppName');
    
    if (modal && appNameElement) {
        pendingDeleteAppId = appId;
        appNameElement.textContent = appName;
        modal.style.display = 'flex';
        
        // 防止背景滚动
        document.body.style.overflow = 'hidden';
        
        // 添加点击背景关闭对话框的事件监听器
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeDeleteAppModal();
            }
        });
        
        // 添加ESC键关闭对话框的事件监听器
        const handleEscape = function(event) {
            if (event.key === 'Escape') {
                closeDeleteAppModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }
}

// 关闭删除应用确认对话框
function closeDeleteAppModal() {
    const modal = document.getElementById('deleteAppModal');
    if (modal) {
        modal.style.display = 'none';
        pendingDeleteAppId = null;
        
        // 恢复背景滚动
        document.body.style.overflow = 'auto';
    }
}

// 确认删除应用
function confirmDeleteApp() {
    if (pendingDeleteAppId !== null) {
        // 关闭对话框
        closeDeleteAppModal();
        
        // 执行删除操作
        executeDeleteApp(pendingDeleteAppId);
    }
}

// 执行删除应用操作（原来的deleteApp函数逻辑）
function executeDeleteApp(appId) {
    // 从用户应用列表中找到应用
    const app = userApps.find(a => a.id === appId);
    
    if (!app) {
        showNotification('应用未找到', 'error');
        return;
    }
    
    // 使用现有的删除容器逻辑
    deleteContainer(appId);
}

// 检查本地存储的登录状态
function checkLoginState() {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const savedPhone = localStorage.getItem('userPhone');
    
    if (savedLoginState === 'true' && savedPhone) {
        isLoggedIn = true;
        userData.phone = savedPhone;
        updateLoginState();
    }
}

// 用户菜单相关函数
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.classList.toggle('show');
    }
}

// 点击外部关闭用户菜单
document.addEventListener('click', function(event) {
    const userArea = document.querySelector('.user-area');
    const userMenu = document.getElementById('userMenu');
    
    if (userArea && userMenu && !userArea.contains(event.target)) {
        userMenu.classList.remove('show');
    }
});

// 显示API Key管理模态框
function showApiKeyModal() {
    const modal = document.getElementById('apiKeyModal');
    if (modal) {
        modal.style.display = 'flex';
        renderApiKeyList();
        updateUsageStats();
    }
}

// 关闭API Key管理模态框
function closeApiKeyModal() {
    const modal = document.getElementById('apiKeyModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 渲染API Key列表
function renderApiKeyList() {
    const apiKeyList = document.getElementById('apiKeyList');
    if (!apiKeyList) return;
    
    apiKeyList.innerHTML = '';
    
    userData.apiKeys.forEach(apiKey => {
        const keyItem = document.createElement('div');
        keyItem.className = 'api-key-item';
        keyItem.innerHTML = `
            <div class="api-key-info">
                <div class="api-key-name">${apiKey.name}</div>
                <div class="api-key-value">${apiKey.value}</div>
                <div class="api-key-meta">
                    <span>创建时间: ${apiKey.createdAt}</span>
                    <span>最后使用: ${apiKey.lastUsed}</span>
                </div>
            </div>
            <div class="api-key-actions">
                <button class="btn-copy" onclick="copyApiKey('${apiKey.value}')">
                    <i class="fas fa-copy"></i>
                    复制
                </button>
                <button class="btn-delete" onclick="deleteApiKey('${apiKey.id}')">
                    <i class="fas fa-trash"></i>
                    删除
                </button>
            </div>
        `;
        apiKeyList.appendChild(keyItem);
    });
}

// 更新使用统计
function updateUsageStats() {
    const totalRequests = document.getElementById('totalRequests');
    const todayRequests = document.getElementById('todayRequests');
    const errorRate = document.getElementById('errorRate');
    
    if (totalRequests) {
        const total = userData.apiKeys.reduce((sum, key) => sum + key.usage.total, 0);
        totalRequests.textContent = total.toLocaleString();
    }
    
    if (todayRequests) {
        const today = userData.apiKeys.reduce((sum, key) => sum + key.usage.today, 0);
        todayRequests.textContent = today.toLocaleString();
    }
    
    if (errorRate) {
        const avgErrorRate = userData.apiKeys.reduce((sum, key) => sum + key.usage.errorRate, 0) / userData.apiKeys.length;
        errorRate.textContent = avgErrorRate.toFixed(1) + '%';
    }
}

// 复制API Key
function copyApiKey(keyValue) {
    navigator.clipboard.writeText(keyValue).then(() => {
        showNotification('API Key已复制到剪贴板', 'success');
    }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = keyValue;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('API Key已复制到剪贴板', 'success');
    });
}

// 删除API Key
function deleteApiKey(keyId) {
    if (confirm('确定要删除这个API Key吗？此操作不可撤销。')) {
        userData.apiKeys = userData.apiKeys.filter(key => key.id !== keyId);
        renderApiKeyList();
        updateUsageStats();
        showNotification('API Key已删除', 'success');
    }
}

// 生成新的API Key
function generateNewApiKey() {
    const keyName = prompt('请输入API Key名称:');
    if (!keyName) return;
    
    const newKey = {
        id: 'key_' + Date.now(),
        name: keyName,
        value: 'ak_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        createdAt: new Date().toISOString().split('T')[0],
        lastUsed: '从未使用',
        usage: {
            total: 0,
            today: 0,
            errorRate: 0
        }
    };
    
    userData.apiKeys.push(newKey);
    renderApiKeyList();
    updateUsageStats();
    showNotification('新API Key已生成', 'success');
}

// 显示使用统计
function showUsageStats() {
    showNotification('使用统计功能开发中...', 'info');
}

// 调试函数 - 手动切换登录状态
function toggleLoginState() {
    isLoggedIn = !isLoggedIn;
    console.log('手动切换登录状态:', isLoggedIn);
    updateLoginState();
}

// 调试函数 - 强制显示登录区域
function forceShowLogin() {
    const loginArea = document.getElementById('loginArea');
    const userArea = document.getElementById('userArea');
    if (loginArea) loginArea.style.display = 'flex';
    if (userArea) userArea.style.display = 'none';
    console.log('强制显示登录区域');
}

// 调试函数 - 强制显示用户区域
function forceShowUser() {
    const loginArea = document.getElementById('loginArea');
    const userArea = document.getElementById('userArea');
    if (loginArea) loginArea.style.display = 'none';
    if (userArea) userArea.style.display = 'flex';
    console.log('强制显示用户区域');
}
