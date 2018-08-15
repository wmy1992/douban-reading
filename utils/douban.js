// const URI ='https://api.douban.com/v2/book/'
const URI ='https://douban.uieee.com/v2/book/'

const wechat=require('./wechat')

function search(query,page=1,count=20){
  let searchApi=URI+'search';
  let params={q:query,start:(page-1)*count,count:count};

  
  return wechat.request({ url: searchApi,data:params}).then(res=>res.data);

}

module.exports={
  search,
}