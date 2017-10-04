import { h, Component } from "preact";


const LabelCell = (class extends Component {

	render() {
		const node = this.props.node;
		const nodeText = node.value;
		var labelStyle = {
			marginLeft:"16px",
			fontSize:"14px",
			height:"20px",
			whiteSpace: "nowrap"
		};
		const labelProps = {
			style: labelStyle
		};

		const label = (
			<span {...labelProps}>
				{nodeText}
			</span>
		)
		return label;

	}
});
export default LabelCell;