import FlexSection from "./FlexSection";
import Image from "next/image";
import heroImage from "../assets/hero.svg";
import ButtonLink from "./ButtonLink";

const Hero = () => (
	<FlexSection>
		<div className="flex-1">
			<h1 className="text-[2.6rem] font-bold tracking-wide">
				Ми <span className="text-accent">якісно</span> виконуємо усі види
				стоматологічних послуг
			</h1>
			<p className="mt-6 text-lg text-secondary">
				Сучасна стоматологічна клініка, де Ви зможете отримати кваліфіковану
				консультацію та лікування
			</p>
            <div className="mt-16 flex items-center gap-7">
                <ButtonLink href="#booking">
                    Залишити заявку
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                    Дізнатися більше
                </ButtonLink>
            </div>
		</div>
		<div className="flex-1 hidden lg:block">
			<Image className="w-full" src={heroImage} alt="hero" />
		</div>
	</FlexSection>
);

export default Hero;
