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
				marginTop:"-2px", // !!! This must go
				paddingTop:"1px" // !!! it got worse
// 				marginTop:"-1px", // !!! This must go
// 				top:"0px" // !!! it got worse
			}
		};

		return (
			<input {...inputProps} />
		);
	}
});
export default BoolCell;