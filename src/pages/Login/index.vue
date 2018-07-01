<template>
  <div class="login">
    <div id="frame" class="ax_default_box_1">
      <img id="frame_img" class="img " src="@/assets/login_page/frame.png" alt="frame">
      <div id="circle" class="ax_default ellipse">
        <img id="circle_img" class="img " src="@/assets/login_page/circle.png" alt="circle">
        <img id="avatar_img" class="img " src="@/assets/login_page/login_avatar.png" alt="circle">
      </div>
      <div id="input_list" class="input">
          <input class="input username" type="text" name="username" v-model="phoneNumber" placeholder="用户名/邮箱/手机号">
          <input class="input password" type="password" name="password" v-model="password" placeholder="密码">
          <input id="login" class="btn " type="submit" v-on:click="login" value="登陆">
      </div>
      <router-link id="register" to="/signup" >立即注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
/* eslint-disable */
  data () {
    return {
      phoneNumber: '',
      password: ''
    };
  },
  methods: {
    async login (event) {
      event.preventDefault();
      const { phoneNumber, password } = this;
      const {data} = await this.$http.post('/login', {// eslint-disable-next-line
        phone_number: phoneNumber,
        password
      });
<<<<<<< HEAD
      if (data.result !== 'ok') {
        alert(data.result);
        return;
      }
      console.log(data);
=======
>>>>>>> db806122252c47dfb29c9baebfb532d4ba27cbf0
      localStorage.setItem('token', data.authorization);
      this.$root.token = data.authorization;
      this.$root.phone_number=data.phone_number;
      this.$root.ifLogin=true;
      this.$router.replace('/');
    }
  }
};
</script>
<style scoped>
#frame{
  position: absolute;
  left: 35%;
  top: 20%;
}
#circle{
  position: absolute;
    left: 44%;
    top: 8%;
}
#avatar_img{
  position: absolute;
  left: 27%;
  top: 25%;
}
#input_list{
  position: absolute;
    left: 41%;
    top: 39%;
}
#input{
  position: absolute;
}
.btn{
  outline: none;
    border-width: 1px;
    position: absolute;
    left: -3%;
    top: 330%;
    width: 140px;
    height: 40px;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    color: #E87C78;
    background-color: white;
    border-color: #E87C78;
    text-align: center;
    line-height: normal;
    border-radius: 9px;
    border-style: solid;
}
.btn:hover{
  color:white;
  border:none;
  background-color: #E87C78
}

#register{
  position: absolute;
    left: 396px;
    top: 293px;
    color: #E87C78
}
.input{
  position: absolute;
    left: -28%;
    top: 0px;
    width: 253px;
    height: 41px;
    font-family: 'ArialMT', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    text-decoration: none;
    color: #000000;
    text-align: left;
}
.password{
  top:130%;
}
</style>
