import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const CarouselSlider = ({ imgMobile }) => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	
	return (
		<Carousel className="carousel" onSelect={handleSelect} activeIndex={index}>
		{imgMobile ? imgMobile.map((img) => {
			return (
				<Carousel.Item key={img.id}>
					<img className="d-block w-100" src={img.url} alt="slide" />
				</Carousel.Item>
			)
		}) : null}
		</Carousel>
	);
};

export default CarouselSlider;
