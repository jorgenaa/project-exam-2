import { useContext } from 'react';

import EstablishmentsContext from '../../contexts/EstablishmentsContext';
import CheckedEstablishBtn from './CheckedEstablishBtn';

const EstablishmentsList = () => {
	const context = useContext(EstablishmentsContext);
	const [state] = context;

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
				} = establishment;

				return (
					<tr key={id}>
						<td>
							<CheckedEstablishBtn key={id} id={id} />
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
