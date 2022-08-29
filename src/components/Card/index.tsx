import './index.scss';
import type { ICardProps } from './Card.d';
import { useRef } from 'react';

export default function Card({ id, image }: ICardProps): JSX.Element {
	const imgPath: string = require(`../../assets/images/${image}`);

	// console.log('card id:', id);

	return (
		<div id={id} className="card flex-center bg-1">
			<img src={imgPath} className="card__img" />
		</div>
	);
}
