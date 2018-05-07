<template>
  <div class="button pointer" :class="{small: small, inactive: inactive}" @click="onClick">
    <slot>{{inactive? '查看详情' : '购票'}}</slot>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('process-click');
    }
  }
};
</script>

<style scoped>
.button {
  height: 40px;
  width: 140px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #E87C78;
  border-radius: 5px;
  color: #E87C78;
}

.button:hover {
  background-color: #E87C78;
  color: #fff;
}

.inactive {
  border: 1px solid #999;
  color: #999;
}

.inactive:hover {
  background-color: #999;
}

.small {
  width: 80px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
}
</style>
