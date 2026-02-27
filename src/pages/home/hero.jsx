import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WatchListButton from "../../components/button/watchListButton";
import Error from "../../components/error";
import Loader from "../../components/loader";
import api from "../../utils/api";
import { BASE_IMG_URL } from "../../utils/constants";

const Hero = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		api
			.get("/movie/popular?language=en-US")
			.then((res) => {
				const i = Math.round(Math.random() * 19);

				setMovie(res.data.results[i]);
			})

			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	console.log(movie);

	return (
		<div className="backdrop-blur-md bg-linear-to-r from-black/40 to-transparent p-8 rounded-3xl border border-white/10 shadow-2xl md:max-h-100 mb-10">
			{loading ? (
				<Loader />
			) : error ? (
				<Error />
			) : (
				<div className="grid md:grid-cols-2 gap-8">
					<div className="flex flex-col gap-6 items-center justify-center">
						<h1 className="text-4xl font-bold text-center">{movie.title}</h1>
						<p className="text-gray-300 line-clamp-5 leading-relaxed">
							{movie.overview}
						</p>
						<div className="flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30">
							<span>IMDB </span>
							<span className="text-yellow-400 font-bold text-lg">
								{movie.vote_average.toFixed(2)}
							</span>
						</div>

						<div className="flex gap-5">
							<Link to={`/movie/${movie.id}`} className="hero-btn">
								<Play className="size-5" /> Filmi İzle
							</Link>
							<WatchListButton movie={movie} />
						</div>
					</div>

					<div className="flex justify justify-center items-center">
						<img
							src={BASE_IMG_URL + movie.backdrop_path}
							className="drop-shadow-[0_0_80px_rgba(255,255,255,0.3)] rounded-2xl object-contain max-h-75 transition duration-300 hover:scale-105"
							alt=""
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
