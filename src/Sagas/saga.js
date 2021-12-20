import {call, put, takeEvery} from 'redux-saga/effects'

const API = {
	fetchProjects : (searchQuery) => {
		return fetch('https://api.github.com/search/repositories?q='+searchQuery)
		.then((res) => res.json())
		.then((res) => {
			return res.items.map((item) => {
				return item.full_name
			})
		}).catch( (err) => {
			console.log(err)
			return []
		});
	}
}

function* fetchProjects(action) {

    yield put({type: 'HIDE_PROJECTS'})
	var projects = yield call(API.fetchProjects, action.payload.searchQuery)
	yield put({type: 'DISPLAY_PROJECTS', projects: projects})
}


function* projectsSaga() {
	yield takeEvery('FETCH_PROJECTS', fetchProjects)
}

export default projectsSaga