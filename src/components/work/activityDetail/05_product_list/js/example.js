import component from '../productList.vue'
const name = component.name;  // 组件标签名
const title = '作品列表组件';  // 组件title
const description = `作品列表组件
  接受viewType属性，默认‘complete’，可选值‘simple’，显示完成功能或简易功能`;  // 组件描述信息
const dev = {
  activityDetail: {
    common: {
      vote_03: {  // 投票组件
        url: '',
        params: {
          browserId: '', // 浏览器指纹
          docID: '',
        }
      }
    },
    work_activitydetail_05: {
      'module1': {
        url: '/data/work_activitydetail_05.json',
        keys: {
          title: 'title',
          author: 'author',
          date: 'date',
          abstract: 'abstract',
          teacherCommentNum: 'teacherCommentNum',
          voteNum: 'voteNum',
          voteSwitch: 'PORTAL_ACTIVITY_PRAISE_SWITCH',
          voteDescription: 'PRAISE_DESCRIPTION',

        },
        eventName_listenLoadedData: '',
        eventName_listenSearch: '',
        isDevelopment: true,
      }

    }
  }
};
const prod = {
  common: {
    vote_03: {  // 投票组件
      url: 'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  },
  activityDetail: {
    work_activitydetail_05: {
      'module1': {
        url: 'spc/prodb/getWorkList.do',
        toProductDetailUrl: 'productiondetail.html',
        classification: {/* 分类配置,无则不配置 */
          titles: ['一等奖', '二等奖', '三等奖'],
          key: 'AWARD',/* 对应数据的字段 */
        },
        params: {
          getListParam_doclibCode: 'PORTAL_WORKS',
          getListParam_orderCondition:' BY_SPC_SYS_DOCUMENTID_SPC_DESC',
          getListParam_pageNo:'1',
          getListParam_pageSize:'5',
          getListParamOptions: {//扩展查询参数配置，扩展属性名应与“扩展查询参数”字段配置一致
            activityId: {
              getListParam_relations: '1',
              getListParam_cols: 'ACTIVITYID',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            },
            'place': {//扩展属性名
              getListParam_relations: '1',
              getListParam_cols: 'AREA',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'school': {
              getListParam_relations: '1',
              getListParam_cols: 'SCHOOL',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'group': {
              getListParam_relations: '1',
              getListParam_cols: 'CLASS',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'searchText': {
              getListParam_relations: '1',
              getListParam_cols: 'SYS_TOPIC',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'author':{
              getListParam_relations: '1',
              getListParam_cols: 'POTHUNTER_NAME',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'idCard':{
              getListParam_relations: '1',
              getListParam_cols: 'POTHUNTER_IDNUMBER',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            }

          },
          getListParamOptions_fixed: {/* 固定条件配置,无则不配置 */
            IS_EXCELLENTWORK: {//例
              getListParam_relations: '1',
              getListParam_cols: 'IS_EXCELLENTWORK',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
              getListParam_vals: '是',
            },
          },
          toProductDetailParam_resourceType: 'PORTAL_WORKS'
        },
        keys: {
          title: 'SYS_TOPIC',
          author: 'POTHUNTER_NAME',
          date: 'SYS_CREATED',
          abstract: 'DESCRIPTION',
          teacherCommentNum: 'DIS_COUNT_NUM',
          voteNum: 'VOTE_COUNT',
          resourceId: 'SYS_DOCUMENTID',
          resourceName: 'SYS_TOPIC',
          activityId: 'ACTIVITYID',

          eventListienLoadDatas_activityId: 'pub_resource_id',
          eventListienLoadDatas_voteSwitch: 'PORTAL_ACTIVITY_PRAISE_SWITCH',
          eventListienLoadDatas_endDate: 'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
          eventListienLoadDatas_voteDescription: 'PORTAL_ACTIVITY_PRAISE_DESCRIPTION',
          eventListienLoadDatas_reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',
          eventListienLoadDatas_startDate:'PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW',

          eventListienSearchDatas: ['place', 'school', 'group', 'searchText','author','idCard'],//扩展查询参数
          getListParam_doclibCode: 'doclibCode',
          getListParam_relations: 'relations',
          getListParam_cols: 'cols',
          getListParam_symbols: 'symbols',
          getListParam_vals: 'vals',
          getListParam_memberType: 'memberType',
          getListParam_orderCondition:'orderCondition',
          getListParam_pageNo:'page',
          getListParam_pageSize:'size',

          toProductDetailParam_resourceType: 'resourceType',
          toProductDetailParam_resourceId: 'resourceId',
          toProductDetailParam_colId: 'colId',
          toProductDetailParam_resourceName: 'resourceName',
          toProductDetailParam_activityId: 'activityId',
        },
        eventName_listenLoadedData: 'eventName_loadedDatas',
        eventName_listenSearch: 'eventName_search',
        isDevelopment: false,
        getAwardList: {/* 获取奖项列表配置 */
          url: 'spc/prodb/searchNL.do',
          params: {
            doclibCode: 'PORTAL_AWARD',
            relations: 1,
            cols: 'ACTIVITYID',
            symbols: 2,
            vals: '',
            status: 0,
            page: 1,
            size: 99,
            pageable: 1
          }
        }
      }

    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };