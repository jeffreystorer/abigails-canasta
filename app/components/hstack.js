/*
This component is modeled on the Chakra component
of the same name.  It allows spacing parameters
from 0 through 5, adding margins in increments
of 5px.
*/

import { v4 as uuidv4 } from 'uuid';

export default function HStack({ spacing = 0, children }) {
  const size = spacing * 5 + 'px';
  const className = `marginleft${size}`;

  return (
    <div className='-hstack'>
      {children.map((child, index) =>
        index === 0 ? (
          <div id={uuidv4()} key={uuidv4()} className='marginleft0px'>
            {child}
          </div>
        ) : (
          <div id={uuidv4()} key={uuidv4()} className={className}>
            {child}
          </div>
        )
      )}
    </div>
  );
}
