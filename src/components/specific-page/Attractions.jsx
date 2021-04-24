import StatueImg from '../../assets/img/statue.jpg';
import HouseImg from '../../assets/img/house.jpg';
import TwoColumns from '../common/TwoColumns';

const Attractions = ({ id }) => {
	return (
		<TwoColumns key={id}>
			<div className="specific__attraction-item">
				<img
					className="specific__attraction-img"
					src={HouseImg}
					alt="Attraction in town of Bergen"
				/>
			</div>
			<div className="specific__attraction-item">
				<img
					className="specific__attraction-img"
					src={StatueImg}
					alt="Attraction in town of Bergen"
				/>
			</div>
		</TwoColumns>
	);
};

export default Attractions;
