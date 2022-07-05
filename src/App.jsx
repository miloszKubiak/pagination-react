import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
	const { loading, data } = useFetch();
	console.log(data);

	return (
		<>
			<TitleWrapper>
				<Title>{loading ? "Loading..." : "pagination"}</Title>
				<Underline />
			</TitleWrapper>
			<Followers>
				<Container>
					{data.map((follower) => {
						return <Follower key={follower.id} {...follower} />;
					})}
				</Container>
			</Followers>
		</>
	);
}

export default App;

const TitleWrapper = styled.div`
	text-align: center;
	margin: 4rem 0;
`;

const Title = styled.h1``;

const Followers = styled.section`
	width: 90vw;
	max-width: 1170px;
	margin: 5rem auto;
`;

const Container = styled.div`
	display: grid;
	gap: 2rem;
	margin-bottom: 4rem;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;

const Underline = styled.div`
	margin: 1.2rem auto;
	width: 8rem;
	height: 0.3rem;
	background: gray;
`;
