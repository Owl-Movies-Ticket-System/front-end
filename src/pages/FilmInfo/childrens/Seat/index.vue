<template>
  <div class="seat-area flex-container">
    <div class="seat-graph">
      <div class="screen">大屏幕</div>
      <div class="seats">
        <div class="seats-row flex-container" v-for="(_, rowIndex) in Array(row)" :key="`row${rowIndex}`">
          <img
            v-for="(__, colIndex) in Array(column)"
            :key="`${rowIndex}_${colIndex}`"
            :src="seatIndex[0] === rowIndex && seatIndex[1] === colIndex? seatActive : seat"
            class="seat-img pointer"
            @click.stop="chooseSeat(rowIndex, colIndex)"/>
        </div>
      </div>
    </div>
    <div class="seat-info">
      <h1 class="seat-info-header">座位信息</h1>
      <div class="seat-detail block-center">
        <div class="seat-detail-item flex-container">
          <div class="seat-detail-item-header">场次</div>
          <div class="seat-detail-item-content">{{time}}</div>
        </div>
        <div class="seat-detail-item flex-container">
          <div class="seat-detail-item-header">座位排数</div>
          <div class="seat-detail-item-content">{{row}}排</div>
        </div>
        <div class="seat-detail-item flex-container">
          <div class="seat-detail-item-header">座位列数</div>
          <div class="seat-detail-item-content">{{column}}列</div>
        </div>
      </div>
      <div class=" block-center buy-ticket-button pointer" @click="buyTicket">买票</div>
      <div class="tips block-center">
        购票须知：
        <ul>
          <li v-for="(item, index) in Array(4)" :key="index" class="tip-item">{{index + 1}}.xxxxxxxx</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import seat from '@/assets/seat.png';
import seatActive from '@/assets/seat_active.png';

export default {
  created () {
    this.time = this.$route.query.time;
  },
  data () {
    return {
      row: 6,
      column: 8,
      seat,
      seatActive,
      seatIndex: [-1, -1]
    };
  },
  methods: {
    chooseSeat (row, col) {
      const seatIndex = this.seatIndex;
      if (seatIndex[0] === row && seatIndex[1] === col) {
        seatIndex.splice(0, 1, -1);
        seatIndex.splice(1, 1, -1);
        return;
      }
      seatIndex.splice(0, 1, row);
      seatIndex.splice(1, 1, col);
    },
    buyTicket () {
      //买票
    }
  }
};
</script>

<style scoped>
.seat-area {
  margin: 30px 0;
}

.seat-graph {
  flex: 3;
  margin-right: 10px;
  border: 1px solid #000;
  border-radius: 10px;
}

.screen {
  border: 1px solid #000;
  background-color: #ccc;
  width: 280px;
  height: 65px;
  line-height: 65px;
  text-align: center;
  margin: 30px auto 60px auto;
}

.seats {
  padding: 20px 0 60px;
}

.seats-row {
  justify-content: center;
}

.seat-img {
  width: 50px;
  height: 50px;
}

.seat-info {
  flex: 1;
  border: 1px solid #E87C78;
  border-radius: 10px;
  background-color: rgba(232, 124, 120, 0.55);
  color: #000;
}

.seat-info-header {
  margin: 50px auto 20px auto;
  text-align: center;
}

.seat-detail {
  border: 2px solid #E87C78;
  width: 80%;
}

.seat-detail-item {
  margin: 15px 0;
}

.seat-detail-item-header {
  flex-basis: 80px;
  text-align: center;
}

.buy-ticket-button {
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #E87C78;
  box-shadow: 5px 5px 5px #888888;
  width: 160px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.buy-ticket-button:hover {
  box-shadow: 2px 2px 2px #888888;
}

.tips {
  width: 80%;
  margin-bottom: 100px;
}

.tip-item {
  margin: 10px 0;
}
</style>
