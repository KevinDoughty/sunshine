import { h, Component } from "preact";


const ListCell = (class extends Component {

	constructor(props) {
		super(props);
		this.handleListChange = this.handleListChange.bind(this);
		
	}

	handleListChange(e) {
		const value = e.target.value;
		const nodeId = this.props.node.id;
		this.props.changeSetting(nodeId,value);
	}

	render(props,state) {
		const node = this.props.node;
		const value = node.value;
		const values = node.listValues;
		const labels = node.listLabels;
		const children = values.map( (item,index) => {
			return (
				<option value={item}>{labels[index]}</option>
			);
		});
		return (
			<select value={value} onChange={this.handleListChange} >
				{children}
			</select>
		);
	}
});
export default ListCell;