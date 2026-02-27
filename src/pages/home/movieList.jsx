import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../utils/constants";

const MovieList = ({ genre }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const params = { with_genres: genre.id };
		api
			.get("/discover/movie", { params })
			.then((res) => setMovies(res.data.results))
			.catch((err) => console.log(err));
	}, [genre.id]);
	return (
		<div className="my-10">
			<h1 className="text-3xl font-bold mb-5">
				{genre.name}
			</h1>

			<Splide
				options={{
					autoWidth: true,
					gap: "20px",
					pagination: false,
					type: "loop",
				}}>
				{movies.map((movie) => (
					<SplideSlide className="overflow-hidden max-w-75 rounded-xl">
						<Link to={`/movie/${movie.id}`}>
							<img
								src={BASE_IMG_URL + movie.poster_path}
								className="h-full cursor-pointer transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border rounded-xl border-transparent hover:border-white/20"
							/>
						</Link>
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};

export default MovieList;
