import Slider, { Settings, CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import twclsx from "@/utils/twclsx";

interface IProps extends Settings {
	className?: string;
	children: React.ReactNode;
	[x: string]: any;
}

const PrevArrow = ({ onClick }: CustomArrowProps) => (
	<button
		className={twclsx(
			"absolute left-0 top-1/2 -translate-y-1/2 py-7 px-4 flex justify-center items-center",
			"bg-[#8888881A] transition hover:opacity-80"
		)}
		onClick={onClick}
	>
		<BsChevronLeft className="w-3 h-4 text-secondary" />
	</button>
);

const NextArrow = ({ onClick }: CustomArrowProps) => (
	<button
		className={twclsx(
			"absolute right-0 top-1/2 -translate-y-1/2 py-7 px-4 flex justify-center items-center",
			"bg-[#8888881A] transition hover:opacity-80"
		)}
		onClick={onClick}
	>
		<BsChevronRight className="w-3 h-4 text-secondary" />
	</button>
);

const Carousel = ({ className, children, ...rest }: IProps) => (
	<Slider
		className={className}
		dots={false}
		infinite={false}
		speed={500}
		slidesToShow={4}
		slidesToScroll={1}
		prevArrow={<PrevArrow />}
		nextArrow={<NextArrow />}
		responsive={[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				}
			}
		]}
		{...rest}
	>
		{children}
	</Slider>
);

export default Carousel;
