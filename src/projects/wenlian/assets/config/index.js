/**
 * Created by qinff on 2017/12/26.
 */

var BASE_URL = "http://172.19.57.153/portal/api/";

var SITE_CONFIG = {
  siteId: 2,
  chId: 0
};

//面包屑
var CRUMB_TYPE = [{
  name: 'author',
  title: '作者详情',
}, {
  name: 'editor',
  title: '编辑详情',
}];

var GO_CONTRIBUTE={
  // baseURL:'http://172.19.36.42:8080/wenlian/ssoWenlianLogin.do?'   //去投稿
  //  baseURL:'http://172.19.36.67:8080/wenlian/ssoWenlianLogin.do?',  //去投稿
  baseURL: 'http://192.168.6.21:8080/wenlian/ssoWenlianLogin.do?'// 文联现场投稿地址
};

var $_$ = {
  /*index: {
   swiper: {
   pic_01: {
   url: '/data/swiper_01_pic_list.json',
   height: "480px",
   interval: 1000
   }
   }
   }*/
   indexPage:{
     authorMoreHref:'./index.html'
   }
};
