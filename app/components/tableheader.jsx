import { RANGES } from '@/app/constants';
import { v4 as uuidv4 } from 'uuid';

export default function TableHeader({ type, data }) {
  const index = RANGES[type];
  const values = data.valueRanges[index].values;
  const ths = values[0];
  ths.shift();
  let cols = [''];
  let i;
  for (i = 2; i < ths.length; i++) {
    cols.push(ths[i]);
  }
  return (
    <tr key={uuidv4()}>
      {cols.map((col, index) => (
        <th data-val={col} key={index} className='-th'></th>
      ))}
    </tr>
  );
}
