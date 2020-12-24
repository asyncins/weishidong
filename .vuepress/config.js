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
      },
      "script",
      {
        src: "https://s9.cnzz.com/z_stat.php?id=1279557135&web_id=1279557135"
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
        "title": "静觅丨崔庆才",
        "desc": "崔庆才的个人站点",
        "link": "https://cuiqingcai.com/"
      },
      {
        "title": "大鱼的鱼塘",
        "desc": "一个总有收获的地方",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://brucedone.com/"
      },
      {
        "title": "爬虫安全论坛",
        "desc": "爬虫工程师聚集的地方",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "http://bbs.nightteam.cn/"
      },
      {
        "title": "分布式爬虫管理平台",
        "desc": "支持水平扩展且兼容多语言",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://www.crawlab.cn/"
      },
      {
        "title": "谢乾坤丨青南 Kingname",
        "desc": "谢乾坤的个人站点",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "http://www.kingname.info/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.png",
    "record": "桂ICP备15007024号-5",
    "recordLink": "https://beian.miit.gov.cn/",
    "startYear": "公元前二百年"
  },
  "markdown": {
    "lineNumbers": true
  }
}