import React, { Component } from 'react';
import FormSingle from './FormSingle';

export default class Form extends Component {
	constructor() {
		super()

		this.state = {
			history: [
				{ id: 1 }
			]
		}
	}

	addPosition(e) {
		e.preventDefault(e)
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
		const { history } = this.state

		return (
			<div className='form--container'>
				<div className='form--border'>
					<h3>Work History</h3>
					
					<form>
						{
							history.map((position, i) => {
								return (
									<FormSingle key={position.id} position={position} removePosition={this.removePosition.bind(this)} idx={i} />
								)
							})
						}
						<div className='form--controls'>
							<button className="form--add-p"
								onClick={this.addPosition.bind(this)}>Add Position</button>
							<input type='submit' value='submit'/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}