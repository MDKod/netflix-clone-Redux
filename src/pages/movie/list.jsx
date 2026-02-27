const List = ({ title, data }) => {
	return (
		<div className="mb-5">
			<h1 className="text-xl font-semibold mb-2">{title}</h1>
			<div className="flex flex-wrap gap-5">
				{data.map((item, key) => (
					<span key={key} className="border py-1 px-2 rounded-md">
						{item.name}
					</span>
				))}
			</div>
		</div>
	);
};

export default List;
