import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
	const { loading, data } = useFetch(); //data = array of arrays with followers
	const [page, setPage] = useState(0);
	const [followers, setFollowers] = useState([]); //followers = array of followers

	useEffect(() => {
		if (loading) return;
		setFollowers(data[page]);
	}, [loading, page]);

	const handlePage = (index) => {
		setPage(index);
	};

	const prevPage = () => {
		setPage((oldPage) => {
			let prevPage = oldPage - 1;
			if (prevPage < 0) {
				prevPage = data.length - 1;
			}
			return prevPage;
		});
	};

	const nextPage = () => {
		setPage((oldPage) => {
			let nextPage = oldPage + 1;
			if (nextPage > data.length - 1) {
				nextPage = 0;
			}
			return nextPage;
		});
	};

	return (
		<>
			<TitleWrapper>
				<Title>{loading ? "Loading..." : "pagination"}</Title>
				<Underline />
			</TitleWrapper>
			<Followers>
				<Container>
					{followers.map((follower) => {
						return <Follower key={follower.id} {...follower} />;
					})}
				</Container>
				{!loading && (
					<ButtonsContainer>
						<DirectionBtn onClick={prevPage}>Prev</DirectionBtn>
						{data.map((item, index) => {
							return (
								<PageButton
									key={index}
									active={index === page ? "active" : null}
									onClick={() => handlePage(index)}
								>
									{index + 1}
								</PageButton>
							);
						})}
						<DirectionBtn onClick={nextPage}>Next</DirectionBtn>
					</ButtonsContainer>
				)}
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

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	@media screen and (min-width: 775px) {
		margin: 0 auto;
		max-width: 700px;
		flex-wrap: nowrap;
	}
`;

const PageButton = styled.button`
	width: 2rem;
	height: 2rem;
	border-color: transparent;
	border-radius: 0.3rem;
	cursor: pointer;
	font-weight: bold;
	margin: 0.5rem;
	transition: all 0.3s linear;
	background: ${(props) => props.active === "active" && "gray"};
	color: ${(props) => props.active === "active" && "white"};
`;

const DirectionBtn = styled.button`
	background: transparent;
	border-color: transparent;
	font-weight: bold;
	text-transform: capitalize;
	letter-spacing: 0.2rem;
	margin: 0.5rem;
	font-size: 1rem;
	cursor: pointer;
`;
const PrevPage = styled.button``;
