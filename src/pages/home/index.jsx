import { useEffect, useState } from "react";
import Error from "../../components/error";
import Loader from "../../components/loader";
import api from "../../utils/api";
import Hero from "./hero";
import MovieList from "./movieList";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		let mounted = true;
		(async () => {
			if (mounted) setLoading(true);
			try {
				const res = await api.get("/genre/movie/list?language=tr");
				if (mounted) setGenres(res.data.genres);
			} catch (err) {
				if (mounted) setError(err.message);
			} finally {
				if (mounted) setLoading(false);
			}
		})();
		return () => {
			mounted = false;
		};
	}, []);
	return (
		<div>
			<Hero />

			{loading ? (
				<Loader />
			) : error ? (
				<Error message={error} />
			) : (
				genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
			)}
		</div>
	);
};

export default Home;
