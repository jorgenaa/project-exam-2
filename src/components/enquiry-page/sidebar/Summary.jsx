

const Summary = () => {
    return (
        <>
            <table className="bookDetails bookDetails--third">
                <thead>
                    <tr className="bookDetails__header-row">
                        <th>Your booking includes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="bookDetails__body">
                    <tr className="bookDetails__body-row">
                        <td className="bookDetails__col">{}</td>
                        <td className="bookDetails__col">{}</td>
                    </tr>
                     <tr className="bookDetails__body-row">
                        <td className="bookDetails__col">{}</td>
                        <td className="bookDetails__col">{}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Summary;
