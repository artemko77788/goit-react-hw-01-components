import PropTypes from 'prop-types';

function TransactionHistory ({ type, amount, currency, items}){

 return (<table >
  <thead>
    <tr>
      <th>{ type }</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </thead>

   <tbody>
     {

       items.map(({ id, type, amount, currency })=>
       {
     return ( <tr key={ id }>
      <td>{type }</td>
      <td>{amount }</td>
      <td>{currency }</td>
    </tr>)
       }
       )
     }
  </tbody>
</table>
)
}



TransactionHistory.propTypes = {
  tepe: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  id: PropTypes.number,
}


export default TransactionHistory