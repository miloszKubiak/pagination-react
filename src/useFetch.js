import { useState, useEffect } from "react";
import paginate from "./utils";

const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		paginate(data);
		setData(data);
		setLoading(false);
     
	};

	useEffect(() => {
		getData();
	}, []);
	return { loading, data };
};
