// libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Type from '../../general/Type/Type';
import { getTypeSuccess } from '../../../redux/actions/typeActions';
import { RootState } from '../../../redux/reducers';

const Card: React.FC = ( props: any ) => {
  const { height, hp, img, name, type, weight } = props;

  const dispatch = useDispatch();

  const { types } = useSelector(
    (state: RootState) => state.types
  )
  
  useEffect(() => {
    if( !types.includes( type ) ) {
      dispatch( getTypeSuccess( type ) );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="c-card animate__animated animate__fadeIn">
      <div className="c-card__container">

        <div className="c-card__image">
          <img src={ img } alt={ name } />
        </div>
        <p className="c-card__title">
          { name }
        </p>
        <div className="c-card__title-underline"></div>
        <p className="c-card__hp">
          HP { hp }
        </p>
        <div className="c-card__info">
          <div className="c-card__type">
            <Type type={ type } />
          </div>
          <p className="c-card__wight">{ weight } LBS</p>
          <p className="c-card__height">{ height } M</p>
        </div>
      </div>
    </div>
  );
};

export default Card;