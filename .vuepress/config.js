module.exports = {
  "title": "韦世东的技术专栏",
  "description": "Python 编程参考官方专栏，专注于体系化 IT 技术知识分享，内容涵盖Python|Golang|Rust|Kubernetes|高性能|分布式|爬虫|架构|逆向",
  "dest": "public",
  "permalink": "/:year/:month/:day/:slug",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?da0551fff25855afa78b47c89ec2896c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      },
      "meta",
      {
        "name": "keywords",
        "content": "Python,Golang,Rust,Kubernetes,高性能,分布式,爬虫,架构,Python编程参考,软件工程,高可用"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "vssueConfig": {
      platform: 'github',
      owner: 'asyncins',
      repo: 'weishidong_comment',
      clientId: '8de6d2b7024b12c5049f',
      clientSecret: '8f661386c19efd3fe9c9e5d8036ee637a33d189d',
    },
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
          },
          {
            "text": "电子书编程参考",
            "link": "/docs/cankao/"
          }
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-suggestion"
      },
      {
        "text": "韦世东",
        "link": "/blogs/about/",
        "icon": "reco-api"
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
      "sidebarDepth": 2,
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
      ],
      "/docs/cankao/": [
        "",
        "preface",
        "name_and_style",
        "notes",
        "design_write_excellent_code",
        "draw",
        "python_concurrent",
        "single_linked_list",
        "sorting",
        "brinary_search",
        "recursion",
        "binary_tree",
        "node_tree",
        "redis_distributed_lock",
        "snowflake",
        "code_style_reference",
        "python_code_style_reference",
        "requirements_docs",
        "project_management_reference",
        "code_review_reference",
        "project_deploy_reference",
        "notice_reference",
        "meeting_reference",
        "kanwu",
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
    "lineNumbers": true,
    "externalLinks": {
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }
  },
  "plugins": {
    "robots": {
      "host": "https://www.weishidong.com",
      "allowAll": true,
      "disallowAll": false,
      "sitemap": "/sitemap.xml",
      "policies": [
        {
          "userAgent": "*"
        }
      ]
    },
    'vuepress-plugin-baidu-autopush': {},
    'sitemap': {
      hostname: "https://www.weishidong.com"
    }
  },
};