import React, { Component } from 'react';
import FormSingle from './FormSingle';

/*
	var job = {
		title: String, Text Input
		employer: String,Text Input
		location: String, Text Input
		description: String Text Area
		technologies:[String] Text Area
		start: Date, Date Picker
		end: Date, Date Picker
	}
*/

export default class Form extends Component {
	constructor() {
		super()

		this.state = {
			history: [
				{ id: 1 },
				{ id: 2 }
			]
		}
	}

	addPosition() {
		let newId;
		if (this.state.history.length > 0) {
			newId = this.state.history[this.state.history.length - 1].id + 1
		} else { 
			newId = 1 
		}

		const newPosition = {id: newId}
		const history = [...this.state.history, newPosition]
		this.setState({history})
	}

	removePosition(e) {
		e.preventDefault(e)
		const positionId = parseInt(e.target.value, 0)
		const history = this.state.history.filter((p) => p.id !== positionId)
		this.setState({history})
	}


	render() {
		const { history } = this.state;
		console.log(this.state)
		return (
			<div className='form--container'>
				<h2>Work History</h2>
				<div className='form--controls'>
					<button className="form--add-p"
							onClick={this.addPosition.bind(this)}>+</button>
				</div>
				<form>
					{
						history.map((position, i) => {
							return (
								<FormSingle key={position.id} position={position} removePosition={this.removePosition.bind(this)} />
							)
						})
					}
					<input type='submit' value='submit'/>
				</form>
			</div>
		)
	}
}