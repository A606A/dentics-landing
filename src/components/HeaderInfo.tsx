import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	Icon: React.ReactNode;
	text: React.ReactNode;
	[x: string]: any;
}

const HeaderInfo = ({ Icon, text, className = "", ...rest }: IProps) => (
	<div className="flex items-center gap-1" {...rest}>
		{Icon}
		{text}
	</div>
);

export default HeaderInfo;
