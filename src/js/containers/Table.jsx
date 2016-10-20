/**
 * Table.jsx
 * Created by Emily Gullo 10/14/2016
 **/
import React from 'react';
import reactable from 'reactable';

export default class Table extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount(){
		this.setState({
			data: [
  		  { Name: 'Griffin Smith', Age: 18 },
  		  { Age: 23,  Name: 'Lee Salminen' },
  		  { Age: 28, Position: 'Developer' },
  		  ]
		})
	}

	render() {
	    return  (
	      //pass in appropriate vars + styles
		  <Reactable.Table className="table" data={this.state.data} />
	    );
	}
}