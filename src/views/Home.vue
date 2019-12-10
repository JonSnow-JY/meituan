<template lang="html">
  <div class="">
    <div class="">
      {{ aliasNum }}
    </div>
    <div class="">
      {{ age }}
    </div>
    <div class="">
      {{ totalNum }}
    </div>
    <div class="">
      <!-- {{ newLongListLen }} -->
      {{ getNameByAge(18) }}
    </div>
    <button class="" @click="addNum(1000)">增加num数据</button>
    <button class="" @click="reduceNum">减少num数据</button>
    <button class="" @click="addAge">增加age数据</button>
    <button class="" @click="reduceAge">减少age数据</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      aliasNum: "num",
      age: state => state.age,
      totalNum(state) {
        return state.age + ":" + state.num;
      }
    }),
    ...mapGetters(["getNameByAge"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(["reduceNum", "reduceAge"]),
    ...mapMutations({
      addNum: "ADD_NUM"
    }),
    ...mapActions({
      addAge: "ADD_AGE"
    })
    // addNum(num) {
    //   // this.$store.commit("addNum", params);
    //   this.$store.commit({
    //     type: "addNum",
    //     num
    //   });
    // }
  },
  watch: {},
  components: {}
};
</script>

<style lang="scss" scoped></style>
