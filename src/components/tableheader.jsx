import { v4 as uuidv4 } from 'uuid';

export default function TableHeader({ data }) {
  const values = data.values;
  if (values.length === 0) {
    return (
      <tr key={uuidv4()}>
        <th></th>
      </tr>
    );
  }
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
        <th key={index} scope='col'>{col}</th>
      ))}
    </tr>
  );
}
