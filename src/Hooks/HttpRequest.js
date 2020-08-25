import React, { useEffect, useState } from "react";

import axios from "axios";

export function useAxiosGet(url) {
	const [request, setRequest] = useState({
		data: null,
	});

	useEffect(() => {
		setRequest({
			data: null,
		});

		axios
			.get(url)
			.then((response) => {
				//setRequest({ data: response.data._embedded.blogs });
				setRequest({ data: response.data });
			})
			.catch(() => {
				setRequest({ data: null });
			});
	}, [url]);

	return request;
}
