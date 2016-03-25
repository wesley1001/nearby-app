import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import { Avatar, StarMarkingBar, TitleText, MoreFooter, THEME_COLOR } from '../widgets';
import { LoadingView } from '../widgets';

class AccountCard extends Component {
	componentDidMount() {
		if (!this.props.account.id) {
			this.props.getAccount(this.props.token, this.props.userId);
		}
	}
	render() {
		const { id, name, photo, gender, rating, loading } = this.props.account;

		if (!id || loading) {
			return <LoadingView style={styles.container} loading={true}/>;
		} else {
			return (
				<View style={styles.container}>
					<Avatar src={photo.url} size='normal'/>
					<View style={styles.centerContent}>
						<TitleText style={styles.nameText}>{name}</TitleText>
						<StarMarkingBar mark={rating}/>
					</View>
					<MoreFooter style={styles.reivew}>'Reviews'</MoreFooter>
				</View>
			);
		}
	}
}

AccountCard.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	mark: PropTypes.number.isRequired,
	reviewCount: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#20b2aa33',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20
	},
	centerContent: {
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		flex: 1,
		paddingHorizontal: 20
	},
	nameText: {
		fontSize: 18,
		color: 'black'
	},
	reivew: {
		alignSelf: 'flex-end'
	}
});

export default AccountCard;