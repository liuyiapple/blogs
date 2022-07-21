module.exports = {
  title: "Antd组件封装业务文档",
  descriptions: "Antd 4.x 封装的业务型实用组件",
  theme: "reco", // 主题
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  subSidebar: "auto",
  themeConfig: {
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
        path: "/",
        collapsable: false, // 不折叠
        children: [
          {
            title: "基础语法",
            path: "/",
          },
          {
            title: "试题",
            path: "/",
          },
        ],
      },
    ],
  },
};
