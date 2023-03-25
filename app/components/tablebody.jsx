import { RANGES } from '@/app/constants';
import { v4 as uuidv4 } from 'uuid';

export default function TableBody({ type, data }) {
  const index = RANGES[type];
  const values = data.valueRanges[index].values;
  if (values.length === 1)
    return (
      <tr key={uuidv4()}>
        <td>
          <h1>None</h1>
        </td>
      </tr>
    );
  values.shift();
  const rows = values;
  let rowsTD = [];
  let colCount = rows[0].length;

  function generateRows() {
    for (var i = 0; i < rows.length; i++) {
      rowsTD[i] = <tr key={uuidv4()}>{generateCols(i)}</tr>;
    }
    return rowsTD;
  }

  function generateCols(i) {
    let tds = [];
    const firstName = rows[i][1] ? rows[i][1] : '';
    const lastName = rows[i][2] ? rows[i][2] : '';
    const name = firstName + ' ' + lastName;

    tds[0] = <td key={uuidv4()} data-val={name} className='-td'></td>;

    for (var j = 1; j < colCount - 2; j++) {
      tds[j] = (
        <td key={uuidv4()} data-val={rows[i][j + 2]} className='-td'></td>
      );
    }
    return tds;
  }

  return <>{generateRows()}</>;
}
