import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import twclsx from "../utils/twclsx";

interface IProps extends LinkProps {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	className?: string;
	[x: string]: any;
}

const ButtonLink = ({
	href,
	children,
	variant = "primary",
	className = "",
	...rest
}: IProps) => (
	<Link
		href={href}
		className={twclsx(
			"block max-w-fit px-8 py-4 rounded-lg select-none transition duration-150",
			variant === "primary"
				? "text-white bg-accent hover:opacity-80"
				: "text-secondary bg-white border border-secondary hover:bg-zinc-200",
			className
		)}
		{...rest}
	>
		{children}
	</Link>
);

export default ButtonLink;
