import React, { Component } from 'react';
import style from '../styles/style.css';
import SearchBar from './SearchBar';
import RevenueInput from './RevenueInput';
import StoresList from './StoresList';
import StoresMap from './StoresMap';

export default class App extends Component {
  render() {
    return (
      <div>
		<div className={style.nav_bar}>
			<span>Desempenho das Lojas</span>
		</div>
		<div className='row'>
			<div className={'col-sm' + ' ' + style.margin_left}>
				<SearchBar />
				<StoresList />
			</div>

			<div className={'col-sm' + ' ' + style.margin_right}>
				<RevenueInput />
				<StoresMap />
			</div>
		</div>
      </div>
    );
  }
}
