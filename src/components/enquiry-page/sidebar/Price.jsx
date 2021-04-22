

const Price = ({price, roomType, diffDays}) => {

    const sum = diffDays * price;

    return (
        <>
             <table className="bookDetails bookDetails--second">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th className="bookDetails__hd-col">Your price summary</th>
                        <th className="bookDetails__hd-col"></th>
                    </tr>
                </thead>
                <tbody className="bookDetails__body">
                    <tr className="bookDetails__body-row">
                        <td>Type of room</td>
                        <td>{roomType}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bookDetails__footer-row">
                        <td className="bookDetails__ft-col">Total Price</td>
                        {sum ?<td className="bookDetails__ft-col">{sum} NOK</td> : <td className="bookDetails__ft-col"></td>}
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Price;
