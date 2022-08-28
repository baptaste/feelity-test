import { MouseEventHandler } from 'react';

export declare interface IMainButtonProps {
	type: 'button' | 'reset' | 'submit';
	text?: string;
	hasText?: boolean;
	iconSrc?: string;
	iconWidth?: string | number;
	iconHeight?: string | number;
	reverseIcon?: boolean;
	width?: string | number;
	height?: string | number;
	classes?: string;
	children?: React.ReactNode;
	onClick?: ((e?: any) => void) | undefined;
	onSubmit?: ((e?: any) => void) | undefined;
	onMouseEnter?: (e?: React.MouseEvent) => void;
	onMouseLeave?: (e?: React.MouseEvent) => void;
}
