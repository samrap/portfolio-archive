<template>
  <div>
    <div
      v-if="loading"
      class="text-center">
      <div class="spinner"></div>
    </div>

    <a
      v-if="! loading && ! failed"
      :href="data.html_url"
      class="column__card">
      <div class="card__name">
        {{ name }}
      </div>

      <div v-if="data.description" class="card__description">
        {{ data.description }}
      </div>

      <div class="card__meta">
        <div class="meta__item">
          {{ data.language }}
        </div>
        <div class="meta__item">
          <i class="fas fa-star"></i> {{ data.stargazers_count }}
        </div>
      </div>
    </a>

    <div v-if="failed" class="text-sm text-center">
      An error occurred connecting to GitHub
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        data: null,
        failed: false,
        loading: true,
      }
    },
    props: ['name'],
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get(`https://api.github.com/search/repositories?q=${this.name}`)
          .then(response => {
            this.data = response.data.items[0];
            this.loading = false;
          })
          .catch(error => {
            this.loading = false;
            this.failed = true;
            console.warn(error);
          });
      }
    }
  }
</script>
