<template>
  <div>
    <div class="footer">
      <!-- <p>Footer</p> -->
      <div id="main">
        <div class="support">
          <ul>
            <ul>SUPPORT</ul>
            <a href="#">
              <ul>Information Center</ul>
            </a>
            <a href="#">
              <ul>Tutorial</ul>
            </a>
            <a href="#">
              <ul>User Guide</ul>
            </a>
          </ul>
        </div>

        <div class="support">
          <ul>
            <ul>MERCHANT CARE</ul>
            <ul>021-57977777</ul>
            <a href="#">
              <ul>merchant.care@blibli.com</ul>
            </a>
          </ul>
        </div>
        <div class="support">
          <ul>
            <ul>BLIBLI.COM</ul>
            <a href="#">
              <ul>Shop on Blibli.com</ul>
            </a>
          </ul>
        </div>

        <div class="support">
          <ul>
            <ul>DOWNLOAD BLIBLI SELLER APP</ul>
            <a href="#">
              <ul>
                <img
                  id="play"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                >
              </ul>
            </a>
          </ul>
        </div>
      </div>
      <center>
        <div id="copys" class="support">
          <p>Copyright © 2011-2019 PT. Global Digital Niaga. Powered by Blibli.com. Privacy Policy.</p>
        </div>
      </center>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  position: fixed;
  left: 0;
  bottom: 0%;
  width: 100%;
  background-color: white;
  color: black;
  //text-align: center;
  //border-block-start: green
  border: 1px solid gray;
  //color: #004ab3;
  font-weight: 500;
  a {
    color: #004ab3;
  }
  .support {
    float: left;
    text-align: left;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 13px;
    //position:absolute;
    #play {
      width: 120px;
    }
  }
  #copys {
    border-top: 1px solid #000;
    //padding:0 55px;
    //justify-content: center
    //text-align: center;
    //border-top-width:90;
    //float:none;
  }
}
</style>

<script>
export default {}
</script>
