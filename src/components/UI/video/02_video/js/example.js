/*  音乐播放组件  Created by zong 2018/05/18  */
import component from "../videoListContent.vue";

const name = component.name; // 组件标签名

const title = "音乐播放组件"; // 组件title

const description = `音乐播放组件`; // 组件描述信息

const dev = {
  ui_video: {
    ui_video_02: {
      'modulename': {
        getResourceDetail: {
          url: "../data/ui_video_02_data.json",
          params: {
            pubId: "",
            loginName: "emmmm",
            siteId: "8",
            attachTypes: "audio"
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "audioAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'sysTopic', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'play',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }],
        },
        field: "fileRecordID"
      }
    }
  }
}

const prod = {
  ui_video: {
    ui_video_02: {
      'modulename': {
        getResourceDetail: {
          url: "resource/detail.do\"",
          params: {
            pubId: "",
            loginName: "emmmm",
            siteId: "8",
            attachTypes: "audio"
          },
          sysAdapter: "sykAdapter", // 系统字段
          typeAdapter: "audioAdapter", // 类型字段
          complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
            name: 'img', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 time 时间、 img 图片都属于复杂项，需要填写name的值）
            field: 'sysTopic', // 取什么字段
            display: '', // 固定显示内容是什么
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'play',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }, {
            name: 'button',
            field: 'resName',
            display: '',
            method: '', // 方法名 要在下面配置
            className: "",
          }],
        },
        field: "fileRecordID"
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

const childComponents = [];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType,
  childComponents
};