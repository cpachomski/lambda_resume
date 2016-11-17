import React, { Component } from 'react';
import FormSingle from './FormSingle';
import fs from 'fs';

export default class Form extends Component {
	constructor() {
		super()

		this.state = {
			history: [
				{ id: 1 }
			],
			jobs: []
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

	handleSubmit(e) {
		let jobs = []
		const forms = document.getElementsByClassName('form--position') 
		Array.prototype.forEach.call(forms, (form) => {
			let jobHistory = {};

			jobHistory.title = form.title.value
			jobHistory.employer = form.employer.value
			jobHistory.location = form.location.value
			jobHistory.description = form.description.value
			jobHistory.technologies = []

			if (form.tech.length > 1) {
				Array.prototype.forEach.call(form.tech, (t) => {
					jobHistory.technologies.push(t.value)
				})
			} else {
				jobHistory.technologies.push(form.tech.value)
			}
 			
 			jobs.push(jobHistory)
		})

		this.setState({jobs})
		this.writeJobsToEnv(jobs)
	}

	writeJobsToEnv(jobs) {
		console.log(jobs);
		fetch('/makeLambda', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: jobs
		})
	}

	render() {
		const { history } = this.state
		console.log(this.state)
		return (
			<div className='form--container'>
				<div className='form--border'>
					<h3>Work History</h3>
					
					<div>
						{
							history.map((position, i) => {
								return (
									<FormSingle key={position.id} position={position} removePosition={this.removePosition.bind(this)} idx={i} />
								)
							})
						}
					</div>
					<div className='form--controls'>
						<button className="form--add-p"
							onClick={this.addPosition.bind(this)}>Add Position</button>
						<input type='submit' 
							   value='submit'
							   onClick={this.handleSubmit.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}
}