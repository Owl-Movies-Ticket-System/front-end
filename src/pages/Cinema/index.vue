<template>
    <div class="cinema">
        <div class="area">
            <span>区域：</span>
            <button class="btn" v-on:click="chooseArea">番禺区</button>
            <button class="btn">天河区</button>
            <button class="btn">黄浦区</button>
            <button class="btn">白云区</button>
            <button class="btn">荔湾区</button>
            <button class="btn">花都区</button>
            <button class="btn">南沙区</button>
        </div>
        <div class="cinema-list">
            <ul class="cinemas flex-container">
                <cinema-item v-for="(item,index) in cinema_list" :key="index"
                :imgSrc="item.src"
                :active="true"
                :title="item.title"
                :location="item.location"
                v-show="true">
                </cinema-item>
            </ul>
        </div>
    </div>
</template>

<script>
import CinemaItem from '@/components/CinemaItem';
export default {
  components: {
    CinemaItem
  },
  data () {
    return {
      cinema_list: [
        {
          src: require('@/assets/cinema_page/dadi.jpg'),
          title: '金逸影城IMAX（光美番禺沙湾店）',
          location: '地址： 番禺区沙湾镇西环路1502号荔园新天地3楼'
        },
        {
          src: require('@/assets/cinema_page/fanyang.jpeg'),
          title: '大地影院-番禺大石店',
          location: '地址： 番禺区大石朝阳西路29号大石城5楼'
        },
        {
          src: require('@/assets/cinema_page/jinyi.jpeg'),
          title: '金逸影城IMAX（天河店）',
          location: '地址： 天河区正佳广场6楼'
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.area{
  width:1000px;
  height:200px;
  left:100px;
  top:30px;
  border-width: 1px;
  border-color:darkgray;
  font-family: 'PingFangSC-Regular', 'PingFang SC';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  position: relative;
}
.btn{
    outline: none;
    border-width: 1px;
    width: 130px;
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
.cinemas{
  position: relative;
  top: 60px;
  padding: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
