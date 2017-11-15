<template>
  <div class="hello">
    <div class="reserve-block">
      <div class="header">
        <div class="header-left">
          <img src="./../assets/console.png" alt="" v-on:click="contrlBar()">
          <p>Consmitor</p>
        </div>
        <div class="header-right">
          <div v-on:click="logOut()"><p>Logout</p></div>
        </div>
      </div>

      <div class="left-bar" ref="leftBar">
        <div class="bar-user">
          <img src="./../assets/headerlogo.png" alt="">
          <div><p id="username">{{usernamemsg}}</p></div>
        </div>
        <div class="bar-list">
          <div class="lists" v-on:click="check1()"><p>控制功能</p></div>
          <div class="lists" v-on:click="check2()"><p>上传功能</p></div>
          <div class="lists" v-on:click="check3()"><p>文件查看</p></div>
        </div>
      </div>

      <div class="content" ref="content">
        <div v-show="site1" class="contrl-box">

          <div class="contents">
            <div class="contrl-list">
              <div class="contrl-text"><p>任务管理器</p></div>
              <label><input v-on:click="send()" v-model="state0" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>写字板</p></div>
              <label><input v-on:click="send()"  v-model="state1" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>画图</p></div>
              <label><input v-on:click="send()"  v-model="state2" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>DVD播放器</p></div>
              <label><input v-on:click="send()"  v-model="state3" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>记事本</p></div>
              <label><input v-on:click="send()"  v-model="state4" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>
          </div>

          <div class="contents">
            <div class="contrl-list">
              <div class="contrl-text"><p>控制台</p></div>
              <label><input v-on:click="send()"  v-model="state5" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>资源管理器</p></div>
              <label><input  v-on:click="send()" v-model="state6" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>注册表</p></div>
              <label><input v-on:click="send()"  v-model="state7" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>计算器</p></div>
              <label><input v-on:click="send()"  v-model="state8" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>SQL SERVER 客户端网络实用程序</p></div>
              <label><input  v-on:click="send()" v-model="state9" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>
          </div>

          <div class="contents">
            <div class="contrl-list">
              <div class="contrl-text"><p>垃圾整理</p></div>
              <label><input v-on:click="send()" v-model="state10" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>屏幕键盘</p></div>
              <label><input v-on:click="send()" v-model="state11" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>ODBC数据源管理器</p></div>
              <label><input v-on:click="send()" v-model="state12" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>设备管理器</p></div>
              <label><input v-on:click="send()" v-model="state13" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>共享文件夹管理器</p></div>
              <label><input v-on:click="send()" v-model="state14" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>
          </div>

          <div class="contents">
            <div class="contrl-list">
              <div class="contrl-text"><p>重新启动</p></div>
              <label><input v-on:click="send()" v-model="state16" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>注销命令</p></div>
              <label><input v-on:click="send()" v-model="state17" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>关机</p></div>
              <label><input v-on:click="send()" v-model="state18" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>性能查看器</p></div>
              <label><input v-on:click="send()" v-model="state19" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>

            <div class="contrl-list">
              <div class="contrl-text"><p>辅助工具管理器</p></div>
              <label><input v-on:click="send()" v-model="state20" class="mui-switch mui-switch-anim" type="checkbox"></label>
            </div>
          </div>

        </div>

        <div v-show="site2" class="contrl-box">
          <div class="file-box">
            <div ref="formBox" action="">
              <input type="file" ref="inputBox" v-on:change="showFile()">
              <button v-on:click="updataFile()">上传</button>
            </div>
          </div>
        </div>

        <div v-show="site3" class="contrl-box">
          <div class="file-list" ref="listBox" >
            <a v-for="data in items" v-on:click="getDir()" v-bind:class="{'folder': data.type||data.drive , 'download': !data.type}">
              {{ data.name }}
              {{ data.drive }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState,mapGetters} from 'vuex';

  export default {
    name: 'hello',

    data () {
      return {
        state0: '',state1: '',state2: '',state3: '',state4: '',state5: '',state6: '',state7: '',state8: '',state9: '',state10: '',state11: '',state12: '',state13: '',state14: '',state16: '',state17: '',state18: '',state19: '',state20: '',
        site1: true, site2: false, site3: false,
        barState: 1,
        items: [],
      }
    },
    computed: {
      ...mapGetters(['usernamemsg'])
    },
    methods: {
      getDir: function () {
        let that = this;
        let username = this.usernamemsg;
        let dirName = event.path[0].innerText;
        let allDir = this.items;
//        console.log(event.path[0].innerText, allDir[0]);
        for(let i=0; i<allDir.length; i++){
          if(dirName === allDir[i].name || dirName == allDir[i].drive){
            if(allDir[i].type === true || allDir[i].useInfo){
              $.ajax({
                url: 'http://localhost:4567/getDir',
//                url: 'http://www.tjoe18.cn:4567/getDir',
                dataType: "jsonp",
                data: {
                  username: username,
                  dirName: allDir[i].path
                },
                success: function (data) {
//                  console.log(data);
                  if(data.result === "try again"){
//                    console.log("try again");
                    return;
                  }else{
                    that.items = data.result;
                  }
                }
              });
            }else{
              // 下载
//              console.log("下载");
//              console.log(allDir[i].path);
              $.ajax({
                url: 'http://localhost:4567/reFile',
//                url: 'http://www.tjoe18.cn:4567/reFile',
                dataType: "jsonp",
                data: {
                  username: username,
                  nameOfFile: allDir[i].name,
                  filePath: allDir[i].path
                },
                success: function (data) {
//                  console.log(data);
                  if(data.result.length>0){
                    window.open("http://www.tjoe18.cn/FlashRemote/files1/" + data.result);
                  }
                }
              });
            }
          }else{
//            console.log("点了什么玩意");
          }
        }
      },

      contrlBar: function(){
        console.log(this);
        let bar = this.$refs.leftBar;
        let content = this.$refs.content;
        if(this.barState === 1){
          bar.style.display = "none";
          content.style.marginLeft = "0px";
          this.barState = 0;
        }else if(this.barState === 0){
          bar.style.display = "block";
          content.style.marginLeft = "140px";
          this.barState = 1;
        }
      },

      showFile: function () {
        let fileObj = this.$refs.inputBox;
        let file = fileObj.files;
        let formBox = this.$refs.formBox;
//        console.log(file);
        let fileName = file[0].name;
        let node = document.createElement("h1");
        node.innerHTML = fileName;
        node.style.position="relative";
        node.style.fontSize="14px";
        node.style.top="-280px";
        node.style.left="30px";
        formBox.appendChild(node);
      },

      updataFile:function () {
        let username = this.usernamemsg;
        let fileObj = this.$refs.inputBox;
        let file = fileObj.files;

        if(file.length === 0){
          alert("请选择文件");
          return;
        }

        let data = new FormData();
        $.each(file, function(i, file) {
          data.append('file'+i, file);
        });

//        console.log(data);

        $.ajax({
          url: 'http://localhost:4567/upName',
//          url: 'http://www.tjoe18.cn:4567/upName',
          data: {username: username},
          dataType: "jsonp",
          success: function () {
            $.ajax({
              url: 'http://localhost:4567/upLoad',
//          url: 'http://www.tjoe18.cn:4567/upLoad',
              data: data,
              type: "post",
              dataType: "JSON",
              contentType: false,
              processData: false,
              success: function (data) {
//                console.log(data);
              },
              error: function (err) {
//                console.log("err " + err);
              }
            });
          }
        });

        return;
      },

      check1: function () {
        this.site1 = true;
        this.site2 = false;
        this.site3 = false;
      },
      check2: function () {
        this.site1 = false;
        this.site2 = true;
        this.site3 = false;
      },
      check3: function () {
        let that = this;
        this.site1 = false;
        this.site2 = false;
        this.site3 = true;
        let username = this.usernamemsg;

        $.ajax({
          url: 'http://localhost:4567/getDir',
//          url: 'http://www.tjoe18.cn:4567/getDir',
          dataType: "jsonp",
          data: {
            username: username,
            dirName: '',
          },
          success: function (data) {
//            console.log(data);
            if(data.result == "try again"){
//              console.log("try again");
              alert("请再次请求");
              return;
            }else{
              that.items = data.result;
            }
          }
        });
      },
      logOut: function () {
        let username = this.usernamemsg;
        $.ajax({
          url: 'http://localhost:4567/endConnect',
//          url: 'http://www.tjoe18.cn:4567/endConnect',
          type: "get",
          data: {username: username},
          dataType: "JSON",
          success: function (data) {
//            console.log(data);
          }
        });
        window.location.reload();
      },
      send: function () {
        let username = this.usernamemsg;
        function sendData (val) {
          $.ajax({
            url: "http://localhost:4567/solveCommond",
//            url: 'http://www.tjoe18.cn:4567/solveCommond',
            dataType: "jsonp",
            data: {
              comValue: val,
              username: username
            },
            success: function (data) {
            }
          });
        }

        if(this.state0 === true){
          sendData("100");
          this.state0 = 1;
        }else if(this.state0 === false){
          sendData("200");
          this.state0 = null;
        }
        if(this.state1 === true){
          sendData("101");
          this.state1 = 1;
        }else if(this.state1 === false){
          sendData("201");
          this.state1 = null;
        }
        if(this.state2 === true){
          sendData("102");
          this.state2 = 1;
        }else if(this.state2 === false){
          sendData("202");
          this.state2 = null;
        }
        if(this.state3 === true){
          sendData("103");
          this.state3 = 1;
        }else if(this.state3 === false){
          sendData("203");
          this.state3 = null;
        }
        if(this.state4 === true){
          sendData("104");
          this.state4 = 1;
        }else if(this.state4 === false){
          sendData("204");
          this.state4 = null;
        }
        if(this.state5 === true){
          sendData("105");
          this.state5 = 1;
        }else if(this.state5 === false){
          sendData("205");
          this.state5 = null;
        }
        if(this.state6 === true){
          sendData("106");
          this.state6 = 1;
        }else if(this.state6 === false){
          sendData("206");
          this.state6 = null;
        }
        if(this.state7 === true){
          sendData("107");
          this.state7 = 1;
        }else if(this.state7 === false){
          sendData("207");
          this.state7 = null;
        }
        if(this.state8 === true){
          sendData("108");
          this.state8 = 1;
        }else if(this.state8 === false){
          sendData("208");
          this.state8 = null;
        }
        if(this.state9 === true){
          sendData("109");
          this.state9 = 1;
        }else if(this.state9 === false){
          sendData("209");
          this.state9 = null;
        }
        if(this.state10 === true){
          sendData("110");
          this.state10 = 1;
        }else if(this.state10 === false){
          sendData("210");
          this.state10 = null;
        }
        if(this.state11 === true){
          sendData("111");
          this.state11 = 1;
        }else if(this.state11 === false){
          sendData("211");
          this.state11 = null;
        }
        if(this.state12 === true){
          sendData("112");
          this.state12 = 1;
        }else if(this.state12 === false){
          sendData("212");
          this.state12 = null;
        }
        if(this.state13 === true){
          sendData("113");
          this.state13 = 1;
        }else if(this.state13 === false){
          sendData("213");
          this.state13 = null;
        }
        if(this.state14 === true){
          sendData("114");
          this.state14 = 1;
        }else if(this.state14 === false){
          sendData("214");
          this.state14 = null;
        }
        if(this.state16 === true){
          sendData("116");
          this.state16 = 1;
        }else if(this.state16 === false){
          sendData("216");
          this.state16 = null;
        }
        if(this.state17 === true){
          sendData("117");
          this.state17 = 1;
        }else if(this.state17 === false){
          sendData("217");
          this.state17 = null;
        }
        if(this.state18 === true){
          sendData("118");
          this.state18 = 1;
        }else if(this.state18 === false){
          sendData("218");
          this.state18 = null;
        }
        if(this.state19 === true){
          sendData("119");
          this.state19 = 1;
        }else if(this.state19 === false){
          sendData("219");
          this.state19 = null;
        }
        if(this.state20 === true){
          sendData("120");
          this.state20 = 1;
        }else if(this.state20 === false){
          sendData("220");
          this.state20 = null;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .download{
    background: url("./../assets/download.png") no-repeat;
    background-size: auto 65%;
    background-position: center bottom;
  }
  .folder{
    background: url("./../assets/folder.png") no-repeat;
    background-size: auto 70%;
    background-position: center bottom;
  }
  .file-list{
    display: flex;
    float: left;
    width: 100%;
    /*height: 100px;*/
    margin-top: 10px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .file-list>a{
    float: left;
    display: block;
    width: 130px;
    height: 90px;
    margin: 20px;
    word-wrap: break-word;
    border: 2px solid #368ea6;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    font-size: 14px;
  }

  .file-box>div>button{
    width: 90%;
    height: 30px;
    margin-left: 5%;
    color: white;
    font-size: 14px;
    background-color: #00CF75;
    border: solid 1px #ADADAD;
    border-radius: 5px;
  }
  .file-box>div>input{
    width: 90%;
    height: 200px;
    margin-top: 60px;
    margin-left: 5%;
    opacity: 0;
    cursor: pointer;
  }
  .file-box>div{
    width: 100%;
    height: 100%;
    background-image: url("./../../static/add.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px 50px;
  }
  .file-box{
    float: left;
    width: 90%;
    height:320px;
    margin-top: 50px;
    border: 2px solid #E1E4E8;
    background-color: #FAFBFC;
  }

  .contents{
    float: left;
    width: 40%;
    height: 220px;
    margin: 15px;
    padding-left: 10px;
    background-color: white;
  }
  @media screen and (min-width: 1300px) {
    .contents{
      width: 21%!important;
    }
  }
  .contrl-list{
    float: left;
    width: 100%;
    height: 33px;
    margin-bottom: 5px;
    margin-top: 5px;
    overflow: hidden;
  }
  @media screen and (max-width: 600px) {
    .contrl-text{
      width: 50%!important;
    }
    .left-bar{
      width: 100px!important;
    }
    .contents{
      width: 70%!important;
    }
    .contrl-box{
      margin-left: -20px!important;
    }
    .file-box{
      margin-left: 10%;
    }
    .header-left{
      width: 250px!important;
    }
    .header-left>p{
      width: 135px!important;
    }
    .header-right{
      width: 65px!important;
    }
    .header-right>div{
      margin-left: 0px!important;
    }
  }
  @media screen and (max-width: 333px) {
    .header-left{
      width: 200px!important;
    }
  }
  .contrl-text{
    float: left;
    width: 70%;
    height: 30px;
  }
  .contrl-text>p{
    margin: 0;
    height: 30px;
    width: 100%;
    line-height:30px;
    font-size: 14px;
    color: #43495D;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .contrl-list>label{
    float: right;
    margin-right: 2%;
    cursor: pointer;
  }
  .contrl-box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    float: left;
    margin-top: 60px;
  }
  .content{
    margin-left: 140px;
  }

  .hello{
    display: none;
    position: absolute;
    z-index: 2;
    width:100%;
    background-color: #F2F2F2;
  }
  .reserve-block{
    width: 100%;
    height: 100%;
  }
  .header{
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #11CD6E;
    z-index: 2;
  }
  .header-left{
    float: left;
    width: 300px;
    height: 60px;
  }
  .header-left>img{
    float: left;
    width: 20px;
    height: 15px;
    margin: 20px;
  }
  .header-left>p{
    margin: -3px;
    float: left;
    width: 200px;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 16px;
  }
  .header-right{
    float: right;
    width: 100px;
    height: 60px;
  }
  .header-right>div{
    float: right;
    width: 62px;
    height: 25px;
    margin: 18px;
    border: outset 1px #666;
    background-color: #368EA6;
    border-radius: 5px;
    cursor: pointer;
  }
  .header-right>div>p{
    margin: 0;
    width: 62px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-size: 10px;
    color: white;
  }

  .left-bar{
    position: fixed;
    height: 100%;
    width: 140px;
    background-color: #43495C;
  }
  .bar-user{
    float: left;
    width: 100%;
    margin-top: 60px;
  }
  .bar-user>img{
    float: left;
    width: 50%;
    margin-left: 25%;
    margin-top: 20px;
    border-radius: 100%;
  }
  .bar-user>div{
    float: left;
    width: 100%;
    height: 40px;
  }
  .bar-user>div>p{
    cursor: pointer;
    margin: 0;
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 16px;
  }
  .bar-list{
    float: left;
    width: 100%;
    margin-top: 20px;
  }
  .lists{
    float: left;
    width: 100%;
    height: 50px;
  }
  .lists>p{
    width: 90%;
    height: 50px;
    margin-top: 0;
    margin-left: 5%;
    font-size: 13px;
    color: white;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .lists>p:hover{
    animation:colorChange .3s;
    animation-fill-mode:forwards;
    border-radius: 5px;
  }
  @keyframes colorChange {
    to {background: #00bfff;}
  }

  .mui-switch {
    width: 52px;
    height: 31px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none; }
  .mui-switch:before {
    content: '';
    width: 29px;
    height: 29px;
    position: absolute;
    top: 0px;
    left: 0;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }
  .mui-switch:checked {
    border-color: #64bd63;
    box-shadow: #64bd63 0 0 0 16px inset;
    background-color: #64bd63; }
  .mui-switch:checked:before {
    left: 21px; }
  .mui-switch.mui-switch-anim {
    transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s; }
  .mui-switch.mui-switch-anim:before {
    transition: left 0.3s; }
  .mui-switch.mui-switch-anim:checked {
    box-shadow: #64bd63 0 0 0 16px inset;
    background-color: #64bd63;
    transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s; }
  .mui-switch.mui-switch-anim:checked:before {
    transition: left 0.3s; }
</style>
