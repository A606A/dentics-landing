import twclsx from "../utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import Wrapper from "./Wrapper";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children?: React.ReactNode;
	sectionClassName?: string;
	wrapperClassName?: string;
	[x: string]: any;
}

const FlexSection = ({
	children,
	sectionClassName = "",
	wrapperClassName = "",
	...rest
}: IProps) => (
	<section className={twclsx("w-full py-24", sectionClassName)} {...rest}>
		<Wrapper
			className={twclsx(
				"w-full flex justify-between items-center gap-20",
				wrapperClassName
			)}
		>
			{children}
		</Wrapper>
	</section>
);

export default FlexSection;
