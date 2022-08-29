import './app.scss';
import './styles/main.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import { useEffect, useState } from 'react';

function App() {
	const [selectedService, setSelectedService] = useState<string>('service1');

	useEffect(() => {
		console.log('selectedService:', selectedService);
	}, [selectedService]);

	return (
		<div className="app">
			<Header />
			<Slider setSelectedService={setSelectedService} />
		</div>
	);
}

export default App;
