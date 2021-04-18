import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

import { BASE_URL } from '../../../constants/api';

const CarouselSlider = ({ imgMobile, id }) => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	
	return (
		<Carousel className="carousel" onSelect={handleSelect} activeIndex={index}>
		{imgMobile ? imgMobile.map(img => {
			return (
				<Carousel.Item>
					<img className="d-block w-100" src={`${BASE_URL}${img.url}`} alt="slide" />
				</Carousel.Item>
			)
		}) : null}

		</Carousel>
	);
};

export default CarouselSlider;
