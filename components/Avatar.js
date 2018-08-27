import React, { Component } from 'react';
import PropTypes from 'prop-types';
// We import ColorPropType from react-native rather than PropTypes.
// The PropTypes package contains validators for primitive JavaScript types like numbers and
// strings. While colors in React Native are strings,
// they follow a specific format that can be validated –
// React Native provides a handful of validators like ColorPropType for
// validating the contents of a value rather than just its primitive type.
import { ColorPropType, StyleSheet, Text, View } from 'react-native';

export default function Avatar({ size, backgroundColor, initials }) {
	const style = {
		width: size,
		height: size,
		borderRadius: size / 2, // render View as a circle
		backgroundColor,
	};
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.text}>{initials}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
	},
});

Avatar.propTypes = {
	initials: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	backgroundColor: ColorPropType.isRequired,
};
