import PageHead from '../PageHead';
import SiteHead from '../SiteHead';
import './index.scss';

export default function Header(): JSX.Element {
	return (
		<header className="header bg-2 color-1 flex-column justify-evenly">
			<SiteHead />
			<PageHead title="Services" />
		</header>
	);
}
