import React, { Component, StyleSheet, PropTypes, Navigator, View } from 'react-native';
import { Page, ActionBar, IconButton, SlideTabViewPager,
	VerticalGap, DragableList, IconSelectBar } from '../widgets';
import { CollectionDataContainer, SettingContainer } from '../containers';
import OrderListItem from './OrderListItem';
import ShopListItem from './ShopListItem';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { selectIndex: 1 };
	}
	onMenuSelect(selectIndex, item) {
		this.setState({selectIndex});
		this.refs.navigator.jumpTo(item);
	}
	render() {
		const initialRouteStack = [
			{key: 'orders', icon: 'assignment'},
			{key: 'shops', icon: 'shopping-basket'},
			{key: 'account', icon: 'account-circle'}
		];

		return (
			<Page>
				<ActionBar primary
					leftNode={<IconSelectBar items={initialRouteStack} selectIndex={this.state.selectIndex}
						onSelect={this.onMenuSelect.bind(this)}/>}
					rightNode={<IconButton src='power-settings-new'/>}/>
				<Navigator style={styles.container} ref='navigator' initialRouteStack={initialRouteStack}
					initialRoute={initialRouteStack[1]} renderScene={this.renderScene.bind(this)}/>
			</Page>
		);
	}
	renderScene(route, navigator) {
		switch(route.key) {
			case 'orders':
				return (
					<SlideTabViewPager mode='text' tabs={['ORDERED', 'DELIVERED']}
						onBindPager={(index) => {
							if (index === 0) {
								return (
									<CollectionDataContainer processPos='top' stateKey='orders' initFuncName='onRefresh'>
										<DragableList renderSeparator={() => <VerticalGap/>}
											renderRow={order => <OrderListItem {...order} onPress={() => console.log(order)}/>}/>
									</CollectionDataContainer>
								);
							} else {
								return (
									<CollectionDataContainer processPos='top' stateKey='delivers' initFuncName='onRefresh'>
										<DragableList renderSeparator={() => <VerticalGap/>}
											renderRow={order => <OrderListItem {...order} onPress={() => console.log(order)}/>}/>
									</CollectionDataContainer>
								);
							}
						}}/>
				);
			case 'shops':
				return (
					<CollectionDataContainer processPos='top' stateKey='shops' initFuncName='onRefresh'>
						<DragableList renderSeparator={() => <VerticalGap/>}
							renderRow={shop => <ShopListItem {...shop} onPress={this.props.openShopPage.bind(this, shop)}/>}/>
					</CollectionDataContainer>
				);
			case 'account':
				return (
					<SettingContainer openRatingPage={this.props.openRatingPage}
						openNotificationPage={this.props.openNotificationPage}/>
				);
		}
	}
}

HomePage.propTypes = {
	openShopPage: PropTypes.func.isRequired,
	openRatingPage: PropTypes.func.isRequired,
	openNotificationPage: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default HomePage;

