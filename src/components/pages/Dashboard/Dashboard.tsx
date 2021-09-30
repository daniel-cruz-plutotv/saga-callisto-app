// libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../modules/Card/Card';
import { RootState } from '../../../redux/reducers/index';
import { getPokemonsRequest } from '../../../redux/actions/pokemonActions';

const Dashboard: React.FC = () => {

  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: RootState) => state.pokemons
  )
  
  useEffect(() => {
    dispatch( getPokemonsRequest() );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      {
        data.map((pokemon: any) => {
          return (
            <Card key={pokemon.name} {...pokemon} />
          )
        })
      }
    </>
  );
};

export default Dashboard;