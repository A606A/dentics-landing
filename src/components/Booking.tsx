import SectionHeading from "./SectionHeading";
import FlexSection from "./FlexSection";
import bookingImage from "../assets/booking.svg";
import Image from "next/image";
import twclsx from "@/utils/twclsx";

const Booking = () => (
	<FlexSection>
		<SectionHeading
			className="mb-20"
			direction="left"
			title={
				<h2 className="flex-1 text-4xl font-semibold tracking-wide">
					Запишіться на консультацію{" "}
					<span className="text-[2.6rem] font-bold">вже сьогодні</span>
				</h2>
			}
			subtitle={
				<h3 className="flex-1 text-4xl font-semibold text-right">
					Ми чекаємо на <span className="text-accent">Вас</span>
				</h3>
			}
		/>
		<div className="flex-1">
			<Image className="w-full" src={bookingImage} alt="booking" />
		</div>
		<div className="flex-1">
			<form className="w-full flex flex-col gap-6">
				<div className="flex gap-6">
					<input
						className="flex-1 px-6 py-3 border border-[#888888CC] placeholder:text-[#888888CC] rounded-lg"
						placeholder="Прізвище та ім’я..."
						type="text"
					/>
					<input
						className="flex-1 px-6 py-3 border border-[#888888CC] placeholder:text-[#888888CC] rounded-lg"
						placeholder="Номер телефону..."
						type="number"
					/>
				</div>
				<textarea
					className="px-6 py-3 border border-[#888888CC] placeholder:text-[#888888CC] rounded-lg"
					placeholder="Додаткова інформація..."
				/>
				<button
					className={twclsx(
						"px-8 py-4 rounded-lg select-none text-white bg-accent hover:opacity-80",
						"transition duration-150"
					)}
				>
					Залишити заявку
				</button>
			</form>
		</div>
	</FlexSection>
);

export default Booking;
