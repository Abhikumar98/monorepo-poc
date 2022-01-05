// fetch random names
export const fetchRandomNames = async (): Promise<string[]> => {
	const response = await fetch(
		"https://randomuser.me/api?results=10&nat=us&inc=name,email,picture"
	);
	const data = await response.json();
	const names = data.results.map(({ name }) => name.first);
	return names;
};
