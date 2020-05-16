import React from 'react'
import PokemonList from './UI/PokemonList'
import PokemonForm from './UI/PokemonForm'

class PokemonView extends React.Component {
    render() {
        const {
            pokemons,
            pokemonlen,
            pokemonImage,
            pokemonName,
            randomizePokemon,
            setPokemonName,
            addPokemon,
            removePokemon,
            shouldDisableSubmit
        } = this.props

        return (
            <React.Fragment>
                <PokemonForm
                    image={pokemonImage}
                    pokemonlen={pokemonlen}
                    onInputChange={setPokemonName}
                    inputValue={pokemonName}
                    randomize={randomizePokemon}
                    onSubmit={addPokemon}
                    shouldDisableSubmit={shouldDisableSubmit}
                />
                <PokemonList
                    removePokemon={removePokemon}
                    pokemons={pokemons}
                />
            </React.Fragment>
        )
    }
}

export default PokemonView