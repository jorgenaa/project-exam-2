import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const CarouselSlider = ({ image, imgOne, imgTwo, imgThree, imgFour, id }) => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	
	return (
		<Carousel className="carousel" onSelect={handleSelect} activeIndex={index}>
			<Carousel.Item>
				<img className="d-block w-100" src={image} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgOne} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgTwo} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgThree} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgFour} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselSlider;
