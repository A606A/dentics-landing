import Image, { StaticImageData } from "next/image";
import ButtonLink from "./ButtonLink";

interface IProps {
	image: string | StaticImageData;
	name: string;
	occupation: string;
}

const TeamMember = ({ image, name, occupation }: IProps) => (
	<div className="px-7 flex flex-col items-center text-center">
		<Image className="w-full max-w-[12rem]" src={image} alt="dr1" />
		<p className="mt-7 text-lg">{name}</p>
		<p className="mt-2 text-secondary">{occupation}</p>
		<ButtonLink
			className="mt-7 inline-block border-accent text-accent"
			href="#booking"
			variant="secondary"
		>
			Записатися
		</ButtonLink>
	</div>
);

export default TeamMember;
