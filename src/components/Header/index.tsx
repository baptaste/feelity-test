import './index.scss';
import MainButton from '../common/Buttons/MainButton';
import GoTo from '../GoTo';
import { ReactComponent as FeelityLogo } from '../../assets/svg/feelity-logo.svg';

export default function Header(): JSX.Element {
	return (
		<header className="header bg-2 color-1 flex-column justify-start">
			<div className="siteHead align-center">
				<GoTo step="previous" classes="bg-3" />
				<div className="siteHead__logo-container">
					<MainButton type="button" height="34px" onClick={() => window.location.assign('/')}>
						<FeelityLogo stroke="white" />
					</MainButton>
				</div>
			</div>
		</header>
	);
}
