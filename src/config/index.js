/**
 * Created by codingnuts on 2017/12/7.
 */
module.exports = {
  //项目名 - 根据这里设置的项目名，启动不同的项目
  concurrentProject: process.env.PROJECT_ENV || "mobile_xinhua_wx",
  proxy: {
  	'/file': {
  		target: 'http://172.19.57.71:8080',
  		pathRewrite: {"^/file": "/portal/file"},
  		//changeOrigin: true
  	}
  }
  /* proxy: {
    "/file": {
      target: "http://172.19.57.153",
      pathRewrite: {
        "^/file": "/portal/file"
      },
      logLevel: 'debug'
    }
  } */
};
