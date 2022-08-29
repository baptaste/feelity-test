import './index.scss';
import Card from '../Card';
import { useEffect } from 'react';
import type { IService } from './Slider.d';
import SectionHead from '../SectionHead';

export default function Slider({ services, setSelectedService }: any): JSX.Element {
	let observer: undefined | IntersectionObserver;
	const mobileBreakpoint: number = 500;

	useEffect(() => {
		if (window.innerWidth < mobileBreakpoint) {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) setSelectedService(entry.target.id);
					});
				},
				{
					threshold: 0.7,
				}
			);

			document.querySelectorAll('.card').forEach((elem) => {
				observer?.observe(elem);
			});

			return () =>
				document.querySelectorAll('.card').forEach((elem) => {
					observer?.unobserve(elem);
				});
		}
	}, [observer]);

	return (
		<section className="slider-container flex-column">
			<SectionHead title="Services" classes="color-1" />
			<div className="slider flex">
				{services.map((service: IService) => (
					<Card key={service.id} setSelectedService={setSelectedService} {...service} />
				))}
			</div>
		</section>
	);
}
