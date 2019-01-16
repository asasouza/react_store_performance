import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { revenueChange } from '../actions/RevenueAction';
import style from '../styles/style.css';

class RevenueInput extends Component {

	constructor(props) {
		super(props);
		this.state = { revenue: 15000 };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(value, callback) {
		this.setState({ revenue: value });
		callback(value);
	}

	render() {
		const onRevenueChange = _.debounce(value => {
			this.props.revenueChange(value);
		}, 1000);
		return (
			<div className={style.revenue_input}>
				<span>Faturamento mínimo esperado</span>
				<input
					className='form-control'					
					onChange={event => this.onInputChange(event.target.value, onRevenueChange)}
					value={this.state.revenue}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ revenueChange }, dispatch);
}

export default connect(null, mapDispatchToProps)(RevenueInput);
