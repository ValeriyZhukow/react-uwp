import * as React from "react";

import ElementState from "../../components/ElementState";
import { ThemeType } from "react-uwp/style/ThemeType";

let theme: ThemeType;
const defaultProps: IconProps = __DEV__ ? require("./devDefaultProps").default : {};

export interface DataProps {
	hoverStyle?: React.CSSProperties;
}
interface IconProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}
interface IconState {}

export default class Icon extends React.Component<IconProps, IconState> {
	static defaultProps: IconProps = {
		...defaultProps
	};
	state: IconState = {};
	static contextTypes = { theme: React.PropTypes.object };

	render() {
		const { style, hoverStyle, children, ...attributes } = this.props;
		theme = this.context.theme;

		return (
			<ElementState
				{...attributes}
				style={{
					fontFamily: "Segoe MDL2 Assets",
					userSelect: "none",
					fontSize: 22,
					cursor: "default",
					color: theme.baseHigh,
					...style
				}}
				hoverStyle={hoverStyle || { color: theme.accent }}
			>
				<p>{children || "&#xE73E;"}</p>
			</ElementState>
		);
	}
}
