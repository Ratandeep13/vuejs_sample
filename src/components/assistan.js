import dataPage from '/Users/makarajuyashwanthvarma/Desktop/vuetrain/my-project/src/components/dataPage.js'
import {
  mapGetters
} from 'vuex'
export default {
  // key1: 'vale1',
  // key2: 'vale1',
  name: 'AssistantComponent',
  props: ['pageNames'],
  data() {
    return {
      counter: 1,
      // limiter:1,
      nextFlag: true,
      multiFlag: false,
      showImage: false,
      key1: 'abc',
      pageData: dataPage,
    }
  },

  methods: {
    imageDisplay() {
      // debugger
      this.showImage = true
    },
    buttonDisplay() {
      this.showImage = false
    },

    paraChangerNext() {
      console.log("out=", this.counter)
      console.log("outLimiter", this.limiter)
      if (this.limiter > this.counter + 1 && this.limiter <= 2) {
        this.counter += 1;
        console.log(this.counter);
      } else if (this.limiter > 2 && this.limiter > this.counter + 1) {
        this.counter += 1;
        this.nextFlag = true;
        this.multiFlag = true;
      } else {
        this.counter += 1;
        this.nextFlag = false;
      }
    },
    paraChangerBack() {
      if (this.counter > 0) {
        this.counter -= 1;
        this.nextFlag = true;
        if (this.counter == 1) {
          this.multiFlag = false;
        }
        console.log(this.counter);
      }
    },
  },
  computed: {
    ...mapGetters(['pageName']),
    limiter: function () {
      if (!this.pageNames) {
        return 0
      }
      return Object.keys(this.pageData.dummyKey[this.pageNames]).length
    }
  },
};
