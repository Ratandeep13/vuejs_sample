<template>
  <div>
    <HeaderComponent v-bind:pageHeaders="pageHeaders"></HeaderComponent>
    <!-- <SearchComponent></SearchComponent> -->
    <!-- <FooterComponent></FooterComponent> -->
    <!-- <AssistantComponent v-bind:pageNames="pageNames"></AssistantComponent> -->
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent'
import SearchComponent from '@/components/SearchComponent'
import AssistantComponent from '@/components/AssistantComponent'
import FooterComponent from '@/components/FooterComponent'
export default {
  name: 'Homepage',
  components: {
    HeaderComponent,
    SearchComponent,
    AssistantComponent,
    FooterComponent
  },
  data () {
    return {
      pageHeaders: {
        titleLogo: 'Merchant Tool Application',
        subTitle: 'CNC Tutup Delay Shipping'
      },
      pagesName: 'page1'
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
