

const Price = () => {
    return (
        <>
             <table className="bookDetails bookDetails--second">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th>Your price summary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="bookDetails__body">
                    <tr className="bookDetails__body-row">
                        <td className="bookDetails__col">Type of room{}</td>
                        <td className="bookDetails__col">{}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bookDetails__footer-row">
                        <td>Total Price</td>
                        <td>{}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Price;
