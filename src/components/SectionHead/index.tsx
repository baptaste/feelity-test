import './index.scss';
import { ISectionHeadProps } from './SectionHead';

export default function SectionHead({ title, classes }: ISectionHeadProps): JSX.Element {
	return (
		<div className="sectionHead">
			<h1 className={`fsize-2 ${classes}`}>{title}</h1>
		</div>
	);
}
