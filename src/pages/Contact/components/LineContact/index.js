import React from "react";

import { LineContactContainer, TextContact, Linking } from "./styles";

import { FaShareSquare } from "react-icons/fa";

const LineContact = ({ title, link, content }) => {
	return (
		<LineContactContainer>
			<TextContact>{title}</TextContact>
			<Linking href={link} target="_blank" title={content}>
				<FaShareSquare />
			</Linking>
		</LineContactContainer>
	);
};

export default LineContact;
