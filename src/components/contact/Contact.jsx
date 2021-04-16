
import ContactForm from './ContactForm';
import SubHeading from '../common/SubHeading';

const Contact = () => {
    return (
        <main>
            <div className="w-600px pl-3">
                <SubHeading content="Contact us" />
            </div>
            <ContactForm />
        </main>
    )
}

export default Contact;