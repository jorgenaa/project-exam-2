import { useEffect } from 'react';

const EstablishmentsList = ({state}) => {
	
	useEffect(() => {
	
	}, [state.establishments.length]);

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
					imgsMobileUrl
				} = establishment;

				return (
					<>
					<tr >
						<th>Name</th>
						<th>Email</th>
						<th>Price</th>
						<th>Max guests</th>
						<th>Self catering</th>
						
					</tr>
					<tr key={id}>
						<td>{name}</td>
						<td span="1">{email}</td>
						<td>{price}</td>
						<td>{maxGuests}</td>
						<td value={selfcatering}>
							{selfcatering === false ? 'No' : 'Yes'}
						</td>
					</tr>
					<tr>
						<th>Room Type</th>
						<th>Main Img</th>
						<th>Images</th>
						<th>Images mobile</th>
						<th>Description</th>
					</tr>
					<tr className="table__row table__row--border-bottom-even">
						<td>{roomType}</td>
							{imgUrl ?<td>{imgUrl.name}</td> : null}
							{imgsUrl ?<td><ul>{imgsUrl.map(img => {
								return <li>{img.name}</li>})}</ul></td>: null}
							{imgsMobileUrl ?<td><ul>{imgsMobileUrl.map(img => <li>{img.name}</li>)}</ul></td>: null}
						<td span="2" dangerouslySetInnerHTML={{ __html: description }}></td>
					</tr>
					</>
				);
			})}
		</tbody>
	);
};

export default EstablishmentsList;
