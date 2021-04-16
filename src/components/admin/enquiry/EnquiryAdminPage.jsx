
import SubHeading from '../../common/SubHeading';
import EnquiriesTableHeader from './EnquiriesTableHeader';
import EnquiriesList from './EnquiriesList';
import TableSection from '../../common/TableSection';
import DeleteEnquiryBtn from './DeleteEnquiryBtn';

const EnquiryAdminPage = () => {
    return (
        <main>
            <section className="inbox__header-section">
                <SubHeading content="Enquiries" />
                <div className="inbox__header-btn">
                    <DeleteEnquiryBtn />
                </div>
            </section>
            
            <TableSection className="table-section" >
                <table>
                    <EnquiriesTableHeader />
                    <EnquiriesList />
                </table>
            </TableSection>
        </main>
    )
}

export default EnquiryAdminPage;