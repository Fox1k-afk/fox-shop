import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { shopAPI } from '../store/services/ShopService';

const SoloProduct = () => {
	// const location = useLocation();
	// console.log(location);
	// const data = location.state;

	const { id } = useParams();
	// useEffect(() => {
	// 	axios.get(`https://fakestoreapi.com/products/${id}`);
	// });

	const data = shopAPI.useFetchProductQuery(id);
	console.log(data);

	return <div>test</div>;
};

export default SoloProduct;
