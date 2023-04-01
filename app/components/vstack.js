/*
This component is modeled on the Chakra component
of the same name.  It allows spacing parameters
from 0 through 5, adding margins in increments
of 5px.
*/

import { v4 as uuidv4 } from 'uuid';

export default function VStack({ spacing = 0, children }) {
  const size = spacing * 5 + 'px';
  const className = `margintop${size}`;

  return (
    <div className='-vstack'>
      {children.map((child, index) =>
        index === 0 ? (
          <div key={uuidv4()} className='margintop0px'>
            {child}
          </div>
        ) : (
          <div key={uuidv4()} className={className}>
            {child}
          </div>
        )
      )}
    </div>
  );
}
