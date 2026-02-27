import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/error";
import Loader from "../../components/loader";
import api from "../../utils/api";
import Actors from "./actors";
import Banner from "./banner";
import Buttons from "./buttons";
import Content from "./content";

const Movie = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		let mounted = true;
		(async () => {
			if (mounted) setLoading(true);
			const params = { append_to_response: "credits" };
			try {
				const res = await api.get(`/movie/${id}`, { params });
				if (mounted) setMovie(res.data);
			} catch (err) {
				if (mounted) setError(err.message);
			} finally {
				if (mounted) setLoading(false);
			}
		})();
		return () => {
			mounted = false;
		};
	}, [id]);

	if (loading) return <Loader />;
	if (error) return <Error message={error} />;

	return (
		<div>
			<Buttons movie={movie} />
			<Banner movie={movie} />
			<Content movie={movie} />
			<Actors cast={movie.credits.cast} />
		</div>
	);
};

export default Movie;
