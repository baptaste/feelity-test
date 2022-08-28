import './index.scss';
import type { IGoToProps } from './GoTo';
import MainButton from '../common/Buttons/MainButton';
import { useNavigate, Navigate } from 'react-router';
import LeftArrow from '../../assets/images/left-arrow.png';

export default function GoTo({ classes }: IGoToProps): JSX.Element {
	// const navigate = useNavigate();
	// const goToPreviousPage = () => navigate(-1);
	const goToPage = () => console.log('goToPage click');

	return (
		<div className={`goTo flex-center ${classes}`}>
			<MainButton type="button" onClick={goToPage} iconSrc={LeftArrow} iconWidth="12px" iconHeight="20px" />
		</div>
	);
}
