const baseurl = "https://pokemonapi20240319194615.azurewebsites.net/api/pokemons";

Vue.createApp({
  data() {
    return {
      pokemons: []
    }
  },
  methods: {
    async getAllPokemons() {
      await this.helperGetAndShow(baseurl);
    },

    async helperGetAndShow(baseurl) {
      try {
        const response = await axios.get(baseurl);
        this.pokemons = response.data;
      } catch (ex) {
        alert(ex.message);
      }
    }
  }
}).mount("#app");