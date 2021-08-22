import * as React from 'react';
import { string, number, func } from 'prop-types';

import './style.css';

export default function Tile({ color = 'gray', onDoubleClick  }) {
  return (
    <div className="tile" style={{backgroundColor: color}} onDoubleClick={onDoubleClick}/>
  )
}

Tile.propTypes = {
  color: string,
  id: number.isRequired,
  onDoubleClick: func.isRequired
}

//----------------------
// bisa pake cara ini untuk default value params.
// Tile.defaultProps = {
//   color: 'gray'
//   }
//----------------------