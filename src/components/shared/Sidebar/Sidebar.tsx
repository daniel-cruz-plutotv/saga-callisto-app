// Libraries
import React from 'react';

// Components
import TextInput from '../../general/TextInput/TextInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import Type from '../../general/Type/Type';
import { Buttons } from './Buttons';

const Sidebar: React.FC = () => {

  const { types } = useSelector(
    (state: RootState) => state.types
  )

  const typesArray: any = types;
  return (
    <aside className="c-sidebar container animate__animated animate__fadeIn">
      <h2 className="c-sidebar__title">Options</h2>
      <div className="c-sidebar__name-input">
        <TextInput />
      </div>
      <div className="c-sidebar__filters">
        <h3>Pokemon Type</h3>
      </div>
      <div className="c-sidebar__filters-options">
        {
          typesArray.map((type: any, idx: number) => (
            <div key={idx} className="c-sidebar__filters_option">
              <Type type={type} />
            </div>
          ))
        }
      </div>
      <Buttons/>
    </aside>
  );
};

export default Sidebar;