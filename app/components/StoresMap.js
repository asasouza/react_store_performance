import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { connect } from 'react-redux';
import style from '../styles/style.css';
import RedMarker from '../resources/images/marker-red.png';
import BlueMarker from '../resources/images/marker-blue.png';

class StoresMap extends Component {
	constructor(props) {
		super(props);
		this.state = { lat: -23.572424, lon: -46.65384, zoom: 11 };
	}

	renderMapMarker() {
		const iconLowRevenue = L.icon({
			iconUrl: RedMarker,
			popupAnchor: [12, 5]
		});

		const iconOnRevenue = L.icon({
			iconUrl: BlueMarker,
			popupAnchor: [12, 5]
		});

		return this.props.stores.map(store => {
			return (
				<Marker
					key={store.name}
					position={[store.latitude, store.longitude]}
					icon={store.revenue < this.props.revenue ? iconLowRevenue : iconOnRevenue}
				> 
					<Popup>
						<b>Loja: </b>{store.name} <br />
						<b>Cidade: </b>{store.city} / {store.state} <br />
						<b>Faturamento: </b>R$ {store.revenue.toLocaleString('pt-BR')} <br />
					</Popup>
				</Marker>
			);
		});
	}

	render() {
		const position = [this.state.lat, this.state.lon];

		return (
			<Map className={style.leaflet_map_container} center={position} zoom={this.state.zoom}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
				/>
				{this.renderMapMarker()}
			</Map>
		);
	}
}

function mapStateToProps(state) {
	return {
		stores: state.stores,
		revenue: state.revenue
	};
}

export default connect(mapStateToProps)(StoresMap);
