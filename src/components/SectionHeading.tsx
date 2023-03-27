import twclsx from "@/utils/twclsx";

interface IProps {
	direction: "left" | "right";
	title: React.ReactNode;
	subtitle: React.ReactNode;
	className?: string;
}

const SectionHeading = ({ direction, title, subtitle, className = "" }: IProps) => (
	<div
		className={twclsx(
			"relative flex flex-grow justify-between items-center",
			className
		)}
	>
		{direction === "left" ? (
			<>
				{title}
				{subtitle}
			</>
		) : (
			<>
				{subtitle}
				{title}
			</>
		)}
		<hr
			className={twclsx(
				"absolute bottom-0 w-3/4 h-[1px] bg-[#88888830]",
				direction === "left" ? "right-0" : "left-0"
			)}
		/>
	</div>
);

export default SectionHeading;
