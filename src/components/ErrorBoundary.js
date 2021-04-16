import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
		};
	}

	componentDidCatch(error, errorInfo) {
		console.log(error);
		console.log(errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<section className="mt-3">
					<h2 className="form__message form__message--error">
						Caught an error.
					</h2>
				</section>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
