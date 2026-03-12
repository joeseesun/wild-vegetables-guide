# 野菜识别与采食指南

一个基于AI生成的知识学习网站，介绍中国各地30种常见可食用野菜，包括识别特征、采摘时节、营养价值和烹饪方法。

## 功能特性

- **渐进式学习**：逐个深入学习每种野菜的详细信息
- **闪卡复习**：快速复习已学内容，支持键盘快捷键
- **知识索引**：快速搜索和浏览所有野菜
- **进度追踪**：记录学习进度，标记已掌握的野菜
- **小测试**：每个野菜都配有测试题帮助巩固记忆
- **PWA支持**：可安装到主屏幕，支持离线访问
- **响应式设计**：完美适配桌面和移动设备

## 技术栈

- **纯静态网站**：HTML + CSS + JavaScript（无框架依赖）
- **数据驱动**：30种野菜数据，90+传统食谱
- **LocalStorage**：客户端进度存储
- **Service Worker**：离线访问支持
- **PWA**：可安装的渐进式Web应用

## 项目结构

```
wild-vegetables-workshop/
├── index.html              # 首页
├── learn.html              # 渐进式学习页
├── flashcard.html          # 闪卡复习页
├── roots.html              # 野菜索引页
├── progress.html           # 学习进度页
├── root-detail.html        # 野菜详情页
├── css/
│   └── minimal.css         # 统一样式文件
├── js/
│   ├── wordData.js         # 30种野菜数据
│   ├── siteConfig.js       # 网站配置
│   └── storage.js          # LocalStorage管理
├── images/                 # 野菜配图
│   ├── jicai.png          # 荠菜
│   ├── machixian.png      # 马齿苋
│   ├── pugongying.png     # 蒲公英
│   ├── xiangchun.png      # 香椿
│   └── aihao.png          # 艾蒿
├── manifest.json           # PWA配置
├── sw.js                   # Service Worker
├── robots.txt              # 搜索引擎配置
├── sitemap.xml             # 网站地图
├── icon-192.png            # PWA图标
└── icon-512.png            # PWA图标
```

## 本地预览

1. 使用任意HTTP服务器启动项目：

```bash
# Python 3
python3 -m http.server 8000

# Node.js (需要安装 http-server)
npx http-server -p 8000
```

2. 在浏览器中访问 `http://localhost:8000`

## 部署到 Vercel

### 方法一：通过Vercel CLI

```bash
# 1. 进入项目目录
cd wild-vegetables-workshop

# 2. 初始化Git（如果还没有）
git init
git add .
git commit -m "Initial commit: 野菜识别与采食指南"

# 3. 部署到Vercel
vercel --prod --yes
```

### 方法二：通过Vercel网页界面

1. 访问 [Vercel](https://vercel.com)
2. 点击 "Add New Project"
3. 选择 "Import Git Repository" 或直接上传文件夹
4. 等待自动部署完成

## 数据说明

### 野菜数据 (js/wordData.js)

包含30种常见野菜的详细信息：

- **基本信息**：名称、分类、简介
- **详细描述**：识别特征、生长环境、营养价值、采摘方法
- **应用案例**：3个传统食谱和烹饪方法
- **小测试**：4选1测试题

### 网站配置 (js/siteConfig.js)

自定义网站的文案和统计：

- 首页标题和副标题
- 统计卡片数据
- 底部介绍文案
- CTA按钮文案

## 野菜列表

### 春季野菜（10种）
荠菜、蒲公英、香椿、苦菜、马兰头、野葱、野韭菜、艾蒿、面条菜、苜蓿

### 夏季野菜（8种）
马齿苋、地皮菜、苋菜、灰灰菜、木槿花、薄荷、紫苏、扫帚菜

### 西南野菜（2种）
鱼腥草、柳蒿芽

### 山区野菜（3种）
刺儿菜、车前草、蕨菜

### 东北野菜（2种）
柳蒿芽、刺五加

### 其他（5种）
野生木耳、败酱草、野蒜、水芹菜、槐花/榆钱

## SEO优化

- ✅ 完整的meta标签（description, keywords, author）
- ✅ Open Graph标签（社交媒体分享优化）
- ✅ Twitter Card标签
- ✅ 语义化HTML（header, main, article, section）
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ PWA支持（manifest.json, Service Worker）

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- iOS Safari 11+
- Android Chrome 60+

## 许可证

本项目由AI生成，内容仅供学习参考。野菜采摘需谨慎识别，建议在专业人士指导下进行。

## 作者

由 Claude (Anthropic) 使用 knowledge-site-creator skill 自动生成

---

**警告**：野菜采摘需要准确识别，误食有毒植物可能造成严重后果。建议：
1. 首次采摘请在有经验的人带领下进行
2. 不确定的植物绝对不要采摘
3. 采摘时避开污染区域（公路边、工业区等）
4. 食用前充分清洗和烹饪
5. 首次食用少量尝试，观察是否有过敏反应
