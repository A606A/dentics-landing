import FlexSection from "./FlexSection";
import HowToStep from "./HowToStep";
import { BsTelephone, BsCalendar4Event, BsClipboardCheck } from "react-icons/bs";
import twclsx from "@/utils/twclsx";

const HowTo = () => (
	<FlexSection
		sectionClassName="py-16 bg-accent"
		wrapperClassName="lg:flex-col lg:items-start xl:flex-row xl:items-center"
	>
		<div className="flex-1">
			<h2 className="text-4xl font-semibold text-white">
				Як отримати наші послуги?
			</h2>
			<p className="pt-3 text-xl text-white">Просто виконайте наступні кроки:</p>
		</div>
		<div
			className={twclsx(
				"mt-9 flex-1 flex flex-col gap-6 text-lg font-medium",
				"sm:flex-row sm:items-center xl:mt-0"
			)}
		>
			<HowToStep
				Icon={<BsTelephone className="w-[2.6rem] h-[2.6rem] sm:mb-4" />}
				text="Запишіться на прийом"
			/>
			<HowToStep
				Icon={<BsCalendar4Event className="w-[2.6rem] h-[2.6rem] sm:mb-4" />}
				text="Оберіть дату та час"
			/>
			<HowToStep
				Icon={<BsClipboardCheck className="w-[2.6rem] h-[2.6rem] sm:mb-4" />}
				text="Відвідайте спеціаліста"
			/>
		</div>
	</FlexSection>
);

export default HowTo;
