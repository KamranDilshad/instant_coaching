import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';

const ProtectedRoute = ({
	element,
	isAuthenticated,
	redirectTo = '/login',
}) => {
	console.log('🚀 ~ element:', element);
	return isAuthenticated ? (
		<Route element={element} />
	) : (
		<Navigate to={redirectTo} replace />
	);
};

export default ProtectedRoute;
