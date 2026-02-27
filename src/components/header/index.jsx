import { Bookmark } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const { watchList } = useSelector((store) => store.watchListReducer);
	return (
		<header className="mb-10  flex justify-between items-center backdrop-blur-sm bg-black/30 padding border border-white/10 rounded-2xl shadow-lg">
			<Link to="/" className="hover:scale-105">
				<img src="/logo.svg" alt="logo" className="max-w-37.5" />
			</Link>
			<Link
				to="/watchlist"
				className="flex gap-4 md:gap-5 items-center hover:text-white px-4 py-2 hover:bg-white/10 rounded-lg">
				<div className="relative">
					<Bookmark />
					<span className="absolute -right-3.25 -top-3.25 bg-red-500 grid place-items-center size-6 rounded-full text-sm font-bold shadow-lg shadow-red-500/50">
						{watchList.length}
					</span>
				</div>
			</Link>
		</header>
	);
};

export default Header;
