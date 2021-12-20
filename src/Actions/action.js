
export function fetchProjects(query) {
	return {
		type : 'FETCH_PROJECTS',
		payload: {searchQuery :query}
	}
}


export function displayProjects(projects) {
	return {
		type : 'DISPLAY_PROJECTS',
		payload: {projects: projects}
	}
}


export function updateSearchText(text) {
	return {
		type: 'UPDATE_SEARCH_TEXT',
		payload: {searchText: text}
	}
}