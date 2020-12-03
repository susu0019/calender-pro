<template>
    <div 
    class="nav-item"
    :data-index="index"
    >
      {{item}}
    </div>
</template>

<script>
export default {
    name: 'bar',
    props: {
        item: String,
        curIdx: Number,
        index: Number
    },
    setup (props, { emit }) {
       const navClick = (index) =>{
           emit('navClick', index)
       }
       return {
           navClick
       }
    }
}
</script>

<style lang="scss" scoped>
  .nav-item {
    width: .8rem;
    height: 100%;
    font-size: .14rem;
    line-height: .38rem;
    text-align: center;
    color: #666;
    float: left;

    &.nav-current {
      color: #DB7093;
      font-weight: bold;
    }
  }
</style>