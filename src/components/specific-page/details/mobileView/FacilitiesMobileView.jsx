import { Link } from 'react-router-dom';
import List from './List';
import Button from '../../../common/Button';

const FacilitiesMobileView = ({ id, icons }) => {
	return (
		<div className="specific__facilities-mobile ">
			<h4 className="heading--h4 ">Facilities</h4>
			<List icons={icons} id={id} />
			<section>
				<Link
					className="specific__facilities-link-mobile"
					to={'/enquiry/' + id}
				>
					<Button
						label="Reserve"
						type="specific__btn button button--blue button--hover"
					/>
				</Link>
			</section>
			<Link className="specific__link float-right" to={'/enquiry/' + id}>
				<Button
					label="Reserve"
					type="specific__btn button button--blue button--hover"
				/>
			</Link>
		</div>
	);
};

export default FacilitiesMobileView;
