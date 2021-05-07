import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

const EstablishmentsList = ({ state }) => {
	useEffect(() => {}, [state.establishments.length]);

	if (state.establishments.length === 0) {
		return (
			<tbody>
				<tr>
					<td>No establishments</td>
				</tr>
			</tbody>
		);
	}

	return (
		<tbody>
			{state.establishments.map(establishment => {
				const {
					name,
					description,
					price,
					id,
					email,
					selfcatering,
					maxGuests,
					roomType,
					imgUrl,
					imgsUrl,
					imgsMobileUrl,
					facilityIcons,
					bookingIncludes,
					popularFacilityIcons,
					stars,
				} = establishment;

				return (
					<>
						<tr key={id}>
							<th>Name</th>
							<th>Email</th>
							<th>Price</th>
							<th>Max guests</th>
							<th>Self catering</th>
							<th>Room Type</th>
						</tr>
						<tr>
							<td>{name}</td>
							<td>{email}</td>
							<td>{price}</td>
							<td>{maxGuests}</td>
							<td value={selfcatering}>
								{selfcatering === false ? 'No' : 'Yes'}
							</td>
							<td>{roomType}</td>
						</tr>
						<tr>
							<th>Main Img</th>
							<th>Images</th>
							<th colSpan="2">Images mobile</th>
							<th colSpan="2">Facility Icons</th>
						</tr>
						<tr>
							{imgUrl ? <td key={imgUrl.id}>{imgUrl.name}</td> : null}
							<td>
								{imgsUrl ? (
									<ul>
										{imgsUrl.map(img => (
											<li key={img.id}>{img.name}</li>
										))}
									</ul>
								) : null}
							</td>
							<td colSpan="2">
								{imgsMobileUrl ? (
									<ul>
										{imgsMobileUrl.map(img => (
											<li key={img.id}>{img.name}</li>
										))}
									</ul>
								) : null}
							</td>
							<td colSpan="2">
								{facilityIcons ? (
									<ul>
										{facilityIcons.map(icon => (
											<li key={icon.id}>{icon.name}</li>
										))}
									</ul>
								) : null}
							</td>
						</tr>
						<tr>
							<th>Star Icons</th>
							<th>Popular Facility Icons</th>
							<th>Booking Includes</th>
							<th colSpan="3">Description</th>
						</tr>
						<tr className="table__row table__row--border-bottom-even">
							<td>
								{stars ? (
									<ul>
										{stars.map(item => {
											return <li key={item.id}>{item.name}</li>;
										})}
									</ul>
								) : null}
							</td>
							<td>
								{popularFacilityIcons ? (
									<ul>
										{popularFacilityIcons.map(icon => (
											<li key={icon.id}>{icon.name}</li>
										))}
									</ul>
								) : null}
							</td>
							<td>
								{bookingIncludes ? (
									<ul>
										{bookingIncludes.map(item => (
											<li key={item.id}>{item.name}</li>
										))}
									</ul>
								) : null}
							</td>
							<td
								colSpan="3"
								dangerouslySetInnerHTML={{ __html: description }}
							></td>
						</tr>
					</>
				);
			})}
		</tbody>
	);
};

EstablishmentsList.propTypes = {
	state: PropTypes.object.isRequired,
};

export default EstablishmentsList;
