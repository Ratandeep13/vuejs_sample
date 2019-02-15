<template>
  <div>
    <!-- <HeaderComponent></HeaderComponent> -->
    <!-- <button @click="headers">click</button> -->
    <!-- <p>{{titleHeader}} {{subTitle}}</p> -->
    <!-- <AssistantComponent></AssistantComponent> -->
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import AssistantComponent from '@/components/AssistantComponent'
// import { mapGetters } from 'vuex'
export default {
  name: 'Newhomepage',
  components: {
    HeaderComponent,
    AssistantComponent
  },
  data () {
    return {
      titleHeader: '12355',
      subTitle: '677888',
      pagesName: 'page2'
    }
  },
  mounted () {
    this.headers()
  },
  methods: {
    headers () {
      // debugger
      // this.$store.commit('PAGE_HEADERS', this.titleHeader),
      // this.$store.commit('SUB_TITLE',this.subTitle),
      this.$store.commit('PAGE_NAME', this.pagesName)
    }
  }
}
</script>
