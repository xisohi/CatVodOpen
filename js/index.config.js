var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.config.js
var index_config_exports = {};
__export(index_config_exports, {
  default: () => index_config_default
});
module.exports = __toCommonJS(index_config_exports);
var index_config_default = {
  ikanbot: {
    host: "https://bio.link/ikanbot"
    // 🔰爱看机器人(ikanbot)最新可用地址
  },
  keke: {
    host: "https://www.kekedy.tv"
    // 🔰可可影视 地址发布页
  },
  saohuo: {
    host: "http://shapp.us"
    // 🔰骚火电影 网址导航发布页
  },
  ddys: {
    host: "https://ddys.info"
    // 🔰低端 地址发布页
  },
  czzy: {
    host: "https://cz01.vip"
    // 🔰厂长资源 地址发布页
  },
  libvio: {
    host: "https://libvio.app"
    // 🔰Libvio[首图2] 地址发布页
  },
  nicoletv: {
    host: "http://help.nicotv.life"
    // 🔻妮可动漫 最新网址
  },
  goda: {
    host: "https://nav.telltome.net"
    // 🎨G站漫畫 发布页
  },
  bpys: {
    host: "https://www.baipiaoys.com:9092",
    // 🔰白嫖影视 网址
    siteJx: "https://www.baipiao-ys.cc:6062"
    // 解析
  },
  neteasemusic: {
    host: "https://v.nmvod.cn/api.php"
    // 🎧网易云音乐
  },
  zzdj: {
    url: "http://zzdj.cc/api.php/provide/vod",
    // 📷种子短剧[t1]
    categories: ["短剧", "KS", "DY", "都市", "古装", "重生", "逆袭", "虐恋", "萌宝", "言情", "穿越", "战神", "神医", "赘婿", "甜宠", "其他"]
  },
  nongmin: {
    host: "https://m.xiangdao.me"
    // 🔰农民影视
  },
  baozimh: {
    host: "https://www.dinnerku.com"
    // 🎨包子漫画
  },
  manhuagui: {
    host: "https://www.manhuagui.com"
    // 🎨漫画柜✈️
  },
  kanqiu: {
    host: "http://www.88kanqiu.one"
    // ⚽88看球[无搜]
  },
  bili: {
    categories: "经典无损音乐合集#电影解说超清#帕梅拉#太极拳#健身#舞蹈#音乐#歌曲#MV4K#演唱会4K#白噪音4K#知名UP主#说案#解说#演讲#时事#探索发现超清#纪录片超清#平面设计教学#软件教程#实用教程#旅游#风景4K#食谱#美食超清#搞笑#球星#动物世界超清#相声小品#戏曲#儿童#小姐姐4K#热门#旅行探险",
    cookie: "哔哩cookie 或 远端http链接"
    // 🅱我的哔哩
  },
  bililive: {
    cookie: "哔哩cookie 或 远端http链接"
    // 🅱哔哩直播
  },
  // live2cms: {
  //     host: 'https://xxx.xxx.comv/live2cms_data.json' // 🎦道长直播转点播V2 在线配置
  // },
  live2cms: [
    // 🎦道长直播转点播V2 本地配置
    {
      "name": "YouTube_to_m3u",
      "url": "https://github.com/YuanHsing/YouTube_to_m3u/raw/main/youtube.m3u"
    },
    {
      "name": "Yoursmile",
      "url": "https://agit.ai/Yoursmile7/TVBox/raw/branch/master/live.txt"
    },
    {
      "name": "dxawi",
      "url": "https://raw.githubusercontent.com/dxawi/0/main/tvlive.txt"
    },
    {
      "name": "fanmingming",
      "url": "https://live.fanmingming.com/tv/m3u/ipv6.m3u"
    },
    {
      "name": "16万MV",
      "url": "https://freed2.pages.dev/TVBox2/live/MTV.txt"
    },
    {
      "name": "150多位歌手的MV",
      "url": "https://freed2.pages.dev/TVBox2/live/cnMv.txt"
    }
  ],
  appysv2: {
    // 🥈AppysV2[聚合]
    appysv2_555: [{
      name: "🥈555",
      url: "https://555fm.club/api.php/app/",
      search: true
      //搜索开关 true开 false关
    }],
    appysv2_tvkuys: [{
      name: "🥈TV酷",
      url: "https://www.tvkuys.xyz//api.php/app/",
      search: true,
      "*": ["https://jxxcc-cc1.dianshia.top/api/?key=RxSlfyMCzxKoFWMdv4&url="]
      // 解析格式 > 'flag':['parseUrl'] > flag设定'*'，为通用解析
    }],
    appysv2_vipwxys: [{
      name: "🥈微笑TV",
      url: "http://app.vipwxys.cn/mogai_api.php/v1.vod",
      search: true
    }],
    appysv2_cttv: [{
      name: "🥈刺桐[短剧]",
      url: "http://ys.cttv.vip/api.php/app/",
      search: true
    }],
    appysv2_wm: [{
      name: "🥈无名[短剧]",
      url: "http://43.154.162.194//api.php/v1.vod",
      search: true
    }],
    appysv2_ytvip: [{
      name: "🥈影探",
      url: "http://cms-yttv.lyyytv.cn/api.php/app/",
      search: true
    }],
    appysv2_my: [{
      name: "🥈蚂蚁[短剧]",
      url: "http://122.228.84.103:5822/api.php/app/",
      search: true
    }],
    appysv2_ikanju: [{
      name: "🥈爱看剧[短剧]",
      url: "https://www.ikanju.cc/mogai_api.php/v1.vod",
      search: true
    }],
    appysv2_siguyy: [{
      name: "🥈思古[短剧]",
      url: "https://siguyy.cc/api.php/app/",
      search: true
    }],
    appysv2_heyik: [{
      name: "🥈何以[短剧]",
      url: "https://www.heyiys1.com:4433/api.php/app/",
      search: true
    }],
    appysv2_shaozeyy: [{
      name: "🥈少泽影客[短剧]",
      url: "https://yk.shaozeyy.com/api.php/app/",
      search: true
    }],
    appysv2_xmaozy: [{
      name: "🥈熊猫[短剧]",
      url: "http://cms.xmaozy.top//api.php/app/",
      search: true
    }],
    appysv2_qiqiguai: [{
      name: "🥈地瓜[短剧]",
      url: "https://www.qiqiguai.cn/api.php/app/",
      search: true
    }],
    appysv2_yingszj: [{
      name: "🥈影视之家",
      url: "http://yingszj.xn--654a.cc/api.php/app/",
      search: true
    }],
    appysv2_yy365: [{
      name: "🥈4k_2[短剧]",
      url: "http://ysjtv.yy365.vip/api.php/app/",
      search: true
    }],
    appysv2_52dianying: [{
      name: "🥈我爱电影[短剧]",
      url: "https://www.52dianying.top/api.php/app/",
      search: true
    }],
    appysv2_ystv: [{
      name: "🥈追剧",
      url: "https://vip.ystv.lol/api.php/v1.vod",
      search: true
    }],
    appysv2_1080dyw: [{
      name: "🥈1080",
      url: "https://www.1080dyw.xyz/api.php/v1.vod",
      search: true
    }],
    appysv2_adys: [{
      name: "🥈爱迪",
      url: "https://adys.tv/xgapp.php/v1/",
      search: true
    }],
    appysv2_haituu: [{
      name: "🥈海兔",
      url: "https://www.haituu.tv/api.php/v1.vod",
      search: true
    }],
    appysv2_netflixdog: [{
      name: "🥈奈飞狗",
      url: "https://netflixdog.club/api.php/app/",
      search: true
    }],
    appysv2_dmyy4: [{
      name: "🥈大米",
      url: "https://dmyy8.vip/api.php/app/",
      search: true
    }],
    appysv2_juquanweb: [{
      name: "🥈具全",
      url: "http://xinxing.juquanweb.top/icciu_api.php/v1.vod",
      search: true
    }],
    appysv2_51bro: [{
      name: "🥈零刻",
      url: "https://ys.51bro.cn/mogai_api.php/v1.vod",
      search: true
    }],
    appysv2_mjlnl: [{
      name: "🥈聚焦",
      url: "https://www.mjlnl.cn/api.php/v1.vod",
      search: true
    }],
    appysv2_zhaifutvapp: [{
      name: "🥈腐宅",
      url: "http://app.zhaifutvapp.com/ruifenglb_api.php/v1.vod",
      search: true
    }],
    appysv2_bcys: [{
      name: "🥈北川",
      url: "http://www.bcys1.com/api.php/v1.vod",
      search: true
    }]
  },
  vcm3u8: {
    // 🥇采集[整合]
    haiwaikan_t1: [{
      name: "🥇海外看[飞]✈️",
      url: "https://haiwaikan.com/api.php/provide/vod/from/haiwaikan",
      categories: ["国产剧", "韩剧", "欧美剧", "日剧", "港剧", "台剧", "新马剧", "泰剧", "其他剧", "纪录片", "动画电影", "国产动漫", "日本动漫", "欧美动漫", "韩国动漫", "新马泰动漫", "港台动漫", "其他动漫", "冒险片", "剧情片", "动作片", "同性片", "喜剧片", "奇幻片", "恐怖片", "悬疑片", "惊悚片", "歌舞片", "灾难片", "爱情片", "犯罪片", "科幻片", "经典片", "网络电影", "战争片", "韩国综艺", "欧美综艺", "日本综艺", "国产综艺", "新马泰综艺", "港台综艺", "其他综艺", "体育"],
      search: true
      //搜索开关 true开 false关
    }],
    leshi_t1: [{
      name: "🥇乐视",
      url: "https://leshiapi.com/api.php/provide/vod/at/json",
      categories: ["短剧", "电影解说", "国产剧", "韩国剧", "欧美剧", "日剧", "香港剧", "台湾剧", "泰国剧", "海外剧", "纪录片", "动画片", "国产动漫", "日本动漫", "欧美动漫", "海外动漫", "奇幻片", "动作片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "喜剧片", "犯罪片", "灾难片", "悬疑片", "其他片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
      search: true
    }],
    _1080zyku_t1: [{
      name: "🥇优质",
      url: "https://api.1080zyku.com/inc/apijson.php",
      categories: ["短剧", "搞笑", "音乐", "影视", "汽车", "国产剧", "韩国剧", "欧美剧", "日本剧", "台湾剧", "香港剧", "泰国剧", "海外剧", "记录片", "动画片", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
      search: true
    }],
    suoniapi_t1: [{
      name: "🥇索尼",
      url: "https://suoniapi.com/api.php/provide/vod/from/snm3u8/",
      categories: ["爽文短剧", "足球", "篮球", "影视解说", "国产剧", "韩剧", "欧美剧", "日剧", "港剧", "台剧", "泰剧", "海外剧", "纪录片", "动画片", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "预告片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺"],
      search: true
    }],
    lzm3u8_t1: [{
      name: "🥇量子",
      url: "https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/",
      categories: ["短剧", "电影解说", "足球", "篮球", "网球", "斯诺克", "国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "海外剧", "泰国剧", "记录片", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "预告片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
      search: true
    }],
    ffm3u8_t1: [{
      name: "🥇非凡",
      url: "https://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/",
      categories: ["短剧", "国产剧", "香港剧", "韩国剧", "欧美剧", "台湾剧", "日本剧", "海外剧", "泰国剧", "短剧", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "动漫片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "记录片"],
      search: true
    }],
    kuaikan_t1: [{
      name: "🥇快看",
      url: "https://kuaikan-api.com/api.php/provide/vod/from/kuaikan/",
      categories: ["热门短剧", "电影解说", "国产剧", "韩国剧", "欧美剧", "日本剧", "泰剧", "港台剧", "新马剧", "其他剧", "纪录片", "动画电影", "日本动漫", "国产动漫", "欧美动漫", "港台动漫", "冒险片", "剧情片", "动作片", "喜剧片", "奇幻片", "恐怖片", "悬疑片", "惊悚片", "战争片", "歌舞片", "灾难片", "爱情片", "犯罪片", "科幻片", "经典片", "网络电影", "欧美综艺", "日本综艺", "韩国综艺", "国产综艺", "港台综艺"],
      search: true
    }],
    qhm3u8_t1: [{
      name: "🥇奇虎",
      url: "https://caiji.qhzyapi.com/api.php/provide/vod/from/qhm3u8/",
      categories: ["短剧", "网络电影", "体育", "国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "泰国剧", "海外剧", "纪录片", "动画片", "国产动漫", "日本动漫", "欧美动漫", "欧美综艺", "日韩综艺", "大陆综艺", "港台综艺", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "战争片", "剧情片"],
      search: true
    }],
    gsm3u8_t1: [{
      name: "🥇光速",
      url: "https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8/",
      categories: ["短剧", "体育赛事", "大陆剧", "韩剧", "欧美剧", "日剧", "港澳剧", "台湾剧", "泰剧", "记录片", "动漫电影", "动漫", "动作片", "喜剧片", "爱情片", "科幻片", "剧情片", "恐怖片", "战争片", "综艺"],
      search: true
    }],
    hhzyapi_t1: [{
      name: "豪华",
      url: "https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/",
      categories: ["短剧", "内地剧", "韩剧", "欧美剧", "日剧", "香港剧", "马泰剧", "中国动漫", "日本动漫", "欧美动漫", "欧美动漫", "记录片", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "灾难片", "悬疑片", "犯罪片", "奇幻片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
      search: true
    }],
    subocaiji_t1: [{
      name: "🥇速播",
      url: "https://subocaiji.com/api.php/provide/vod/from/subm3u8/",
      categories: ["短剧", "体育赛事", "大陆剧", "韩剧", "美剧", "日剧", "台湾剧", "港澳剧", "泰剧", "纪录片", "动漫电影", "日本动漫", "中国动漫", "欧美动漫", "动作片", "爱情片", "科幻片", "战争片", "剧情片", "恐怖片", "喜剧片", "综艺"],
      search: true
    }],
    xlm3u8_t1: [{
      name: "🥇新浪",
      url: "https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8/",
      categories: ["短剧", "体育", "大陆剧", "韩剧", "欧美剧", "日剧", "港澳剧", "台湾剧", "泰剧", "纪录片", "动漫电影", "动漫", "动作片", "爱情片", "科幻片", "战争片", "剧情片", "恐怖片", "喜剧片", "综艺"],
      search: true
    }],
    jsm3u8_t1: [{
      name: "🥇极速",
      url: "https://jszyapi.com/api.php/provide/vod/from/jsm3u8/",
      categories: ["短剧", "体育赛事", "内地剧", "韩剧", "欧美剧", "日剧", "香港剧", "台湾剧", "马泰剧", "记录片", "动画片", "中国动漫", "日本动漫", "欧美动漫", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "灾难片", "悬疑片", "犯罪片", "奇幻片", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺"],
      search: true
    }],
    wjm3u8_t1: [{
      name: "🥇无尽",
      url: "https://api.wujinapi.me/api.php/provide/vod/",
      categories: ["短剧", "体育赛事", "影视解说", "国产剧", "韩国剧", "美国剧", "日本剧", "香港剧", "台湾剧", "海外剧", "泰剧", "纪录片", "动画片", "国产动漫", "日韩动漫", "欧美动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "悬疑片", "犯罪片", "奇幻片", "邵氏电影", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺"],
      search: true
    }],
    jinyingm3u8_t1: [{
      name: "🥇金鹰",
      url: "https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/json",
      categories: ["短剧", "体育赛事", "内地剧", "韩剧", "欧美剧", "日剧", "香港剧", "台湾剧", "马泰剧", "记录片", "动画片", "中国动漫", "日本动漫", "欧美动漫", "动作片", "爱情片", "喜剧片", "科幻片", "恐怖片", "剧情片", "战争片", "综艺"],
      search: true
    }],
    fsm3u8_t1: [{
      name: "🥇飞速",
      url: "https://www.feisuzyapi.com/api.php/provide/vod/from/fsm3u8/",
      categories: ["短剧", "体育赛事", "电影解说", "国产剧", "韩国剧", "欧美剧", "香港剧", "台湾剧", "日本剧", "泰国剧", "其他剧", "纪录片", "动画片", "国产动漫", "日本动漫", "欧美动漫", "海外动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "其他片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
      search: true
    }],
    hnm3u8_t1: [{
      name: "🥇红牛",
      url: "https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/",
      categories: ["短剧", "体育赛事", "国产剧", "韩剧", "欧美剧", "日剧", "港澳剧", "台湾剧", "泰剧", "纪录片", "动漫电影", "动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "综艺"],
      search: true
    }],
    bfzyapi_t1: [{
      name: "🥇暴风",
      url: "https://bfzyapi.com/api.php/provide/vod/",
      categories: ["国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "海外剧", "泰国剧", "纪录片", "动画片", "动漫片", "国产动漫", "日韩动漫", "欧美动漫", "港台动漫", "海外动漫", "动作片", "喜剧片", "恐怖片", "科幻片", "爱情片", "剧情片", "战争片", "大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
      search: true
    }],
    bjm3u8_t1: [{
      name: "🥇八戒",
      url: "https://cj.bajiecaiji.com/inc/apijson.php",
      categories: ["国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "海外剧", "纪录片", "动画片", "国产动漫", "日本动漫", "欧美动漫", "其他动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "奇幻片", "剧情片", "战争片", "微电影", "港台综艺", "国外综艺", "大陆综艺"],
      search: true
    }],
    wolong_t1: [{
      name: "🥇卧龙",
      url: "https://collect.wolongzyw.com/api.php/provide/vod/",
      categories: ["电影解说", "篮球", "足球", "国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "海外剧", "泰国剧", "记录片", "动画片", "国产动漫", "日本动漫", "欧美动漫", "短片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "惊悚片", "家庭片", "古装片", "历史片", "悬疑片", "犯罪片", "港台综艺", "韩国综艺", "大陆综艺", "欧美综艺"],
      search: true
    }],
    apiyhzy_t1: [{
      name: "🥇樱花",
      url: "https://m3u8.apiyhzy.com/api.php/provide/vod/",
      categories: ["国产剧", "韩国剧", "欧美剧", "日本剧", "香港剧", "台湾剧", "海外剧", "纪录片", "动画电影", "动漫", "国产动漫", "日本动漫", "欧美动漫", "海外动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "犯罪片", "综艺", "大陆综艺", "日韩综艺", "港台综艺", "欧美综艺"],
      search: true
    }],
    ukm3u8_t1: [{
      name: "🥇U酷",
      url: "https://api.ukuapi.com/api.php/provide/vod/from/ukm3u8/",
      categories: ["国产剧", "韩剧", "欧美剧", "日剧", "港澳剧", "台湾剧", "泰剧", "记录片", "动漫电影", "动漫", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "综艺"],
      search: true
    }],
    zpsps_t1: [{
      name: "🥇宝片[聚]",
      url: "https://zpsps.com/api.php/provide/vod/",
      categories: ["短剧", "影院", "连续剧", "综艺", "动漫", "纪录片", "4K电影", "即将上映", "经典香港", "历届奥斯卡", "高分国产", "香港TVB", "高分韩剧", "高分美剧", "高分日剧", "2023票房冠军", "高分国漫", "高分日漫", "高分美漫", "IMDB高分美漫", "热门综艺"],
      search: true
    }],
    rise_t1: [{
      name: "🥇飞马[聚]",
      url: "http://rise.eu.org/api.php/provide/vod/",
      categories: ["电影", "电视剧", "综艺", "动漫"],
      search: true
    }]
  },
  ali: {
    token: "去 https://alist.nn.ci/guide/drivers/aliyundrive_open.html 获取32位token,填入32位token",
    token280: "去 https://messense-aliyundrive-webdav-backendrefresh-token-ucs0wn.streamlit.app/ 地址获取，填入280位token"
  },
  quark: {
    cookie: "去 https://h5.sm.cn/blm/mobile-entry-97/index#/ ，将浏览器设为PC模式，获取你的夸克cookie覆盖填入此处，形如_UP_A4A_11_=开头的"
  },
  wogg: {
    url: "http://www.kxys.site:3328"
    // 📂玩偶哥哥
  },
  wobg: {
    url: "https://wobge.run.goorm.io"
    // 📂玩偶表哥
  },
  tudou: {
    url: "https://tudou.lvdoui.top"
    // 📂土豆(仅搜索)
  },
  xiaoya: {
    url: "搭建属于你自己的小雅alist-tvbox，将地址填入此处，形如：http://192.168.0.222:4567/vod1/"
    // 📂小雅影视
  },
  yiso: {
    url: "https://yiso.fun",
    // 📂易搜
    cookie: "登录 https://yiso.fun 网站，获取cookie，填入网站cookie值"
  },
  yydsys: {
    url: "https://tv.yydsys.top"
    // 📂玩我老哥
  },
  alist: [
    {
      name: "🐉神族九帝",
      server: "https://alist.shenzjd.com"
    },
    {
      name: "💢repl",
      server: "https://ali.liucn.repl.co"
    }
  ],
  color: [
    {
      light: {
        bg: "https://www.loliapi.com/acg/",
        bgMask: "0x50ffffff",
        primary: "0xff446732",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffc5efab",
        onPrimaryContainer: "0xff072100",
        secondary: "0xff55624c",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffd9e7cb",
        onSecondaryContainer: "0xff131f0d",
        tertiary: "0xff386666",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffbbebec",
        onTertiaryContainer: "0xff002020",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfff8faf0",
        onBackground: "0xff191d16",
        surface: "0xfff8faf0",
        onSurface: "0xff191d16",
        surfaceVariant: "0xffe0e4d6",
        onSurfaceVariant: "0xff191d16",
        inverseSurface: "0xff2e312b",
        inverseOnSurface: "0xfff0f2e7",
        outline: "0xff74796d",
        outlineVariant: "0xffc3c8bb",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffaad291",
        surfaceTint: "0xff446732"
      },
      dark: {
        bg: "https://www.loliapi.com/acg/",
        bgMask: "0x50000000",
        primary: "0xffaad291",
        onPrimary: "0xff173807",
        primaryContainer: "0xff2d4f1c",
        onPrimaryContainer: "0xffc5efab",
        secondary: "0xffbdcbb0",
        onSecondary: "0xff283420",
        secondaryContainer: "0xff3e4a35",
        onSecondaryContainer: "0xffd9e7cb",
        tertiary: "0xffa0cfcf",
        onTertiary: "0xff003738",
        tertiaryContainer: "0xff1e4e4e",
        onTertiaryContainer: "0xffbbebec",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff11140e",
        onBackground: "0xffe1e4d9",
        surface: "0xff11140e",
        onSurface: "0xffe1e4d9",
        surfaceVariant: "0xff43483e",
        onSurfaceVariant: "0xffe1e4d9",
        inverseSurface: "0xffe1e4d9",
        inverseOnSurface: "0xff2e312b",
        outline: "0xff8d9286",
        outlineVariant: "0xff43483e",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff446732",
        surfaceTint: "0xffaad291"
      }
    },
    {
      light: {
        bg: "https://www.loliapi.com/acg/",
        bgMask: "0x50ffffff",
        primary: "0xff666014",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffeee58c",
        onPrimaryContainer: "0xff1f1c00",
        secondary: "0xff625f42",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffe9e4be",
        onSecondaryContainer: "0xff1e1c05",
        tertiary: "0xff3f6654",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffc1ecd5",
        onTertiaryContainer: "0xff002114",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfffef9eb",
        onBackground: "0xff1d1c14",
        surface: "0xfffef9eb",
        onSurface: "0xff1d1c14",
        surfaceVariant: "0xffe7e3d0",
        onSurfaceVariant: "0xff1d1c14",
        inverseSurface: "0xff323128",
        inverseOnSurface: "0xfff5f1e3",
        outline: "0xff7a7768",
        outlineVariant: "0xffcbc7b5",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffd1c973",
        surfaceTint: "0xff666014"
      },
      dark: {
        bg: "https://www.loliapi.com/acg/",
        bgMask: "0x50000000",
        primary: "0xffd1c973",
        onPrimary: "0xff353100",
        primaryContainer: "0xff4d4800",
        onPrimaryContainer: "0xffeee58c",
        secondary: "0xffcdc8a3",
        onSecondary: "0xff333117",
        secondaryContainer: "0xff4a482c",
        onSecondaryContainer: "0xffe9e4be",
        tertiary: "0xffa6d0b9",
        onTertiary: "0xff0e3727",
        tertiaryContainer: "0xff274e3d",
        onTertiaryContainer: "0xffc1ecd5",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff14140c",
        onBackground: "0xffe7e2d5",
        surface: "0xff14140c",
        onSurface: "0xffe7e2d5",
        surfaceVariant: "0xff49473a",
        onSurfaceVariant: "0xffe7e2d5",
        inverseSurface: "0xffe7e2d5",
        inverseOnSurface: "0xff323128",
        outline: "0xff949181",
        outlineVariant: "0xff49473a",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff666014",
        surfaceTint: "0xffd1c973"
      }
    },
    {
      light: {
        bg: "https://www.loliapi.com/acg/",
        bgMask: "0x50ffffff",
        primary: "0xFF2B6C00",
        onPrimary: "0xFFFFFFFF",
        primaryContainer: "0xFFA6F779",
        onPrimaryContainer: "0xFF082100",
        secondary: "0xFF55624C",
        onSecondary: "0xFFFFFFFF",
        secondaryContainer: "0xFFD9E7CA",
        onSecondaryContainer: "0xFF131F0D",
        tertiary: "0xFF386666",
        onTertiary: "0xFFFFFFFF",
        tertiaryContainer: "0xFFBBEBEB",
        onTertiaryContainer: "0xFF002020",
        error: "0xFFBA1A1A",
        onError: "0xFFFFFFFF",
        errorContainer: "0xFFFFDAD6",
        onErrorContainer: "0xFF410002",
        background: "0xFFFDFDF5",
        onBackground: "0xFF1A1C18",
        surface: "0xFFFDFDF5",
        onSurface: "0xFF1A1C18",
        surfaceVariant: "0xFFE0E4D6",
        onSurfaceVariant: "0xFF1A1C18",
        inverseSurface: "0xFF2F312C",
        onInverseSurface: "0xFFF1F1EA",
        outline: "0xFF74796D",
        outlineVariant: "0xFFC3C8BB",
        shadow: "0xFF000000",
        scrim: "0xFF000000",
        inversePrimary: "0xFF8CDA60",
        surfaceTint: "0xFF2B6C00"
      },
      dark: {
        bg: "https://www.loliapi.com/acg/",
        bgMask: "0x50000000",
        primary: "0xFF8CDA60",
        onPrimary: "0xFF133800",
        primaryContainer: "0xFF1F5100",
        onPrimaryContainer: "0xFFA6F779",
        secondary: "0xFFBDCBAF",
        onSecondary: "0xFF283420",
        secondaryContainer: "0xFF3E4A35",
        onSecondaryContainer: "0xFFD9E7CA",
        tertiary: "0xFFA0CFCF",
        onTertiary: "0xFF003737",
        tertiaryContainer: "0xFF1E4E4E",
        onTertiaryContainer: "0xFFBBEBEB",
        error: "0xFFFFB4AB",
        errorContainer: "0xFF93000A",
        onError: "0xFF690005",
        onErrorContainer: "0xFFFFDAD6",
        background: "0xFF1A1C18",
        onBackground: "0xFFE3E3DC",
        outline: "0xFF8D9286",
        onInverseSurface: "0xFF1A1C18",
        inverseSurface: "0xFFE3E3DC",
        inversePrimary: "0xFF2B6C00",
        shadow: "0xFF000000",
        surfaceTint: "0xFF8CDA60",
        outlineVariant: "0xFF43483E",
        scrim: "0xFF000000",
        surface: "0xFF1A1C18",
        onSurface: "0xFFC7C7C0",
        surfaceVariant: "0xFF43483E",
        onSurfaceVariant: "0xFFC7C7C0"
      }
    }
  ]
};
