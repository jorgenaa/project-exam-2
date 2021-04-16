
import AddEstablishmentBtn from './AddEstablishmentBtn';
import DeleteEstablishmentBtn from './DeleteEstablishmentBtn';
import EstablishmentForm from './EstablishmentForm';
import SubHeading from '../../common/SubHeading';
import TableSection from '../../common/TableSection';
import EstablishTableHeader from './EstablishTableHeader';
import EstablishmentsList from './EstablishmentsList';

const Establishment = () => {

    return (
        <main>
             <section className="inbox__header-section">
                <SubHeading content="Establishments" />
                <div className="inbox__header-btn">
                    <AddEstablishmentBtn />
                    <DeleteEstablishmentBtn />
                </div>
            </section>
            <section>
                <EstablishmentForm />
            </section>
            <TableSection className="table-section">
                <table>
                    <EstablishTableHeader  />
                    <EstablishmentsList  />
                </table>
            </TableSection>
        </main>
    )
}

export default Establishment;