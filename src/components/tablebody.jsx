import { v4 as uuidv4 } from 'uuid';

export default function TableBody({ type, data }) {
  const values = data.values;
  if (values.length < 2)
    return (
      <tr key={uuidv4()}>
        <td>
          <h1>None</h1>
        </td>
      </tr>
    );
  const rows = values;
  let rowsTD = [];
  let colCount = rows[0].length;

  function generateRows() {
    for (var i = 1; i < rows.length; i++) {
      if (rows[i][0]) rowsTD[i] = generateCols(i);
    }
    return rowsTD;
  }

  function generateCols(i) {
    const firstName = rows[i][1] ? rows[i][1] : '***********';
    const lastName = rows[i][2] ? rows[i][2] : '';
    const name = firstName + ' ' + lastName;
    switch (type) {
      case 'playerinfo':
        let trs = [];
        trs.push(
          <tr>
            <th scope='row'>{name}</th>
            <td data-val={rows[i][5]}></td>
            </tr>
        )
        trs.push(
          <tr>
            <td data-val={rows[i][3]}></td>
            <td data-val={rows[i][4]}></td>
            </tr>
        )
        return trs;
        
        break;
    
      default:        
          let tds = [];

          tds[0] = <th key={uuidv4()} scope='row'>{name}</th>;

          for (var j = 1; j < colCount - 1; j++) {
            tds[j] = (
              <td key={uuidv4()} data-val={rows[i][j + 2]}></td>
            );
          }
          return <tr>{tds}</tr>;
        break;
    }
  }

  return <>{generateRows()}</>;
}
