import styled from "styled-components";

export const Container = styled.div`
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContentPresentation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	@media screen and (min-width: 900px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
`;

export const ImageAuthor = styled.img.attrs({
	src: "https://github.com/miguelrisquelme.png",
})`
	width: 128px;
	height: 128px;
	border-radius: 64px;
`;

export const TextContent = styled.div`
	margin-left: 0px;
	margin-top: 20px;
	text-align: center;

	@media screen and (min-width: 900px) {
		margin-top: 0px;
		margin-left: 15px;
		text-align: left;
	}
`;

export const NameAuthor = styled.h1`
	color: var(--font-color);
`;

export const RoleAuthor = styled.span`
	color: var(--font-color-2);
`;

export const ContentArrow = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Linking = styled.a`
	&:hover {
		cursor: pointer;
	}
`;
