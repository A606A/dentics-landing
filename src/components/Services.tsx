import FlexSection from "./FlexSection";
import Image from "next/image";
import servicesImage from "../assets/services.svg";
import { AiOutlineSafety } from "react-icons/ai";

const Services = () => (
	<FlexSection sectionClassName="relative" wrapperClassName="items-start">
		<div className="absolute left-0 top-0 w-[calc(50%-2.5rem)] h-full bg-[#8888880c] rounded-br-[4rem] -z-10"></div>
		<div className="flex-1">
			<h2 className="text-4xl font-semibold">
				Завжди <span className="text-accent">посміхайтеся</span> при будь-якій
				нагоді
			</h2>
			<Image className="mt-20 w-full" src={servicesImage} alt="services" />
		</div>
		<div className="flex-1">
			<p className="relative text-lg">
				Ми також пропонуємо процедури, які покращують зовнішній вигляд вашої
				посмішки, надаючи вам впевненості в собі. Перелік наведено нижче.
			</p>
			<h3 className="mt-20 text-2xl font-semibold">Що ми пропонуємо</h3>
			<ul className="mt-8 grid grid-cols-2 gap-x-11 gap-y-6">
				{[
					"Профілактичні огляди",
					"Косметична дентологія",
					"Ортодонтологія",
					"Запобіжні огляди",
					"Невідкладна допомога",
					"Зубні імпланти",
					"Дитяча дентологія",
					"Телефонні консультації"
				].map((title, index) => (
					<li
						className="flex items-center gap-2 text-lg font-medium"
						key={index}
					>
						<AiOutlineSafety className="w-6 h-6" />
						{title}
					</li>
				))}
			</ul>
		</div>
	</FlexSection>
);

export default Services;
