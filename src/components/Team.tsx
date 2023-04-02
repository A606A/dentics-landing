"use client";

import SectionHeading from "./SectionHeading";
import Wrapper from "./Wrapper";
import teamMember from "../assets/dr1.png";
import TeamMember from "./TeamMember";
import Carousel from "./Carousel";

const Team = () => (
	<section id="team">
		<Wrapper>
			<SectionHeading
				direction="right"
				title={
					<>
						Зустрічайте нашу команду{" "}
						<span className="text-[2.6rem] font-bold">професіоналів</span>
					</>
				}
				subtitle={
					<>
						Наші <span className="text-accent">найкращі</span> спеціалісти
					</>
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
