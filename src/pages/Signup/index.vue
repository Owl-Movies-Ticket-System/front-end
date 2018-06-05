<template>
  <div class="login">
    <div id="frame" class="ax_default_box_1">
      <img id="frame_img" class="img " src="@/assets/login_page/frame.png" alt="frame">
      <div id="circle" class="ax_default ellipse">
        <img id="circle_img" class="img " src="@/assets/login_page/circle.png" alt="circle">
        <img id="avatar_img" class="img " src="@/assets/login_page/login_avatar.png" alt="circle">
      </div>
      <div id="input_list" class="input">
          <input class="input cellphone" type="text" name="cellphone" placeholder="手机号">
          <input class="input username" type="text" name="username" placeholder="用户名">
          <input class="input password" type="passeword" name="password" placeholder="密码">
          <input class="input confirmedPassword" type="passeword" name="confirmedPassword" placeholder="确认密码">
          <input class="input confirmNumber" type="number" name="confirmedNumber" placeholder="验证码">
          <input id="register" class="btn " type="submit" value="注册">
      </div>
      <button id="confirmNumberBtn" class="btn ">获取验证码</button>
      <router-link id="login" to="/login">立即登陆</router-link>
    </div>
  </div>
</template>

<style>
#frame_img{
  height: 600px;
  width:500px;
}
#frame{
  position: absolute;
  left: 22%;
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

#login{
  position: absolute;
    left: 396px;
    top: 78%;
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
    top: 65.6%;
    width: 73px;
}
</style>
