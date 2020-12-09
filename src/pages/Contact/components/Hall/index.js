import React from "react";

import LineContact from "./../LineContact";

import { Container, ContainerContent } from "./styles";

import { contacts } from "../../../../data/contacts";

const Hall = () => {
	return (
		<>
			<Container>
				<ContainerContent>
					{contacts.map((contact) => (
						<LineContact
							key={contact.id}
							title={contact.title}
							link={contact.link}
							content={contact.content}
						/>
					))}
				</ContainerContent>
			</Container>
		</>
	);
};

export default Hall;
