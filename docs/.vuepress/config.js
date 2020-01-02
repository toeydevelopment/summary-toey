module.exports = {
  title: "Cheatsheet for us",
  base:"https://github.com/toeydevelopment/summary-toey",
  description: "Knowledge collections",
  themeConfig: {
    sidebar: [
      {
        title: "Vuejs", // required
        path: "/guide/vuejs", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: ["/guide/vuejs"]
      },
      {
        title: "git", // required
        path: "/guide/git", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/guide/git"]
      },
      {
        title: "Reactjs", // required
        path: "/guide/reactjs", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/guide/reactjs"]
      }
    ],
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "About Me",
        link: "https://www.github.com/toeydevelopment"
      }
    ]
  }
};
