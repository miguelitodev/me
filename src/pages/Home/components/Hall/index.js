import React from "react";
import { Link } from "react-router-dom";

import { FaArrowDown } from "react-icons/fa";

import {
	Container,
	ContentPresentation,
	ImageAuthor,
	TextContent,
	NameAuthor,
	RoleAuthor,
	ContentArrow,
} from "./styles";

const Hall = () => {
	return (
		<>
			<Container>
				<ContentPresentation>
					<ImageAuthor />
					<TextContent>
						<NameAuthor>Miguel Riquelme</NameAuthor>
						<RoleAuthor>Full Stack Developer</RoleAuthor>
					</TextContent>
				</ContentPresentation>
				<ContentArrow>
					<Link to="/contact">
						<FaArrowDown color="var(--font-color-2)" size={35} />
					</Link>
				</ContentArrow>
			</Container>
		</>
	);
};

export default Hall;
