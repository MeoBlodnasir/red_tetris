import React, { PropTypes } from 'react'


const Button = ({num, onClick}) => (
	  <button onClick={onClick}>
		       {num}
	    </button>
		)
export default Button

Button.propTypes = {
	num: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}
