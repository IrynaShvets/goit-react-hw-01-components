import PropTypes from "prop-types";

export default function TransactionHistory(items) {
    const { id, type, amount, currency } = items; 

    return (
        
            <table> 
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
            
                <tbody>
                   
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
               
                </tbody>
            
                
           
            </table>
       
    )
} 
/*  {items.map(item => ( ))} */
    
TransactionHistory.propTypes = {
    
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};


