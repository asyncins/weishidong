module.exports = {
  "title": "韦世东的技术日志",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "技术专栏",
        "icon": "reco-message",
        "items": [
          {
            "text": "工程师绘图技",
            "link": "/docs/uml/"
          }
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "韦世东",
        "link": "/blogs/about/",
        "icon": "reco-date"
      },
      {
        "text": "出版图书",
        "icon": "reco-message",
        "items": [
          {
            "text": "Python3 网络爬虫宝典",
            "link": "https://item.jd.com/12962196.html",
            "icon": "reco-github"
          },
          {
            "text": "Python3 反爬虫原理与绕过实战",
            "link": "https://item.jd.com/12794078.html",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/uml/": [
        "",
        "draw",
        "usecase",
        "sequence",
        "state",
        "class",
        "activity",
        "communication",
        "component",
        "depm",
        "package",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "分类文章"
      },
      "tag": {
        "location": 4,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "公元前二百年"
  },
  "markdown": {
    "lineNumbers": true
  }
}