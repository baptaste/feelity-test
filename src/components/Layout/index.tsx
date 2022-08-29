import './index.scss';
import type { ILayoutProps } from './Layout.d';

export default function Layout({ children }: ILayoutProps): JSX.Element {
	return <div className="layout flex-column">{children}</div>;
}
