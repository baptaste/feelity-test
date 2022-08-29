import './index.scss';
import GoTo from '../GoTo';
import SectionHead from '../SectionHead';
import type { IArticlesProps } from './Articles.d';

export default function Articles({ services, selectedService }: IArticlesProps): JSX.Element {
	const description: string = selectedService === 'service1' ? services[0].description : services[1].description;

	return (
		<section className="articles flex-column">
			<SectionHead title="Articles" classes="color-2" />
			<p className="articles__description fsize-1">{description}</p>
			<div className="articles__action-link flex align-center justify-between bg-5">
				<p className="fsize-1">Commencer à lire</p>
				<GoTo step="next" classes="right-arrow bg-1" />
			</div>
		</section>
	);
}
