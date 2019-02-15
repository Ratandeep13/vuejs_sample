<template>
  <div id="main">
    <div class="header">
      <a href="#" class="logo">
        <img
          id="imgid"
          src="https://image4.owler.com/logo/blibli_owler_20171128_092726_original.png"
        >
      </a>
      <!-- <p>{{pageHeaders}}</p> -->
      <a class="logo">
        {{pageHeaders.titleLogo}}
        <!-- {{pageHeader}} -->
        <br>
        <span class="subtitle">
          {{pageHeaders.subTitle}}
          <!-- {{pageSubtitle}} -->
        </span>
      </a>
      <div class="header-right">
        <ul>
          <a href="#home">
            <li class="active">Home</li>
          </a>
          <a href="#">
            <li href="#contact">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  //width: 100%;
  .logo {
    font-weight: 400;
    font-size: 22px;
    display: inline-block;
    float: left;
    #imgid {
      width: 130px;
      padding-right: 30px;
      padding-left: 30px;
    }
  }
  .subtitle {
    font-size: 14px;
    float: left;
    color: #004ab3;
    font-weight: 500;
  }
  .header-right {
    display: inline-block;
    float: right;
    li {
      font-size: 16px;
      font-weight: 300;
      display: inline-block;
      padding: 12px 12px;
    }
    &:hover {
      color: red;
    }
  }
}
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['pageHeaders'],
  data () {
    return {
      // titleLogo: "Merchant Tool Application",
      // subTitle: "CNC Tutup Delay Shipping"
    }
  },
  computed: {
    ...mapGetters(['pageHeader', 'pageSubtitle'])
  }
}
</script>
