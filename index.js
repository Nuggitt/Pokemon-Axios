const baseurl = "https://pokemonapi20240319194615.azurewebsites.net/api/pokemons";

Vue.createApp({
  data() {
    return {
      pokemons: [],
      singlePokemon: null,
      pokemonId: 0,
      deleteId: 0,
      deleteMessage: "",
      addPokemonData: { pokemonId: 0, name: "", type: "" },
      addMessage: "",
      updatePokemonData: { pokemonId: 0, name: "", type: "" },
      updateMessage: ""

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
    },
    async getPokemonById(id) {
      const url = baseurl + "/" + id;
      try {
        const response = await axios.get(url);
        this.singlePokemon = response.data;
      } catch (ex) {
        alert(ex.message);
      }
    },
    async deletePokemon(deleteId) {
      const url = baseurl + "/" + deleteId;
      try {
        response = await axios.delete(url);
        this.deleteMessage = response.status + " " + response.statusText;
        this.getAllPokemons();
      } catch (ex) {
        alert(ex.message);
      }
    },
    async addPokemon() {
      try {
        response = await axios.post(baseurl, this.addPokemonData);
        this.addMessage = "response " + response.status + " " + response.statusText;
        this.getAllPokemons();
      } catch (ex) {
        alert(ex.message);
      }
    },
    async updatePokemon() {
      const url = baseurl + "/" + this.updatePokemonData.pokemonId;
      try {
        const response = await axios.put(url, this.updatePokemonData);
        this.updateMessage = "response " + response.status + " " + response.statusText;
        this.getAllPokemons();
      } catch (ex) {
        alert(ex.message);
      }
    }
    
  }
}).mount("#app");