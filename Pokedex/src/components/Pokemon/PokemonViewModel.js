class PokemonViewModel {
    constructor(pokemonStore) {
        this.store = pokemonStore
    }

    getPokemons() {
        return this.store.getPokemons()
    }

    addPokemon(pokemon) {
        this.store.addPokemon(pokemon)
    }

    removePokemon(pokemon) {
        this.store.removePokemon(pokemon)
    }
    countPokemon()
    {
        return this.store.countPokemon()
    }
}

export default PokemonViewModel