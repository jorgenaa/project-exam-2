const localStorageKey = 'message';

export const getExistingMessages = () => {
	const messages = localStorage.getItem(localStorageKey);

	if (!messages) {
		return [];
	} else {
		return JSON.parse(messages);
	}
};

export const saveMessages = message => {
	localStorage.setItem(localStorageKey, JSON.stringify(message));
};
