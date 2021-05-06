import { PropTypes } from 'prop-types';

const Summary = ({ bookingInc }) => {
	return (
		<table className="bookDetails bookDetails--third">
			<thead className="bookDetails__head">
				<tr className="bookDetails__header-row">
					<th className="bookDetails__hd-col">Your booking includes</th>
					<th className="bookDetails__hd-col"></th>
				</tr>
			</thead>
			{bookingInc ? (
				<tbody className="bookDetails__body">
					{bookingInc.map(item => {
						return (
							<tr key={item.id}>
								<td className="bookDetails__col">{item.name}</td>
								<td className="bookDetails__col"></td>
							</tr>
						);
					})}
				</tbody>
			) : null}
		</table>
	);
};

Summary.propTypes = {
	bookingInc: PropTypes.array.isRequired,
};

export default Summary;
