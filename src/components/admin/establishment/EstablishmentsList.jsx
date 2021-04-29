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
	//imgsUrl,
	//imgsMobileUrl

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
						<td>{imgUrl.name}</td> 
						<td></td>
						<td></td>
						{/* <td>{imgsUrl}</td> */}
						{/* <td><ul>{imgsUrl.map(img => {return <li>{img.name}</li>})}</ul></td> */}
						{/* <td>{imgsMobileUrl}</td> */}
						{/* <td><ul>{imgsMobileUrl.map(img => <li>{img.name}</li>)}</ul></td> */}
						<td span="2" dangerouslySetInnerHTML={{ __html: description }}></td>
					</tr>
					</>
				);
			})}
		</tbody>
	);
};

export default EstablishmentsList;
