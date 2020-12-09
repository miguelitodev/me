import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px 25px;
`;

export const LeftSide = styled.div`
	&:hover {
		cursor: default;
	}
`;

export const Text = styled.p`
	color: var(--font-color);
	font-weight: bold;
`;

export const RightSide = styled.ul`
	display: flex;
	flex-direction: row;
`;

export const Option = styled.li`
	margin: 0 10px;
	list-style: none;
`;

export const Linking = styled.a`
	&:hover {
		cursor: pointer;
	}
`;
