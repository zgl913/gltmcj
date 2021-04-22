<template>
  <div>
    <div style="position: absolute;left:0px;top:0px;">
      <Input placeholder="请输入服务站" style="width: 50%"/>
      <Button style="margin: 0 10px">查询</Button>
      <div style="display: inline-block">查看全部</div>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;margin-top: 5%;">
        <div v-for="(item,index) in shuju" :key="index"  style="width: 20%;margin-left: 7%;">
          <div class="sjanys">
            屏幕异常：{{item.pmyc}}<br>
            相机异常：{{item.xjyc}}
          </div>
          杭州领克旗舰店
        </div>
      </swiper-slide>
      <swiper-slide style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;margin-top: 5%;">
        <div v-for="(item,index) in shuju" :key="index"  style="width: 20%;margin-left: 7%;">
          <div class="sjanys">
            屏幕异常：{{item.pmyc}}<br>
            相机异常：{{item.xjyc}}
          </div>
          杭州领克旗舰店
        </div>
      </swiper-slide>
      <swiper-slide style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;margin-top: 5%;">
        <div v-for="(item,index) in shuju" :key="index"  style="width: 20%;margin-left: 7%;">
          <div class="sjanys">
            屏幕异常：{{item.pmyc}}<br>
            相机异常：{{item.xjyc}}
          </div>
          杭州领克旗舰店
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
<!--      <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shuju:[
        {
          pmyc:'1',
          xjyc:'1'
        },
        {
          pmyc:'2',
          xjyc:'2'
        },
        {
          pmyc:'3',
          xjyc:'3'
        },
        {
          pmyc:'4',
          xjyc:'4'
        },
        {
          pmyc:'5',
          xjyc:'5'
        },
        {
          pmyc:'6',
          xjyc:'6'
        }
      ],
      // lunbo:[
      //   {
      //     pmyc:'1',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'2',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'3',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'4',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'5',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'6',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'7',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'8',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'9',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'10',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'11',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      //   {
      //     pmyc:'12',
      //     xjyc:'11',
      //     dianming:'杭州旗舰店'
      //   },
      // ],
      lbzs: '',
      callback:'',
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        autoplay: true,
        slidesPerView: "auto",
        initialSlide :0,
        observer:true,
        observeParents:true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style>
  .sjanys {
    border-radius: 10px;
    background-color: #2d8cf0;
    color:white;
  }
  /*.oneline li {*/
  /*  list-style: none;*/

  /*}*/
  /*.oneline{*/
  /*  border-radius: 10px;*/
  /*  background-color: #2d8cf0;*/
  /*  color:white;*/
  /*}*/
  /*.oneline {*/
  /*  display: flex;*/
  /*  justify-content: space-around;*/
  /*}*/
  .oneline li {
    list-style: none;

  }
  .oneline1 li {
    list-style: none;

  }
  .oneline li div {
    border-radius: 10px;
    background-color: #2d8cf0;
    color:white;
  }
  .oneline1 li div {
    border-radius: 10px;
    background-color: #2d8cf0;
    color:white;
  }
  .oneline {
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
  }
  .oneline1 {
    display: flex;
    justify-content: space-around;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    /*right: 5%;*/
    left: auto;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 8%;
    right: auto;
  }
</style>



<!--<template>-->
<!--  <div>-->
<!--    <swiper ref="mySwiper" :options="swiperOption" @someSwiperEvent="callback">-->
<!--      <swiper-slide>Slide 1</swiper-slide>-->
<!--      <swiper-slide>Slide 2</swiper-slide>-->
<!--      <swiper-slide>Slide 3</swiper-slide>-->
<!--      <swiper-slide>Slide 4</swiper-slide>-->
<!--      <swiper-slide>Slide 5</swiper-slide>-->
<!--      <swiper-slide>I'm Slide 2</swiper-slide>-->
<!--      <swiper-slide>I'm Slide 3</swiper-slide>-->
<!--      <swiper-slide>I'm Slide 4</swiper-slide>-->
<!--      <swiper-slide>I'm Slide 5</swiper-slide>-->
<!--      <swiper-slide>I'm Slide 6</swiper-slide>-->
<!--      <swiper-slide>I'm Slide 7</swiper-slide>-->
<!--      <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--      <div class="swiper-button-next" slot="button-next"></div>-->
<!--    </swiper>-->
<!--    &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--&lt;!&ndash;    <div class="swiper-pagination"></div>&ndash;&gt;-->
<!--    &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->

<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      swiperOption: {-->
<!--        // some swiper options/callbacks-->
<!--        // 所有的参数同 swiper 官方 api 参数-->
<!--        // ...-->
<!--        slidesPerView: "auto",-->
<!--        loop: true,-->
<!--        pagination: {-->
<!--          el: '.swiper-pagination'-->
<!--        },-->
<!--        // Some Swiper option/callback...-->
<!--        // 如果需要前进后退按钮-->
<!--        navigation: {-->
<!--          nextEl: '.swiper-button-next',-->
<!--          prevEl: '.swiper-button-prev',-->
<!--        },-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    swiper() {-->
<!--      return this.$refs.mySwiper.swiper-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    // current swiper instance-->
<!--    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了-->
<!--    console.log('this is current swiper instance object', this.swiper)-->
<!--    this.swiper.slideTo(3, 1000, false)-->
<!--  }-->
<!--}-->
<!--</script>-->