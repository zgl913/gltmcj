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
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
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
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
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
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
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
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
            </div>
            <div class="oneline" style="margin-top: 20px">
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
                </div>
                杭州领克旗舰店
              </li>
              <li>
                <div>
                  屏幕异常：1<br>
                  相机异常：1
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