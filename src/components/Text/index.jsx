import React from 'react'

import './component.less'

class Text extends React.Component {

	constructor(props) {
		super(props)

		this.ascending = false
		this.state = { text: props.text }

		this._onClick = this._onClick.bind(this)
	}

	render() {
		return <h1 className='text' onClick={this._onClick}>{this.state.text}</h1>
	}

	_onClick() {
		let text = this.state.text

		if (this.ascending) {
			text = this.props.text.substr(0, text.length + 1)
		}
		else {
			text = this.props.text.substr(0, text.length - 1)
		}

		if (this.ascending && text.length === this.props.text.length) {
			this.ascending = false
		}
		else if (!this.ascending && text.length === 1) {
			this.ascending = true
		}

		this.setState({ text: text })
	}

}

export default Text
