import twclsx from "@/utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	Icon: React.ReactNode;
	text: React.ReactNode;
	[x: string]: any;
}

const HowToStep = ({ Icon, text, className = "", ...rest }: IProps) => (
	<div
		className={twclsx(
			"p-6 flex items-center gap-x-3 rounded-2xl bg-white sm:flex-col sm:text-center sm:gap-x-0",
			className
		)}
		{...rest}
	>
		{Icon}
		{text}
	</div>
);

export default HowToStep;
