import MainButton from '../common/Buttons/MainButton';
import GoTo from '../GoTo';
import './index.scss';
import { ReactComponent as FeelityLogo } from '../../assets/svg/feelity-logo.svg';

export default function SiteHead(): JSX.Element {
	return (
		<div className="siteHead flex-center">
			<GoTo classes="bg-3" />
			<MainButton type="button" height="34px">
				<FeelityLogo />
			</MainButton>
		</div>
	);
}
