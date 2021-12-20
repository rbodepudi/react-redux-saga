import './App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProjects, updateSearchText} from '../Actions/action'

class App extends Component {
 constructor(props) {
 	super(props)
 }

 render() {	
 	  const {searchText, projects, fetchProjects, updateSearchText, displayLanguages, showDefaultLanguages} = this.props

 	  const fetchProjectsWrapper = () => {
 	  		fetchProjects(searchText)
 	  }

 	  const updateSearchTextWrapper = (ev) => {
 	  	 if(ev.target.type == 'text') {
 	  	 	updateSearchText(ev.target.value)
 	  	 } else {
 	  	 	updateSearchText(ev.target.innerText)
 	  	 	fetchProjects(ev.target.innerText)
 	  	 }
 	  } 

 	  console.log(projects.length)

	  return (
	    <div className="App">
	    	<div className="Text-area">
	        	<input type="text" className="Text" value={searchText}  onChange={updateSearchTextWrapper}/>
	        	<button className="Button" onClick={fetchProjectsWrapper}> Submit</button>
	        </div>
	        
	        <div className="Dropdown-area">
	           { 
	           	   showDefaultLanguages && 

		        	<ul className="List">
			        	{displayLanguages.map( (item, index) => <li key={index} onClick={updateSearchTextWrapper}>{item}</li>)}
		        	</ul>
	           }
	        </div>

	        { 
	        	projects.length > 0 && 

	        	<ul className="Projects">
	        		{projects.map((item, index) => <li key={index}>{item}</li>)}
	        	</ul>

	        }
	        
	    </div>
	  );
  }
}

const mapStateToProps = (state) => {
   return {
      projects: state.projects,
      searchText: state.searchText,
      displayLanguages: state.displayLanguages,
      showDefaultLanguages: state.showDefaultLanguages
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchProjects: (searchText) => dispatch(fetchProjects(searchText)),
      updateSearchText: (searchText) => dispatch(updateSearchText(searchText))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
