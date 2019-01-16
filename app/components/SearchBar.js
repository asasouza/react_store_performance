import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import SVGInline from 'react-svg-inline';
import { searchByName } from '../actions/StoresAction';
import style from '../styles/style.css';
import SearchIcon from '../resources/images/search.svg';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(term, callback) {
		this.setState({ term });
		callback(term);
	}
	
	render() {
		const searchByTerm = _.debounce(term => {
			this.props.searchByName(term);
		}, 1000);
		return (
			<div className={style.search_bar}>
				<input 
					className='form-control'
					placeholder='Pesquisa'
					onChange={event => this.onInputChange(event.target.value, searchByTerm)}
					value={this.state.term}
				/>
				<SVGInline className={style.search_icon} svg={SearchIcon} />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchByName }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
