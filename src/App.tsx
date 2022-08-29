import './app.scss';
import './styles/main.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import { useState } from 'react';
import Layout from './components/Layout';
import Articles from './components/Articles';
import services from '../src/data/services.json';

function App() {
	const [selectedService, setSelectedService] = useState<string>(services[0].id);

	return (
		<div className="app">
			<Header />
			<Layout>
				<Slider services={services} setSelectedService={setSelectedService} />
				<Articles services={services} selectedService={selectedService} />
			</Layout>
		</div>
	);
}

export default App;
