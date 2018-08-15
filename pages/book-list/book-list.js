// pages/book-list/book-list.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:'小王子',
    books:[],
    page:1,
    count:10,
    hasmore:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // this.data.searchContent=options.search;
    options.search='小王子'
    app.douban.search(options.search).then(res=>{
      console.log(res,"res");
      // this.data.books=res.books;
      this.setData({
        searchContent:options.search,
        books:res.books,
        page:this.data.page+1
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.books)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
    if(!this.data.hasmore){
      return;
    }
    app.douban.search(this.data.searchContent,this.data.page).then(res => {
      // console.log(res, page"res");
      // this.data.books=res.books;
      if(!res.books.length){
        this.setData({
          hasmore:false
        })
        return;
      }
      this.setData({
        books: this.data.books.concat(res.books),
        page:this.data.page+1
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})