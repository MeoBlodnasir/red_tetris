import React from "react"
import { connect } from 'react-redux'
import Button from '../components/Button'
import { upNum } from '../actions/numActions'

const Layout = ({num, onButtonClick}) => (
	<Button num={num} onClick={onButtonClick} />
	)

const mapStateToProps = (state) => {
	return {
		num: state.num.num
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick: () => { dispatch(upNum()) }
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default App;
