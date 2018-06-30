<template>
    <div class="cinema">
        <div class="area">
            <span>区域：</span>
            <button class="btn" v-on:click="chooseArea">番禺区</button>
            <button class="btn" v-on:click="chooseArea">天河区</button>
            <button class="btn" v-on:click="chooseArea">黄浦区</button>
            <button class="btn" v-on:click="chooseArea">白云区</button>
            <button class="btn" v-on:click="chooseArea">荔湾区</button>
            <button class="btn" v-on:click="chooseArea">花都区</button>
            <button class="btn" v-on:click="chooseArea">南沙区</button>
        </div>
        <div class="cinema-list">
            <ul class="cinemas flex-container">
                <cinema-item v-for="(item,index) in currentCinemaList" :key="index"
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
      ],
      currentCinemaList: [
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
        },
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
    async chooseArea (event) {
      var areaName = event.target.innerText;
      areaName= areaName.substring(0,2);
      console.log(areaName);
      this.currentCinemaList = [];
      // this.currentCinemaList = this.cinema_list.filter(
      //   function (item) {
      //     return item.location.match(areaName);
      //   }
      // );
      var englishName = this.switchName(areaName);
      console.log(englishName);
      const {data} = await this.$http.post('cinema/search',{
          'district': areaName
        }, {
          headers: {
            author: this.$root.token
          }
      });
      console.log({data});
      // for (var x=0;x<data.length;x++){
      //   var movie=data[x];
      //   this.currentCinemaList.push({
      //     src: 'http://123.207.55.27:8080/api/img?img='+movie['photo'],
      //     name: movie['name']
      //   })
      // }

    },
    switchName (chineseName){
      if (chineseName == '番禺区') {
        return 'PanYu District';
      } else if (chineseName == '天河区') {
        return 'PanYu District';
      } else if (chineseName == '黄埔区') {
        return 'HuangPu District';
      } else if (chineseName == '白云区') {
        return 'BaiYun District';
      } else if (chineseName == '荔湾区') {
        return 'LiWan District';
      } else if (chineseName == '花都区') {
        return 'HuaDu District';
      } else if (chineseName == '南沙区') {
        return 'NanSha District';
      }
    }
  }
}
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
.cinema-list{
  position: relative;
}
ul{
  display: flex;
  flex-wrap: wrap;
}
cinema-item{
  float: left;
  margin:10px;
  position: relative;
  padding: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
