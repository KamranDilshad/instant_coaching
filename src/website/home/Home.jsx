import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';

import ContactSection from './ContactSection';
import FqaSection from './FqaSection';
import CoachSection from './CoachSection';
import FooterSection from './FooterSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';

const Home = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<AboutSection />
			<ServiceSection />
			<CoachSection />
			<ContactSection />
			<FqaSection />
			<FooterSection />
		</>
	);
};

export default Home;
