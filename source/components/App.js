import { h, Component } from "preact";
import { connect } from "preact-redux";
import * as actions from "../actions.js";

import PairView from "./PairView.js";
import Interact from "../interact.js";
import ListPane from "./ListPane.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		this.resize = this.resize.bind(this);
	}
	componentDidMount() {
		window.addEventListener("resize", this.resize, false);
	}
	componentWillUnmount() {
		window.removeEventListener("resize",this.resize);
	}
	resize() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		this.setState({ width, height });
	}
	render(props,state) {

		const dividerWidth = 9.0;
		const width = document.body.offsetWidth;
		const height = document.body.offsetHeight;
		const headerHeight = 38;
		const dividerRatio = this.props.now.dividerRatio;
		const controlHeight = 20;
		const paneHeight = height - controlHeight;
		const pairFrame = {origin:{x:0,y:0}, size:{width,height}};
		const pairProps = {
			dividerWidth:dividerWidth,
			dividerRatio:dividerRatio,
			resizeDivider:this.props.resizeDivider,
			draggingDivider:this.props.draggingDivider,
			frame:pairFrame
		}

		return (
			<PairView {...pairProps} >
				<ListPane fileName="sunshine" />
				<Interact
					radius={20}
					rings={50}
					sides={50}
					shape={1}
				
					width={this.state.width}
					height={this.state.height}
				/>
			</PairView>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return Object.assign({}, state, ownProps);
}
const ConnectedApp = connect(mapStateToProps, actions)(App);
export default ConnectedApp;