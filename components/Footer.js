import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold text-center">{title}</h1>
				<div className="px-sm-5">
					<p className='text-center'>{description}</p>
					<div className="text-center">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-0">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2023 {" "}
					<Link href="https://github.com/ravi-aratchige">
						<a>Ravindu Aratchige</a>
					</Link>
					{/* . Open sourced with love under {" "}
					<Link href="https://github.com/ravi-aratchige/ravi-aratchige.github.io/blob/main/LICENSE">
						<a>MIT</a>
					</Link>
					{" "} License */}
				</small>
			</div>
		</footer>
	);
}