import React, {useState} from "react"
import { Button, TextField } from '@material-ui/core';

function Test() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Test1</h1>
			<p>you clicked {count} times!</p>
			<button onClick={() => setCount(count +1)}> click </button>
				<div>
			  <TextField label="Username" />
		      <TextField label="Password" type="password" />
		      <Button variant="contained" color="primary">
		        Submit
		      </Button>
		      </div>
		</div>
		)
}

export default Test