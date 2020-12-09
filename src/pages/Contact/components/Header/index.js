import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineGithub, AiFillStar } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

import { Container, LeftSide, RightSide, Option, Linking } from "./styles";

const Header = () => {
	return (
		<>
			<Container>
				<LeftSide>
					<Link to="/">
						<FaArrowLeft color="var(--font-color-2)" size={25} />
					</Link>
				</LeftSide>
				<RightSide>
					<Option>
						<Linking>
							<AiFillStar size={25} color="var(--font-color)" />
						</Linking>
					</Option>
					<Option>
						<Linking href="https://github.com/miguelrisquelme" target="_blank">
							<AiOutlineGithub size={25} color="var(--font-color)" />
						</Linking>
					</Option>
				</RightSide>
			</Container>
		</>
	);
};

export default Header;
