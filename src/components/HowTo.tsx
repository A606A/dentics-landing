import FlexSection from "./FlexSection";
import HowToStep from "./HowToStep";
import { BsTelephone, BsCalendar4Event, BsClipboardCheck } from "react-icons/bs";

const HowTo = () => (
	<FlexSection sectionClassName="py-16 bg-accent">
		<div className="flex-1">
			<h2 className="text-4xl font-semibold text-white">
				Як отримати наші послуги?
			</h2>
			<p className="pt-3 text-xl text-white">Просто виконайте наступні кроки:</p>
		</div>
		<div className="flex-1 flex items-center gap-6 text-lg font-medium">
			<HowToStep
				Icon={<BsTelephone className="w-[2.6rem] h-[2.6rem] mb-4" />}
				text="Запишіться на прийом"
			/>
			<HowToStep
				Icon={<BsCalendar4Event className="w-[2.6rem] h-[2.6rem] mb-4" />}
				text="Оберіть дату та час"
			/>
			<HowToStep
				Icon={<BsClipboardCheck className="w-[2.6rem] h-[2.6rem] mb-4" />}
				text="Відвідайте спеціаліста"
			/>
		</div>
	</FlexSection>
);

export default HowTo;
