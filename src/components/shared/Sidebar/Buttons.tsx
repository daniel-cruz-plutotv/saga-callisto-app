import React from 'react'
import { useDispatch } from 'react-redux';
import { cleanPokemons, racePokemons, getAllPokemonsTake, getAllPokemonsTakeEvery, getAllPokemonsTakeLatest, getAllPokemonsTakeLeading, raceAllPokemons } from '../../../redux/actions/pokemonActions';
import { cleanTypes } from '../../../redux/actions/typeActions';

export const Buttons = () => {

    const dispatch = useDispatch();
    const race = () => {
        console.log('race started');
        dispatch(racePokemons())
    }

    const all = () => {
        console.log('all started');
        dispatch(raceAllPokemons())
    }

    const clean = () => {        
        console.log('clean clicked');  
        dispatch(cleanPokemons())
        dispatch(cleanTypes())
    }

    const loadPokemonsTake = () => {       
        console.log('take clicked');   
        dispatch(getAllPokemonsTake())
    }

    const loadPokemonsTakeEvery = () => {        
        console.log('take every clicked');  
        dispatch(getAllPokemonsTakeEvery())
    }

    const loadPokemonsTakeLatest = () => {        
        console.log('take latest clicked');  
        dispatch(getAllPokemonsTakeLatest())
    }

    const loadPokemonsTakeLeading = () => {        
        console.log('take leading clicked');  
        dispatch(getAllPokemonsTakeLeading())
    }

    return (
        <div className="c-sidebar__buttons-container">
            <button 
                className="c-sidebar__buttons-container__button-full"
                onClick={loadPokemonsTake}
            >
                Fetch - Take
            </button>
            <button 
                className="c-sidebar__buttons-container__button-full"
                onClick={loadPokemonsTakeEvery}
            >
                Fetch - TakeEvery
            </button>
            <button 
                className="c-sidebar__buttons-container__button-full"
                onClick={loadPokemonsTakeLatest}
            >
                Fetch - TakeLatest
            </button>
            <button 
                className="c-sidebar__buttons-container__button-full"
                onClick={loadPokemonsTakeLeading}
            >
                Fetch - TakeLeading
            </button>
            <button 
                className="c-sidebar__buttons-container__button-full"
                onClick={race}
            >
                Race
            </button>
            <button 
                className="c-sidebar__buttons-container__button-full"
                onClick={all}
            >
                All
            </button>
            <button 
                className="c-sidebar__buttons-container__button-empty"
                onClick={clean}
            
            >
                Clean
            </button>
        </div>
    )
}
