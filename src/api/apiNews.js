// import axios from 'axios'
// export function getNewsList() {
//
//   return axios.post("/pro/news/1001-1", {})
//     .then((res) => {
//       return updateNewsData(res.data)
//     }).catch(error => {
//       console.log(error)
//     })
//   // return null
// }
//更新多条新闻数据
export function updateNewsListData(data) {
  let newsList = []
  if (data != undefined) {
    data.forEach(function (temp) {
      newsList.push(updateNewsData(temp))
    })
  }

  return newsList
}

//更新一条新闻数据
export function updateNewsData(data) {
  let news = {}
  news['id'] = data['id']
  news['type'] = data['type']
  // new Date(data['time'] * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
  //
  //
  news['time'] = new Date(data['time'] * 1000).toLocaleString('chinese', {hour12: false}).replace(/:d{1,2}$/, ' ')
  news['title'] = data['title']
  news['author'] = data['author']
  if (data['image'] != null) {
    news['image'] = data['image'].split('#')
  }
  if (data['content'] != null) {
    news['content'] = getContent(data['content'])
  }
  news['REContent'] = getREContent(data['content'])
  return news
}

//获取显示的新闻内容
function getREContent(data) {
  let REContent = ""
  if (data != null) {
    data.split('#').forEach((temp) => {
      if (temp.indexOf('http') < 0) {
        REContent += temp;
      }

    })
  }
  return REContent.substring(0, 70) + "..."
}

//格式化新闻内容
function getContent(data) {
  let res = [];
  data.split("#").forEach((temp) => {
    if (temp == "" && temp == null && temp == 'None' && temp == undefined) {
      console.log(temp)
    } else {
      res.push(temp);
    }

  })
  return res;
}

//格式化日期 2019-01-01 14:33:47.0
export function getFormatDate() {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
  var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
  var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
  var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
  var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

export function getDate() {
  return new Date().getTime();
}

