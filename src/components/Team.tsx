"use client";

import SectionHeading from "./SectionHeading";
import Wrapper from "./Wrapper";
import teamMember from "../assets/dr1.png";
import TeamMember from "./TeamMember";
import Carousel from "./Carousel";

const Team = () => (
	<section>
		<Wrapper>
			<SectionHeading
				direction="right"
				title={
					<h2 className="flex-1 text-4xl font-semibold tracking-wide text-right">
						Зустрічайте нашу команду{" "}
						<span className="text-[2.6rem] font-bold">професіоналів</span>
					</h2>
				}
				subtitle={
					<h3 className="flex-1 text-4xl font-semibold">
						Наші <span className="text-accent">найкращі</span> спеціалісти
					</h3>
				}
			/>
			<div className="mt-20">
				<Carousel className="px-20">
					{Array.from(Array(6), (_, index) => (
						<TeamMember
							image={teamMember}
							name="Іван Примак"
							occupation="Пародонтолог"
							key={index}
						/>
					))}
				</Carousel>
			</div>
		</Wrapper>
	</section>
);

export default Team;
