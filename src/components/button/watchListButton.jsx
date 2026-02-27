import { BookmarkMinus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions";

const WatchListButton = ({ movie }) => {
	const dispatch = useDispatch();
	const { watchList = [] } = useSelector((store) => store.watchListReducer);

	

	const isInList = watchList.some((m) => m.id === movie?.id);

	const handleToggle = () => {
		if (!movie) return;
		dispatch(toggleWatchList(movie, !isInList));
	};

	return (
		<button
			onClick={handleToggle}
			className="hero-btn from-blue-600 to-blue-700 flex items-center gap-2">
			{isInList ? (
				<>
					<BookmarkMinus className="size-5" /> Listeden Kaldır
				</>
			) : (
				<>
					<Plus className="size-5" /> Listeye Ekle
				</>
			)}
		</button>
	);
};

export default WatchListButton;
