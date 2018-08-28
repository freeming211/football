<template>
    <div class="auto-x">
        <div class="countryBox" ref="countryList">
            <div class="countryBox-list" v-for="(item,index) in countryList">
                <span :class="{'order-active':index==orderNum}" @click="onAddClass(index)">
                    {{item.label}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { getRaceType } from "@/api/race";
export default {
  data() {
    return {
      countryList: [],
      orderNum: 0
    };
  },
  methods: {
    InitWidth() {
      let width = 0;
    },
    _getRaceType() {
      getRaceType().then(res => {
        this.countryList = res.data;
        this.$nextTick(() => {
          let num = this.countryList.length;
          this.$refs.countryList.style.width = 60 * num + "px";
        });
      });
    },
    onAddClass(i) {
      this.orderNum = i;
    }
  },
  created() {
    this._getRaceType();
  },
  components: {
    
  }
};
</script>

<style scoped>
.auto-x {
  width: 100%;
  overflow-x: auto;
}
.countryBox {
  width: 100%;
  display: flex;
  flex-flow: row;
  background: #ffffff;
}
.countryBox-list {
  width: 60px;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
}
.order-active {
  padding-bottom: 3px;
  color: green;
  border-bottom: 2px solid green;
} 
</style>