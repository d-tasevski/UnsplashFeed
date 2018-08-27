import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';

export default class CommentInput extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
	};
	static defaultProps = {
		placeholder: '',
	};

	state = {
		text: '',
	};

	handleChangeText = text => this.setState({ text });

	handleSubmitEditing = () => {
		const { onSubmit } = this.props;
		const { text } = this.state;

		if (!text) return;

		onSubmit(text);
		return this.setState({ text: '' });
	};

	render() {
		const { placeholder } = this.props;
		const { text } = this.state;
		// We want to add a border on the bottom, but adding borders to TextInput
		// can be a bit unreliable as sometimes they don’t show up.
		// So we’ll wrap the TextInput in a View and style the View instead
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					value={text}
					placeholder={placeholder}
					underlineColorAndroid="transparent"
					onChangeText={this.handleChangeText}
					onSubmitEditing={this.handleSubmitEditing}
				/>
			</View>
		);
	}
}
// We can use StyleSheet.hairlineWidth as the border width to render
// the thinnest possible line on any given device.
// On a retina device for example, this would be less than 1.
const styles = StyleSheet.create({
	container: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		paddingHorizontal: 20,
		height: 60,
	},
	input: {
		flex: 1,
	},
});
