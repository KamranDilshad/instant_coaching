import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
	return (
		<div class='container'>
			<div class='row'>
				<div class='col-md-6'>
					<Link to={'/'}>
						<span class='btn border-info  position-fixed top-0 start-1 mt-4 custom-btn'>
							<i class='bi bi-chevron-left'></i>Back
						</span>
					</Link>
				</div>
				{/* 
				<div class='col-md-6 '>
					<nav aria-label='breadcrumb '>
						<ol class='breadcrumb mt-4 justify-content-end'>
							<li class='breadcrumb-item'>
								<a href='#' onclick='history.back()'>
									Home
								</a>
							</li>
							<li class='breadcrumb-item active' aria-current='page'>
								About
							</li>
						</ol>
					</nav>
				</div> */}
			</div>
		</div>
	);
};

export default Button;
