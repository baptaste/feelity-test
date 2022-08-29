import './index.scss';
import type { ICardProps } from './Card.d';

export default function Card({ id, image, alt, setSelectedService }: ICardProps): JSX.Element {
	const imgPath: string = require(`../../assets/images/${image}`);

	const handleMouseEnter = () => {
		setSelectedService(id);
	};

	return (
		<div id={id} className="card flex-center bg-1" onMouseEnter={handleMouseEnter}>
			<img src={imgPath} alt={alt} className="card__img" />
		</div>
	);
}
