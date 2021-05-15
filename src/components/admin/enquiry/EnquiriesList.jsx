import { IoTrashBinSharp } from 'react-icons/io5';

const EnquiriesList = ({
	state,
	//dispatch,
	deleteEnquiries,
	//REMOVE_ENQUIRY,
	
}) => {
	if (state.enquiries.length === 0) {
		return (
			<tbody>
				<tr>
					<td>No enquiries</td>
				</tr>
			</tbody>
		);
	}

	const handleDeleteEnqury = async id => {
		
		return new Promise((resolve, reject) => { 
		 	if(deleteEnquiries) {
				resolve(deleteEnquiries(id))
			}else {
				reject(console.log("failed deleting"));
			}
		})
	}

	return (
		<>
			<tbody className="table_tbody">
				{state.enquiries.map(enquiry => {
					const {
						id,
						establishment,
						firstName,
						lastName,
						email,
						fromDate,
						toDate,
					} = enquiry;
					return (
						<tr className="table__row--border-bottom" key={id}>
							<td>
								<IoTrashBinSharp
									className="table__trash table__trash--hover"
									onClick={() => handleDeleteEnqury(id)}
								/>
							</td>
							<td>{establishment}</td>
							<td>{firstName}</td>
							<td>{lastName}</td>
							<td>{email}</td>
							<td>{fromDate}</td>
							<td>{toDate}</td>
						</tr>
					);
				})}
			</tbody>
		</>
	);
};

export default EnquiriesList;
