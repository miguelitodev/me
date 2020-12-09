import styled from "styled-components";

export const LineContactContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	width: 180px;
	margin: 10px 0px;
`;

export const TextContact = styled.p`
	font-size: 24px;
	font-weight: bold;
	color: var(--font-color);
`;

export const Linking = styled.a`
	color: var(--font-color);
	cursor: pointer;
	font-size: 20px;
`;
