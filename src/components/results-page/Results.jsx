
//Components
import SubHeading from '../common/SubHeading';
import ResultsList from './ResultsList';

const ResultsPage = () => {
    return (
        <main className="results mt-2">
            <section>
                <SubHeading content="Results" />
            </section>
            <ResultsList />
        </main>
    )
}

export default ResultsPage;