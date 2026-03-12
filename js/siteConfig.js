const siteConfig = {
  // 基础信息
  topic: "野菜",
  siteName: "野菜识别与采食指南",
  itemName: "野菜",
  itemCount: 30,

  // 首页Hero区
  hero: {
    title: [
      "30种常见野菜",
      "认识田间山野",
      "的天然馈赠"
    ],
    subtitle: "从荠菜到马齿苋,从识别到采摘,安全享用大自然的绿色食材",
    animation: {
      enabled: true,
      demoCount: 5
    }
  },

  // 统计卡片
  stats: [
    { value: "30", label: "常见野菜" },
    { value: "90+", label: "传统食谱" },
    { value: "四季", label: "采摘时令" }
  ],

  // 底部介绍
  footer: {
    tagline: "回归自然,品味田野清香",
    description: "野菜是大自然的馈赠,传承着中华饮食文化的智慧。本站精选30种中国各地常见野菜,详细介绍识别特征、采摘时节、营养价值和烹饪方法,让你安全地享用这些天然绿色食材。从春季的荠菜、香椿,到夏季的马齿苋、苋菜,每一种野菜都有独特的风味和养生功效。"
  },

  // 按钮文案
  cta: {
    primary: "开始认识第一种野菜 →",
    secondary: "闪卡快速认"
  }
};

// 导出配置供其他页面使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteConfig };
}
