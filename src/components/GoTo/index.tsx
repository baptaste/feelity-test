import './index.scss';
import type { IGoToProps } from './GoTo.d';
import MainButton from '../common/Buttons/MainButton';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

export default function GoTo({ step, classes }: IGoToProps): JSX.Element {
	let buttonIconSrc: string = LeftArrow;
	let buttonIconAlt: string = 'Retour';

	if (step !== 'previous') {
		buttonIconSrc = RightArrow;
		buttonIconAlt = 'Voir la page';
	}

	const goToPage = (): void => {
		if (step === 'previous') window.history.back();
		else window.location.assign('/');
	};

	return (
		<div className={`goTo flex-center ${classes}`}>
			<MainButton type="button" onClick={goToPage} iconSrc={buttonIconSrc} iconAlt={buttonIconAlt} iconWidth="12px" iconHeight="20px" />
		</div>
	);
}
