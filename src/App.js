import React from 'react';
import Form from './components/Form';

const lambdaIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/AWS_Simple_Icons_Compute_AWSLambda.svg/2000px-AWS_Simple_Icons_Compute_AWSLambda.svg.png';

const App = () => (
	<div className='app--container'>
		<h1><img alt='aws lambda icon' className='lambda--icon' src={lambdaIcon}/> AWS Lambda JSON API Builder</h1>
		<p>Enter your work history below and we'll generate an API endpoint that returns your JSON document via an AWS Lambda function.</p>
		<Form />
	</div>
)


export default App;