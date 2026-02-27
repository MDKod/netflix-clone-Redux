import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Movie from "./pages/movie";
import WatchList from "./pages/watchList";
import { getWatchList } from "./redux/actions";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWatchList());
	}, [dispatch]);
	return (
		<BrowserRouter>
			<div className="flex flex-col min-h-screen padding">
				<Header />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:id" element={<Movie />} />
						<Route path="/watchlist" element={<WatchList />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
