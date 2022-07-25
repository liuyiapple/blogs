module.exports = {
  title: "前端学习,从入门到起飞",
  descriptions: "Antd 4.x 封装的业务型实用组件",
  base:"/blogs",
  theme: "reco", // 主题
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "博客",
        items: [
          {
            text: "Github",
            link: "https://github.com/liuyiapple",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/liuyihjjii",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "基础篇",
        path: "/base",
        collapsable: false, // 不折叠
        children: [
          {
            title: "基础语法",
            path: "/handbook/basejs",
          },
          {
            title: "面试题",
            path: "/handbook/exam",
          },
        ],
      },
    ],
  },
};
