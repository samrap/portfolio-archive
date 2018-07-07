import Vue from 'vue';
import NavMenu from './components/NavMenu.vue';
import RepoCard from './components/RepoCard.vue';

window.vue = new Vue({
  el: '#wrapper',
  components: { NavMenu, RepoCard },
});
