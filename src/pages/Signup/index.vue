<template>
  <div class="login">
    <div id="frame" class="ax_default_box_1">
      <img id="frame_img" class="img " src="@/assets/login_page/frame.png" alt="frame">
      <div id="circle" class="ax_default ellipse">
        <img id="circle_img" class="img " src="@/assets/login_page/circle.png" alt="circle">
        <img id="avatar_img" class="img " src="@/assets/login_page/login_avatar.png" alt="circle">
      </div>
      <div id="input_list" class="input">
<<<<<<< HEAD
          <input class="input cellphone" type="text" name="cellphone" v-model="phone_number" placeholder="手机号">
          <input class="input username" type="text" name="username" v-model="nickname" placeholder="用户名">
          <input class="input password" type="password" name="password" v-model="password" placeholder="密码">
          <input class="input confirmedPassword" type="password" v-model="confirmedPassword" name="confirmedPassword" placeholder="确认密码">
          <!-- <input class="input confirmNumber" type="number" name="confirmedNumber" placeholder="验证码"> -->
          <input id="register" class="btn " type="submit" v-on:click="register" value="注册">
      </div>
      <!-- <button id="confirmNumberBtn" class="btn ">获取验证码</button> -->
=======
          <input class="input cellphone" type="text" name="cellphone" placeholder="手机号" v-model="phoneNumber">
          <input class="input username" type="text" name="username" placeholder="用户名" v-model="nickname">
          <input class="input password" type="password" name="password" placeholder="密码" v-model="password">
          <input class="input confirmedPassword" type="password" name="confirmedPassword" placeholder="确认密码">
          <input id="register" class="btn " type="submit" value="注册" @click="regist">
      </div>
>>>>>>> db806122252c47dfb29c9baebfb532d4ba27cbf0
      <router-link id="login" to="/login">立即登陆</router-link>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
// import axios from '../axios';
export default {
  data () {
    return {
      'phone_number': null,
      'password': null,
      'nickname': null,
      'sex': 'male',
      'birth': '1996-10-05',
      'confirmedPassword': null
    };
  },
  methods: {
    async register (event) {
    //  event.preventDefault();
      const {phone_number, password, nickname, sex, birth } = this;
      if (this.password == null) {
        alert('密码不能为空');
        return;
      } else if (this.confirmedPassword !== this.password) {
        alert('密码不匹配');
        return;
      } else if (this.nickname == null) {
        alert('户名不能为空');
        return;
      } else if (this.phone_number == null) {
        alert('手机号不能为空');
        return;
      }
      try {
        // const {data} = await axios.post('/logup', {// eslint-disable-next-line
        const {data} = await this.$http.post('/logup', {// eslint-disable-next-line
          phone_number,
          password,
          nickname,
          sex,
          birth
        });
        if (data.result !== 'ok') {
          alert(data.result);
          return;
        }
        
      } catch (err) {
        console.log(err);
      }
=======
export default {
  data () {
    return {
      phoneNumber: '',
      nickname: '',
      password: ''
    };
  },
  methods: {
    async regist () {
      const {phoneNumber, nickname, password} = this;
      await this.$http.post('/logup', {
        phone_number: phoneNumber,
        nickname,
        password,
        sex: '女装大佬',
        birth: '2000-04-12'
      });
>>>>>>> db806122252c47dfb29c9baebfb532d4ba27cbf0
      this.$router.replace('/login');
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  top:100px;
}

#frame_img{
  height: 500px;
  width:500px;
}
#frame{
  position: absolute;
  left: 36.5%;
  top: 20%;
}
#circle{
  position: absolute;
  left: 42%;
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
    border: none;
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
  outline: none;
  border:none;
  background-color: #E87C78
}

#login{
  position: absolute;
    left: 396px;
    top: 86%;
    color: #E87C78
}
.cellphone{
    top: -126%;
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
#register{
    position: relative;
    top: 550%;
}
.confirmedPassword{
    top: 260%;
}
.confirmNumber{
    top: 390%;
}
.cellphone{
  top:-53px;
}
#confirmNumberBtn{
    position: absolute;
    left: 63%;
    top: 70.6%;
    width: 73px;
}
</style>
