import PropTypes from 'prop-types';
import CoinItem from '../coinItem/CoinChart';

const Details = ({ coinId }) => {
  console.log(coinId.length);
  return (
    <div className="details">
      {coinId.length > 0
        ? <CoinItem coinId={coinId} />
        : ''}
    </div>
  );
};

Details.defaultProps = {
  coinId: '',
};

Details.propTypes = {
  coinId: PropTypes.string,
};
export default Details;
