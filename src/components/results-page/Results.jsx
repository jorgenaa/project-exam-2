//Components
import SubHeading from '../common/SubHeading';
import ResultsList from './ResultsList';

const ResultsPage = () => {
	return (
		<main className="results">
			<SubHeading content="Results" />
			<ResultsList />
		</main>
	);
};

export default ResultsPage;
