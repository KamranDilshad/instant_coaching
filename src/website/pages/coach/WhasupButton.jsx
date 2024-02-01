import React from 'react';
import icon from '../../assets/img/chat.png';

const WhatsAppButton = ({ phoneNumber }) => {
	const openWhatsAppChat = () => {
		const url = `https://wa.me/${phoneNumber}`;
		window.open(url, '_blank');
	};

	return (
		<div>
			<img
				src={icon}
				alt='WhatsApp Icon'
				onClick={openWhatsAppChat}
				style={{
					cursor: 'pointer',
					width: '40px',
					height: '40px',
					borderRadius: '50%',
				}}
			/>
		</div>
	);
};

export default WhatsAppButton;
