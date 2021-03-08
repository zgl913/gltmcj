<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <div>
          <ul>
            <div class="oneline">
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：2<br>
                  相机异常：2
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：3<br>
                  相机异常：3
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：4<br>
                  相机异常：4
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：5<br>
                  相机异常：5
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：6<br>
                  相机异常：6
                </div>
                杭州领克旗舰店
              </li>
            </div>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <ul>
            <div class="oneline">
              <li>
                <div>
                  屏幕异常：7<br>
                  相机异常：7
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：8<br>
                  相机异常：8
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：9<br>
                  相机异常：9
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：10<br>
                  相机异常：10
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：11<br>
                  相机异常：11
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：12<br>
                  相机异常：12
                </div>
                杭州领克旗舰店
              </li>
            </div>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <ul>
            <div class="oneline">
              <li>
                <div>
                  屏幕异常：13<br>
                  相机异常：13
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：14<br>
                  相机异常：14
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：15<br>
                  相机异常：15
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：16<br>
                  相机异常：16
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：17<br>
                  相机异常：17
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：18<br>
                  相机异常：18
                </div>
                杭州领克旗舰店
              </li>
            </div>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <ul>
            <div class="oneline">
              <li>
                <div>
                  屏幕异常：19<br>
                  相机异常：19
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：20<br>
                  相机异常：20
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：21<br>
                  相机异常：21
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：22<br>
                  相机异常：22
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：23<br>
                  相机异常：23
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：24<br>
                  相机异常：24
                </div>
                杭州领克旗舰店
              </li>
            </div>
          </ul>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
<!--      <div class="swiper-pagination"  slot="pagination"></div>-->
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
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style>
  .oneline li {
    list-style: none;

  }
  .oneline li div {
    border-radius: 10px;
    background-color: #2d8cf0;
    color:white;
  }
  .oneline {
    display: flex;
    justify-content: space-around;
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