import React, { Component } from 'react';

import { connect } from 'react-redux';

class PocketMoney extends Component {

	render(){
		return (
			<div className="row">
        <h2 className="text-center">You have <span className="label label-success">$ {this.props.pocketMoney}</span> amount to spend on Grocery Today!</h2>
        <br/>
      </div>
		);
	}

}

function mapStateToProps(state) {
	return {
		pocketMoney: state.pocketMoney
	}
}

export default connect(mapStateToProps, null)(PocketMoney);