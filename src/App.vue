<template>
  <div id="app">
    <v-ons-navigator swipeable swipe-target-width="200px"
      :page-stack="pageStack"
      :pop-page="goBack"
    ></v-ons-navigator>
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      pageStack: []
    }
  },

  methods: {
    /* Override default pop behavior and delegate it to the router */
    goBack() {
      // Go to the parent route component
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });

      // this.$router.go(-1); // Could work but might be misleading in some situations
    }
  },

  created() {
    /* Define how routes should be mapped to the page stack.
     * This assumes all the routes contain VOnsPage components
     * and are provided in the 'default' view.
     * For nested named routes or routes that for some reason
     * should not be mapped in VOnsNavigator, filter them out here.
     */
    const mapRouteStack = route => this.pageStack = route.matched.map(m => m.components.default);

    /* Set initial pageStack depending on current
     * route instead of always pushing 'Home' page
     */
    mapRouteStack(this.$route);

    /* On route change, reset the pageStack to the next route */
    this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());
  }
}
</script>
