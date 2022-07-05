import React from "react";
import styled from "styled-components";

const Follower = ({ avatar_url, html_url, login }) => {
	return (
		<Card>
			<Image src={avatar_url} alt={login} />
			<Name>{login}</Name>
			<Details href={html_url}>view profile</Details>
		</Card>
	);
};

export default Follower;

const Card = styled.article`
	padding: 2rem 3rem;
	background: whitesmoke;
	border-radius: 0.7rem;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	text-align: center;
`;

const Image = styled.img`
	width: 9rem;
	height: 9rem;
	border-radius: 50%;
	object-fit: cover;
	margin-bottom: 0.7rem;
`;

const Name = styled.h4`
	margin-bottom: 1.5rem;
	font-size: 0.9rem;
	color: #333;
`;

const Details = styled.a`
	padding: 0.4rem 0.8rem;
	background: gray;
	color: white;
	font-size: 0.8rem;
	border-radius: 0.7rem;
	border-color: transparent;
	text-transform: uppercase;
	transition: all 0.3s linear;
	cursor: pointer;
`;
