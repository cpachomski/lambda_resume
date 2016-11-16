import React, { Component } from 'react';

export default class FormSingle extends Component{

	componentWillMount() {
		this.setState({
			techs: [{id: 1}]
		})
	}

	addTechnology(e) {
		e.preventDefault(e)
		const newId = this.state.techs[this.state.techs.length - 1].id + 1	
		const newTech = {id: newId}	
		const techs = [...this.state.techs, newTech]
		this.setState({techs})
	}

	removeTechnology(e) {
		e.preventDefault(e)
		const techId = parseInt(e.target.value, 0)
		const techs = this.state.techs.filter((t) => t.id !== techId)
		this.setState({techs})
	}

	render() {
		const {position, removePosition} = this.props

		return (
			<div className='form--position'>
				<input type='text' placeholder='Position Title' name='title' />
				<input type='text' placeholder='Employer' name='employer' />
				<input type='text' placeholder='Location' name='location' />
				<textarea type='text-area' placeholder='Description' name='description' />
				<ul className='form--technologies'>
					<button className="form--add-tech"
							value={[position.id]}
							onClick={this.addTechnology.bind(this)}>+</button>
					{
						this.state.techs.map((tech) => {
							return (
								<li key={tech.id}  className='form--technology'>
									<input type='text' placeholder="Technology" name='tech' />
									<button value={tech.id}
											onClick={this.removeTechnology.bind(this)}>-</button>
								</li>
							)
						})
					}
				</ul>
					<button className='form--remove-position'
									value={position.id}
									onClick={removePosition.bind(this)}>remove position</button>

				<hr/>
			</div>
		)
	}
 
}