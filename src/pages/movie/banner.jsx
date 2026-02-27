import { BASE_IMG_URL } from "../../utils/constants";

const Banner = ({ movie }) => {
	return (
		<div className="relative h-[35vh]">
			<img
				src={BASE_IMG_URL + movie.backdrop_path}
				alt={movie.title}
				className="rounded-md size-full object-cover"
			/>

			<div className="absolute bg-black/20 inset-0 grid place-items-center backdrop-blur-[0.5px]">
				<div className="text-center">
					<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-shadow-lg text-shadow-black">
						{movie.title}
					</h2>

					{movie.tagline && (
						<h4 className="text-xl text-shadow-lg text-shadow-black">
							{movie.tagline}
						</h4>
					)}
				</div>
			</div>
		</div>
	);
};

export default Banner;
