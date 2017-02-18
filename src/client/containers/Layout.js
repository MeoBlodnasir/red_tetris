import React from "react"
import { connect } from 'react-redux'
import Button from '../components/Button'

const Layout = (num, onButtonClick) => {
	<Button num={num} onClick={onButtonClick} />
}

const mapStateToProps = (state) => {
	return {
		num: state.num,
	}
}

const handleClick = () => {
	return {
		type: "UP",
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick: () => { dispatch(handleClick) }
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default App;
