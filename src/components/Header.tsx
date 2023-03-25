import HeaderInfo from "./HeaderInfo";
import Wrapper from "./Wrapper";
import { BsTelephone, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

const Header = () => (
	<header className="w-full bg-white shadow-sm">
		<div className="w-full py-2 border-b border-[#88888830]">
			<Wrapper className="flex items-center gap-4 text-xs text-secondary font-medium">
				<HeaderInfo Icon={<BsTelephone />} text="098 988 8888" />
				<HeaderInfo Icon={<BsTelephone />} text="095 985 8585" />
				<HeaderInfo Icon={<GoLocation />} text="Київ, вул. Бульварська 51" />
				<HeaderInfo Icon={<BsClock />} text="Пн.-Пт. 06:00 - 18:00 " />
			</Wrapper>
		</div>
		<div className="w-full py-4">
			<Wrapper className="flex items-center justify-between">
                <Link className="text-2xl font-bold transition hover:opacity-80" href="/">
                    <span className="text-accent">Dent</span>ics
                </Link>
                <div className="flex items-center gap-7 text-sm font-medium">
                    <Link className="transition hover:text-accent" href="#services">
                        Послуги
                    </Link>
                    <Link className="transition hover:text-accent" href="#benefits">
                        Переваги
                    </Link>
                    <Link className="transition hover:text-accent" href="#team">
                        Спеціалісти
                    </Link>
                    <ButtonLink className="px-7 py-3" href="#booking">
                        Консультація
                    </ButtonLink>
                </div>
            </Wrapper>
		</div>
	</header>
);

export default Header;
