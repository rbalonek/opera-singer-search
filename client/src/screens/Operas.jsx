import React from 'react';
import { Link } from 'react-router-dom';

export default function Operas(props) {
  const { operas } = props;
  return (
    <div>
      <h3>Operas</h3>
      {operas.map(opera => (
        <Link to={`/operas/${opera.id}`}><p>{opera.name}</p></Link>
      ))}
      <br />
    </div>
  )
}