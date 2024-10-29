
import './App.css';
import Card from './Card';
import mobile from './assets/mobile_2571330.png';
import plumbing from './assets/plumbing.png'
import waterdrop from './assets/water-drop.png'
import waterheater from './assets/water-heater.png'

const services = [
  {
    title: "Emergency Plumbing Services",
    description: "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.",
    icon: mobile,
    alt: 'Mobile-alt'
  },
  {
    title: "Plumbing and Drains",
    description: "As the largest plumbing and drain service company, we make thousands of repairs every day.",
    icon: plumbing,
    alt: 'Plumbing'
  },
  {
    title: "Water Damage",
    description: "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
    icon: waterdrop,
    alt: 'Waterdrop'
  },
  {
    title: "Water Heaters",
    description: "Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.",
    icon: waterheater,
    alt: 'Waterheater'
  },
];

function App() {
  return (
    <div id="assignment" className="m-32">
      <div className="text-white font-roboto-condensed text-6xl font-thin mb-24">OUR SERVICES</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
        {services.map(service => (
          <Card
            key={service.alt}
            imgsrc={service.icon}
            alt={service.alt}
            title={service.title}
            desc={service.description}
          />
        ))}

      </div>
    </div>

  );
}

export default App;
