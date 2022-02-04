import PropTypes from "prop-types"

export default function Statistics({title, stats }) {
    
    return (
        <>
            {title && <h2>{title}</h2>} 
           
        <ul>
            {stats.map(stat => (
                <li key={stat.id}> 
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </li>
            ))}
       </ul>
        </>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
