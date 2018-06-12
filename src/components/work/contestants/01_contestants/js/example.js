/*
 *参赛组件
 */

import component from "../contestants.vue";

const name = component.name; // 组件标签名

const title = "参赛组件"; // 组件title

const description = `参赛

`; // 组件描述信息

const dev = {
  contestants: {
    contestants_01: {
      url: "../data/work_contestants_01_data.json"
    }
  }
};

const prod = {
  contestants: {
    contestants_01: {
      competitionList: {
        url: "/user/getActivityMemberByUser.do",/* 获取参赛人 */
        competitionedUrl: 'spc/prodb/activity/activityPothunterExist.do',/* 获取已参赛人url */
        params: {
          userId: "",
          pageNo: "1",
          pageSize: "99"
        },
        competitionedParams:{
          IDNumbers:'',
          activityID:''
        }
      },
      //查询补充信息接口
      supplementaryInformation: {
        url: "/spc/prodb/detail.do?",
        getSchoolUrl: "spc/prodb/searchNL.do",
        params: {
          getPlaceRequest_doclibCode: "PORTAL_ACTIVITY", //配库码
          getSchoolRequest_doclibCode: "PORTAL_SCHOOL", //配库码
          getSchoolRequest_relations: "1,1", //1并且，2或者
          getSchoolRequest_cols: "AREA,CLASS", //字段名
          getSchoolRequest_symbols: "1,1", //匹配模式，1包含，2等于，3不等于
          doclibCode: "PORTAL_ACTIVITY",
          docID: ""
        },
        keys: {
          output_place: "place",
          output_school: "school",
          output_group: "group",
          output_searchText: "searchText",
          school_name: "SYS_TOPIC",
          eventData_docID: "pub_resource_id", //事件接受参数数据，资源id
          getPlaceRequest_doclibCode: "doclibCode",
          getPlaceRequest_docID: "docID", //资源id
          getPlaceRequestBack_areas: "AREALIMT",
          getPlaceRequestBack_classes: "CLASSLIMT",
          getSchoolRequest_doclibCode: "doclibCode",
          getSchoolRequest_relations: "relations",
          getSchoolRequest_cols: "cols",
          getSchoolRequest_symbols: "symbols",
          getSchoolRequest_vals: "vals" //值
        }
      },
      //附件上传接口
      upLoadUrl: "/dynamicFile/upload.do?",
      // 汇总上传接口
      informationUploading: {
        url: "/spc/prodb/saveItem.do?",
        params: {
          doclibCode: "PORTAL_WORKS",
          metaMap: {
            // ACTIVITYLIBID:"PORTAL_ACTIVITY",
            ACTIVITYID: "",
            ACTIVITY_NAME: "",//活动名称
            POTHUNTER_NAME: "", //参赛人姓名
            POTHUNTER_SEX: "", //参赛人性别
            POTHUNTER_PHONENUMBER: "", //参赛人手机号
            POTHUNTER_IDNUMBER: "", //	参赛人身份证号
            GUIDE_TEACHER: "", //指导教师
            AREA: "", //地区
            CLASS: "", //年级
            SCHOOL: "", //学校
            SYS_TOPIC: "", //作品标题
            DESCRIPTION: "", //作品简介
            TEXTCONTENT: "", //	正文内容
            ATTACHID: "", //文件附件ID
            COMMITUSER: "", //提交用户
            WORKSTYPE: "", //作品类型
            CONCRETE_CLASS: '', //班级
            SCHOOL_ADDRESS: '',//学校
            MAILBOX: '',//邮箱
            POSTCODE: '',//邮编
            GUIDETEACHER_PHONENUMBER: '',//指导教师电话
            ORGANIZE_TEACHER: '',//组织教师
            ORGANIZETEACHER_PHONENUMBER: '',//组织教师电话
            IS_HIDE: '' //是否是隐私
          },
          attachMap: [
            {
              FILERECORDID: "", //文件附件ID
              CATEGORYID: "4127" //写死
            }
          ]
        }
      },
      cascaderConfig:{
        splitTag:{
          item:';',
          category:'~'
        }
      }
    }
  }
};

export { name, title, dev, prod, description };
