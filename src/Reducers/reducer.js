
const initialState = {
	projects: [],
	searchText: '',
	defaultLanguages: ['javascript', 'java', 'swift', 'kotlin', 'scala', 'ruby'],
	displayLanguages: [],
	showDefaultLanguages: false
} 

export default function updateState(state = initialState, action) {
	console.log(action)
	switch(action.type) {
		case 'UPDATE_SEARCH_TEXT': 
		let displayLanguages = state.defaultLanguages.filter(item => item.indexOf(action.payload.searchText) != -1)

		return Object.assign({},state, action.payload, {displayLanguages: displayLanguages, showDefaultLanguages: displayLanguages.length > 0});

		case 'DISPLAY_PROJECTS': 
		return Object.assign({},state, {projects: action.projects});


		case 'HIDE_PROJECTS': 
		return Object.assign({},state, {showDefaultLanguages: false});

		default: 
		return state;
	}
}