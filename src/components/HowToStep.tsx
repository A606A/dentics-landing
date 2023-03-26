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
			"p-6 flex flex-col items-center text-center rounded-2xl bg-white",
			className
		)}
		{...rest}
	>
		{Icon}
		{text}
	</div>
);

export default HowToStep;
