
const Summary = ({bookingInc}) => {
   
    return (
        <>
            <table className="bookDetails bookDetails--third">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th className="bookDetails__hd-col">Your booking includes</th>
                        <th className="bookDetails__hd-col"></th>
                    </tr>
                </thead>
                {bookingInc ? <tbody>
                   {bookingInc.map(item => {
                        return (
                            <tr>
                                <td className="bookDetails__col">{item.name}</td>
                                <td className="bookDetails__col"></td>
                            </tr>
                        )
                    })}
                   
                </tbody>: ""}
            </table>
        </>
    )
}

export default Summary;
