<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{$options.name}}</div>
    </v-ons-toolbar>

    <br>
    <div class="links">
      <router-link :to="{name: 'Home'}">
        Go Home
      </router-link>
      <ol>
        <li>
          <router-link :to="{name: 'Child-1'}">
            Child-1
          </router-link>
          <ol>
            <li>
              <router-link :to="{name: 'Child-1-1'}">
                Child-1-1
              </router-link>
              <ol>
                <li><router-link :to="{name: 'Child-1-1-1'}">
                    Child-1-1-1
                </router-link></li>
              </ol>
            </li>
            <li><router-link :to="{name: 'Child-1-2'}">
                Child-1-2
            </router-link></li>
          </ol>
        </li>
        <li><router-link :to="{name: 'Child-2'}">
          Child-2
          <ol>
            <li><router-link :to="{name: 'Child-2-1'}">
              Child-1-2
            </router-link></li>
          </ol>
        </router-link></li>
      </ol>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: 'TemplatePage'
}
</script>

<style>
.links {
  margin: 20px;
}
.links li {
  margin: 10px 0;
}
</style>
