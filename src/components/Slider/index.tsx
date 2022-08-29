import './index.scss';
import services from '../../data/services.json';
import Card from '../Card';
import { useEffect } from 'react';
import type { IService } from './Slider.d';

export default function Slider({ setSelectedService }: any): JSX.Element {
	let observer: undefined | IntersectionObserver;

	useEffect(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setSelectedService(entry.target.id);
				});
			},
			{
				root: document.querySelector('.slider'),
				rootMargin: '100% 0% 100% 0%',
				threshold: 0.7,
			}
		);

		document.querySelectorAll('.card').forEach((elem) => {
			observer?.observe(elem);
		});

		return () =>
			document.querySelectorAll('.card').forEach((elem) => {
				observer?.observe(elem);
			});
	}, [observer]);

	return (
		<div className="slider flex">
			{services.map((service: IService) => (
				<Card key={service.id} id={service.id} image={service.image} />
			))}
		</div>
	);
}
