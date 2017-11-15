<template>
  <div class="all" v-show="ok">
    <div class="back-pic"></div>
    <div class="back">
      <div class="loginBox">
        <div class="login-head">
          <p>SIGN IN NOW</p>
        </div>
        <div class="login-content">
          <input id="username" type="text" v-model="username" placeholder="Username"></input>
          <input id="password" type="password" v-model="password" placeholder="Password"></input>
          <button id="login-btn"  v-on:click="go()"><p>SIGN IN</p></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
        ok: true,
//        ok: false
      }
    },

    methods: {
      go: function () {
//        console.log(this);
        let that = this;
        $.ajax({
          url: 'http://localhost:4567/login',
//          url: 'http://www.tjoe18.cn:4567/login',
          dataType: "jsonp",
          data: {
            username: that.username,
            password: that.password
          },
          success: function (data) {
//            console.log(data);
            if(data.error == false){
              document.getElementsByClassName('hello')[0].style.display="block";
              that.ok = false;
              that.$store.dispatch('sendUsername', that.username);
            }else{
              alert("上线失败");
            }
          }
        });
      },
    },
  }
</script>

<style scoped>
  .all{
    /*display: none;*/
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
  .back-pic{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url("./../assets/login.jpg");
    background-size: auto 100%;
    background-position: center;
  }
  .back{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
  }
  .loginBox{
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    margin-top: -150px;
  }
  .login-head{
    margin-top: -20px;
    width: 300px;
    height: 70px;
    background-color: #11CD6E;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .login-head>p{
    width: 100%;
    height: 70px;
    text-align: center;
    line-height: 70px;
    color: white;
  }
  .login-content{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 200px;
  }
  .login-content>input{
    text-indent: 10px;
    width:250px;
    height:30px;
    font-size: 13px;
    border: ridge 1px #C1B9B9;
    border-radius: 3px;
  }
  .login-content>button{
    width:250px;
    height:35px;
    background-color: #11CD6E;
    border: outset 1px #F1F1F1;
    border-radius: 5px;
  }
  .login-content>button>p{
    margin:0;
    height: 26px;
    text-align: center;
    line-height:26px;
    font-size: 13px;
    color: white;
  }
</style>
