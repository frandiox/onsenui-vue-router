<template>
  <div id="app">
    <v-ons-navigator swipeable swipe-target-width="200px"
      :page-stack="pageStack"
      :pop-page="goBack"
    ></v-ons-navigator>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',

  data() {
    return {}
  },

  computed: {
    ...mapGetters('navigator', [
      'pageStack'
    ])
  },

  methods: {
    /* Override default pop behavior and delegate it to the router */
    goBack() {
      // Go to the parent route component
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });

      // this.$router.go(-1); // Could work but might be misleading in some situations
    }
  }
}
</script>
