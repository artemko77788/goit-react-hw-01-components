import PropTypes from 'prop-types';

const Statistic = props =>  {
  const {title, stats } = props
  return  <section >
  <h2 >{title}</h2>
    <ul>{
      stats.map(({ id, label, percentage })=>{
     return    (<li key={id} >
        <span >{label}</span>
        <span>{percentage}</span>
      </li>)
      }
    )
    }
 
  </ul>
</section>


}

Statistic.propTypes = {
  key: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}

export default Statistic