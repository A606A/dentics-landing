import FlexSection from "./FlexSection";
import laserImage from "../assets/laser.svg";
import scannerImage from "../assets/scanner.svg";
import implantImage from "../assets/implant.svg";
import Image from "next/image";
import BenefitItem from "./BenefitItem";
import SectionHeading from "./SectionHeading";

const Benefits = () => (
	<FlexSection id="benefits">
		<SectionHeading
			direction="left"
			title={
				<>
					Що робить нашу клініку{" "}
					<span className="text-[2.6rem] font-bold">видатною</span>
				</>
			}
			subtitle={
				<>
					Наші <span className="text-accent">особливості</span>
				</>
			}
		/>
		<div className="mt-20 flex gap-4 lg:gap-14 w-full justify-between flex-col sm:flex-row">
			<BenefitItem
				Icon={<Image className="w-24 h-24" src={laserImage} alt="laser" />}
				name="Сучасні лазери"
				description="Продвинуті Диодні лазери. Ваше лікування буде швидким та безболісним"
			/>
			<BenefitItem
				className="lg:mt-12"
				Icon={<Image className="w-24 h-24" src={scannerImage} alt="scanner" />}
				name="3D сканери"
				description="Високотехнологічні 3D сканери роблять швидкісні знімки в автоматичному режимі"
			/>
			<BenefitItem
				Icon={<Image className="w-24 h-24" src={implantImage} alt="implant" />}
				name="Дентологічні імпланти"
				description="30+ років встановлень імплантів. Ви зможете насолоджуватися улюбленою їжею знову!"
			/>
		</div>
	</FlexSection>
);

export default Benefits;
