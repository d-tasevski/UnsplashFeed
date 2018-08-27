import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class CommentList extends Component {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.string).isRequired,
	};

	renderItem = (item, index) => (
		<View key={index} style={styles.comment}>
			<Text>{item}</Text>
		</View>
	);

	render() {
		const { items } = this.props;
		// Unlike FlatList, we don’t need to deal with the keyExtractor and data props.
		//  We can simply render the children of the ScrollView as we would for a View
		return <ScrollView>{items.map(this.renderItem)}</ScrollView>;
	}
}

const styles = StyleSheet.create({
	comment: {
		marginLeft: 20,
		paddingVertical: 20,
		paddingRight: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'rgba(0,0,0,0.05)',
	},
});
