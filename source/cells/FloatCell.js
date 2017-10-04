import { h, Component } from "preact";


const FloatCell = (class extends Component {

	constructor(props) {
		super(props);
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleFocusText = this.handleFocusText.bind(this);
		this.handleBlurText = this.handleBlurText.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.refCallback = this.refCallback.bind(this);
		this.element = null;
	}

	handleChangeText(e) {
		const value = e.target.value;
		const nodeId = this.props.node.id;
		this.props.changeSetting(nodeId,value);
	}

	handleFocusText(e) {
		window.addEventListener("keydown", this.handleKeyDown, false);
	}

	handleBlurText(e) {
		window.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown(e) {
		if (e.keyCode !== 13) return;
		e.stopPropagation();
		e.preventDefault();
		this.element.blur();
		return false;
	}

	refCallback(element) {
		if (this.element === null) this.element = element;
	}

	render() {
		const { id } = this.props;
		const node = this.props.node;

		var textFieldStyle = {
			marginLeft:"16px",
			border:"0px",
			fontSize:"14px",
			height:"20px",
			left:"-1px", // fudge
			top:"-2px", // fudge
			backgroundColor:"white",
			whiteSpace: "nowrap"
		};

		const textFieldProps = {
			type : "text",
			name : id,
			style: textFieldStyle,
			value : node.value,
			ref: this.refCallback
		};

		textFieldProps.onChange = this.handleChangeText;
		textFieldProps.onFocus = this.handleFocusText;
		textFieldProps.onBlur = this.handleBlurText;
		textFieldProps.onKeyDown = this.handleKeyDownText;

		const textField = (
			<input {...textFieldProps} />
		);

		return textField;
	}
});
export default FloatCell;