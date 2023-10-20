// import { Products } from "../app/shop/shopActionfunction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/features/shopSlice";
import React, { useEffect } from "react";

const ShopView = () => {
	const shopState = useSelector(state => state.shop);
	const dispatch = useDispatch();
	console.log(shopState);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<div className="bg-green-700">
			<div className="text-3xl font-semibold ">
				no of products : {shopState.data.length}
			</div>
			<div className=" space-y-10 bg-yellow-400 ">
				{shopState.data.map(itm => {
					return (
						<div className="h-80 w-80 shadow-md hover:scale-125 flex items-center flex-col">
							<div className="h-3/4 w-full object-cover ">
								<img src={itm.image} alt="" className="h-60 w-full" />
							</div>
							<h1 className="h-1/4 w-full">{itm.title}</h1>
						</div>
					);
					x;
				})}
			</div>
		</div>
	);
};

export default ShopView;
