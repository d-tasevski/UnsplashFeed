import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// We’ll also import a TouchableOpacity
// so that we can handle taps on the “Comments” text to take us to the comments screen.
import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

export default function AuthorRow({ fullname, linkText, onPressLinkText }) {
	return (
		<View style={styles.container}>
			<Avatar
				size={35}
				initials={getInitials(fullname)}
				backgroundColor={getAvatarColor(fullname)}
			/>
			{/* We’ll use numberOfLines={1} so that the Text is truncated 
				when it reaches the end of the line,
				rather than wrapping around to multiple lines. */}
			<Text style={styles.text} numberOfLines={1}>
				{fullname}
			</Text>
			{!!linkText && (
				<TouchableOpacity onPress={onPressLinkText}>
					<Text numberOfLines={1}>{linkText}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}
AuthorRow.propTypes = {
	fullname: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	onPressLinkText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	text: {
		flex: 1,
		marginHorizontal: 6,
	},
});
