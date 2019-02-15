<template>
  <div>
    <div class="MTA-Assistant" v-if="showImage">
      <div class="parent">
        <div class="parentImg">
          <div>
            <img id="assistantimg" src="../assets/marcia.svg.png">
          </div>
          <div class="outerCross">
            <button id="cross" class="top-right" @click="buttonDisplay">
              <span class="btnspan">x</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button id="btnid" :class="['btn', {'ani': !showImage}, {'ani1': showImage}]" @click="imageDisplay">Need Assistance?</button>
    <div id="rectangle" class="rectangle" v-if="showImage">
      <div class="msg">
        <div class="pointer"></div>
        <div class="innermsg">
          <p class="paragraph">{{pageData.dummyKey[pageNames]['para' + counter]}}</p>
          <div class="lowerdiv">
            <div class="pagination">
              <span>{{counter}}/{{limiter}}</span>
            </div>
            <div class="backnext">
              <span class="back" @click="paraChangerBack" v-if="!nextFlag&&!multiFlag">Back</span>
              <span class="back" @click="paraChangerBack" v-if="multiFlag">Back</span>
              <span class="next" v-if="nextFlag" @click="paraChangerNext">Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.MTA-Assistant {
  position: relative;
  .parent {
    .parentImg {
      position: absolute;
      width: 112px;
      height: 134px;
      top: 390px;
      left: 50px;
      animation-name: imageAni;
      animation-duration: 500ms;
      animation-fill-mode: forwards;
      @keyframes imageAni {
        100% {
          left: 50px;
          top: 380px;
        }
      }
      #assistantimg {
        width: 112px;
        height: 134px;
      }
    }
    .outerCross {
      position: absolute;
      top: 0px;
      left: 100px;
      .top-right {
        position: relative;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        text-align: center;
        background-color: gray;
        color: white;
        font-size: 8px;
        font-weight: 800;
        .btnspan {
          position: absolute;
          top: 1px;
          right: 0px;
          left: 0px;
          cursor: pointer;
        }
      }
    }
  }
}
.rectangle {
  position: absolute;
  max-width: 285px;
  border-radius: 2px;
  background-image: linear-gradient(283deg, #00c7ee, var(--cerulean));
  background-color: transparent;
  left: 179px;
  top: 390px;
  visibility: hidden;
  animation-name: rectAni;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @keyframes rectAni {
    15% {
      visibility: hidden;
    }
    100% {
      left: 179px;
      top: 360px;
      visibility: visible;
    }
  }
  .msg {
    display: flex;
    justify-content: space-between;
    .pointer {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1rem 1rem 0 0;
      border-color: transparent #00c7ee transparent transparent;
      background-color: white;
      margin: auto 0;
    }
    .innermsg {
      background-color: #00c7ee;
      font-family: Lato;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: left;
      padding: 10px 9px 0px 10px;
      // background-color: linear-gradient(283deg, #375868, var(--cerulean));
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.07), 0 2px 8px 0 rgba(0, 0, 0, 0.07);
      color: white;
      .paragraph {
        padding-bottom: 0px;
        width: 266px;
        font-family: Lato;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: var(--white);
      }
      .lowerdiv {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        .pagination {
          width: 19px;
          height: 15px;
          font-family: Lato;
          font-size: 12px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--white);
        }
        .backnext {
          height: 15px;
          font-family: Lato;
          font-size: 12px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--white);
        }
      }
      .next {
        padding: 0px 10px 0px 10px;
        cursor: pointer;
      }
      .back {
        padding: 0px 0px 0px 0px;
        cursor: pointer;
      }
    }
  }
}
.btn {
  position: fixed;
  bottom: 30%;
  left: -200px;
  width: 15%;
  padding: 8px;
  border-radius: 0px 40px 40px 0px;
  outline: 0;
  background-color: rgb(0, 179, 230);
  color: white;
  font-weight: 800;
  cursor: pointer;
  &.ani {
    animation-name: buttonAni;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  &.ani1 {
    animation-name: buttonAni1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  @keyframes buttonAni {
    100% {
      left: 0px;
      bottom: 30%;
    }
  }
  @keyframes buttonAni1 {
    0% {
      left: 0px;
      bottom: 30%;
    }
  }
}
</style>
<script type="text/javascript" src="./assistan.js"></script>
