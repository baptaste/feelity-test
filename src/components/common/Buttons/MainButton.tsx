import './index.scss';
import type { IMainButtonProps } from './MainButton.d';

export default function MainButton(props: IMainButtonProps): JSX.Element {
	const styles = { width: props.width || '', height: props.height || '' };

	return (
		<button
			type={props.type}
			className="mainButton flex-center"
			style={styles}
			onClick={props.onClick}
			onSubmit={props.onSubmit}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{props.hasText ? props.text : ''}
			{props.children ? props.children : null}
			{props.iconSrc ? (
				<img
					src={props.iconSrc}
					style={{ width: props.iconWidth, height: props.iconHeight, transform: props.reverseIcon ? 'rotate(180deg)' : '' }}
				/>
			) : null}
		</button>
	);
}
