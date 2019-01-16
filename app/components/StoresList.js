import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import SVGInline from 'react-svg-inline';
import style from '../styles/style.css';
import LeftIcon from '../resources/images/left.svg';
import RightIcon from '../resources/images/right.svg';

class StoresList extends Component {

	constructor(props) {
		super(props);
		this.state = { page: 1, limit: 10 };
		this.onPageChange = this.onPageChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.stores != prevProps.stores) {
			this.setState({ page: 1 });
		}
	}

	onPageChange(page) {
		this.setState({ page: page.selected + 1 });
	}

	renderListItem() {
		const storesInPage = this.props.stores.filter((store, index) => {
			return (index < this.state.page * this.state.limit && index >= (this.state.page - 1) * this.state.limit);
		});
		return storesInPage.map((store) => {
			return (
				<tr key={store.name} className={store.revenue < this.props.revenue ? style.low_revenue : style.on_revenue}>
					<td>{store.name}</td>
					<td className={style.revenue}>R$ {store.revenue.toLocaleString('pt-BR')}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div>
				<div className={style.stores_list_container}>
					<div className={style.stores_list}>
						<table className='table table-hover table-sm'>
							<thead>
							<tr>
								<th>Loja</th>
								<th>Faturamento</th>
							</tr>
							</thead>

							<tbody>
							{this.renderListItem()}							
							</tbody>
						</table>
					</div>
				</div>
				<div>
					<ReactPaginate 
						previousLabel={<SVGInline svg={LeftIcon} />}
						nextLabel={<SVGInline svg={RightIcon} />}
						breakLabel={<a className={style.page_link} href="">...</a>}
						breakClassName={style.page_item}
						pageCount={this.props.stores.length / this.state.limit}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={this.onPageChange}
						containerClassName={style.pagination_container}
						pageClassName={style.page_item}
						pageLinkClassName={style.page_link}
						previousClassName={style.page_item}
						nextClassName={style.page_item}
						previousLinkClassName={style.page_link + ' ' + style.icon}
						nextLinkClassName={style.page_link + ' ' + style.icon}
						activeClassName={style.active} 
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		stores: state.stores,
		revenue: state.revenue
	};
}

export default connect(mapStateToProps)(StoresList);
