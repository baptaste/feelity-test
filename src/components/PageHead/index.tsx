import './index.scss';
import type { IPageHeadProps } from './PageHead.d';

export default function PageHead({ title }: IPageHeadProps): JSX.Element {
	return (
		<div className="pageHead flex flex-wrap justify-between">
			<h1 className="fsize-2">{title}</h1>
		</div>
	);
}
