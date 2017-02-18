import React from "react"
import { connect } from "react-redux"

import { upNum } from "../actions/numActions"

@connect((store) => {
	return {
		num: store.num.num,
	};
})

export default class Layout extends React.Component {
	upNum() {
		this.props.dispatch(upNum())
	}

	render() {
		const { num } = this.props;

		return <button onClick={this.upNum.bind(this)}>{num}</button>
	}
}
