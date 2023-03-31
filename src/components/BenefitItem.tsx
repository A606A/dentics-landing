import twclsx from "@/utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	Icon: React.ReactNode;
	name: React.ReactNode;
	description: React.ReactNode;
	[x: string]: any;
}

const BenefitItem = ({ Icon, name, description, className = "", ...rest }: IProps) => (
	<div
		className={twclsx(
			"flex-1 py-10 px-8 flex flex-col items-center text-center rounded-2xl bg-[#8888880c]",
			className
		)}
		{...rest}
	>
		{Icon}
		<h3 className="mt-6 text-2xl">{name}</h3>
		<p className="mt-3 text-secondary">{description}</p>
	</div>
);

export default BenefitItem;
