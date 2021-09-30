// libraries
import React from 'react';

const Type = ( props: any ) => {
  const { type } = props;
  return (
    <div className="o-type">
      <p className="o-type__text">{ type }</p>
    </div>
  );
};

export default Type;