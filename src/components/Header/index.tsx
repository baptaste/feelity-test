import PageHead from '../PageHead';
import './index.scss';

export default function Header(): JSX.Element {
	return (
		<header className="header bg-2 color-1 flex-column justify-center">
			<div className="siteName">SITENAME</div>
			<PageHead title="Services" />
		</header>
	);
}
