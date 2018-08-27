import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, ViewPropTypes, SafeAreaView } from 'react-native';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default class Feed extends Component {
	static propTypes = {
		style: ViewPropTypes.style,
	};
	static defaultProps = { style: null };

	state = {
		loading: true,
		error: false,
		items: [],
	};

	// NOTE: We made componentDidMount an async function so that we can use the await syntax within it.
	// This means the function will return a promise.
	// React doesn’t use the return value of componentDidMount for anything, so this is safe.
	async componentDidMount() {
		try {
			const items = await fetchImages();
			this.setState({
				loading: false,
				items,
			});
		} catch (e) {
			this.setState({
				loading: false,
				error: true,
			});
		}
	}

	render() {
		const { style } = this.props;
		const { loading, error, items } = this.state;

		if (loading) {
			return <ActivityIndicator size="large" />;
		}
		if (error) {
			return <Text>Error...</Text>;
		}
		return (
			<SafeAreaView style={style}>
				<CardList items={items} />
			</SafeAreaView>
		);
	}
}
