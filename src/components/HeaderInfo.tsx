import twclsx from "@/utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	Icon: React.ReactNode;
	text: React.ReactNode;
	[x: string]: any;
}

const HeaderInfo = ({ Icon, text, className = "", ...rest }: IProps) => (
	<div className={twclsx("flex items-center gap-1", className)} {...rest}>
		{Icon}
		{text}
	</div>
);

export default HeaderInfo;
