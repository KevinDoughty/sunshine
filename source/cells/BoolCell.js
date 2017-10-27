import { h, Component } from "preact";


const BoolCell = (class extends Component {

	constructor(props) {
		super(props);
		this.handleCheckClick = this.handleCheckClick.bind(this);
	}

	handleCheckClick(e) {
		const nodeId = this.props.node.id;
		const value = !this.props.node.value;
		this.props.changeSetting(nodeId,value);
	}

	render() {
		const { id } = this.props;
		const node = this.props.node;
		const checked = node.value;
		
		const inputProps = {
			type : "checkbox",
			id : id,
			name : id,
			checked : checked,
			onClick: this.handleCheckClick,
			style: {
				zIndex: 1,
				width:"16px",
				height:"20px",
				marginTop:"-1px" // !!! This must go
			}
		};

		return (
			<input {...inputProps} />
		);
	}
});
export default BoolCell;