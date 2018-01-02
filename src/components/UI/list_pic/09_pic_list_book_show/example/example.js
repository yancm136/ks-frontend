/**
 * Created by ma.jw on 2017/12/15.
 */
const dev = {
  picListBookShow:{
    url:"/data/ui_pic_list_09.json",
    href:"./bookList.html?colId=",
    bookDetail:"./bookDetail.html?pubId=",
    beginPicIndex:2,
    finishPicIndex:8,
    colId:59
  }
};

const prod = {
  picListBookShow:{
    url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
    param:{
      conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
      groupBy: "pub_resource_id",
      orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      pageNo: "1",
      pageSize: "15",
      searchText: ""
    },
    href:"./read.jsp?bookId=",
    bookDetail:"./bookDetail.html?pubId=",
    beginPicIndex:2,
    finishPicIndex:8,
    colId:59
  }
};