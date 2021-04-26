import { IoTrashBinSharp } from 'react-icons/io5';

const EstablishmentsList = ({REMOVE_ESTABLISHMENT, state, dispatch, deleteEstablishment}) => {
	
	if (state.establishments.length === 0) {
		return (
			<tbody>
				<tr>
					<td>No establishments</td>
				</tr>
			</tbody>
		);
	}

	const handleDeleteEstablishment = id => {
		deleteEstablishment(id);
		dispatch({ type: REMOVE_ESTABLISHMENT, payload: id });
	};

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
				} = establishment;

				return (
					<tr key={id}>
						<td>
							<IoTrashBinSharp
								className="table__trash table__trash--hover"
								onClick={() => handleDeleteEstablishment(id)}
							/>
						</td>
						<td>{name}</td>
						<td>{email}</td>
						<td>{price}</td>
						<td>{maxGuests}</td>
						<td value={selfcatering}>
							{selfcatering === false ? 'No' : 'Yes'}
						</td>
						<td dangerouslySetInnerHTML={{ __html: description }}></td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default EstablishmentsList;
