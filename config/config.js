
import profile from './profile.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Ravindu",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Ravindu",
	description: "A software engineer passionate about machine learning, UX design and more.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Hire Me",
			link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm a software engineering undergraduate at Kotelawala Defence University. My academic journey has been an exciting quest, but what truly fuels my drive is my passion for shaping exceptional user experiences, diving into the intricate world of machine learning, and crafting software that stands out.",
		"I'm more than just a software developer. I'm a creative thinker with a knack for leading teams and fostering effective collaboration. I'm on a mission to apply my skills and knowledge to create groundbreaking solutions. I believe in the power of innovation to elevate user experiences and drive business success.",
		"You can find me coding, scrolling through TikTok and occasionally studying.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Machine Learning",
			description: "I build software powered by AI and machine learning models.",
			icons: null,
		},
		{
			title: "UI/UX Design",
			description: "I craft exceptional interfaces for various types of software",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create beautiful, performant web applications",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Spacefarer",
			description: "Ever wondered what role you would play if you were an astronaut, adventuring through space with your resourceful crew members?",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ravi-aratchige/spacefarer",
				},
			]
		},
		{
			title: "TumorScan",
			description: "TumorScan is a web app for medical professionals and students to identify and classify brain tumors in MRI scans using deep learning.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Caramel-Labs/tumorscan",
				},
			]
		},
		{
			title: "DjangMemo",
			description: "DjangMemo is a notes application built using the powerful Django framework. DjangMemo is still a work in progress, and is open for feedback!",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ravi-aratchige/DjangMemo",
				},
			]
		},
		{
			title: "Exo",
			description: "Exo is a flight-booking application for interplanetary space travel. Exo was designed for Tech-Triathlon 2023 by Rootcode Labs.",
			icons: [
				{
					icon: faPaintBrush,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Let's chat! I'm always open to your feedback on my projects and my work. Feel free to reach out directly by email.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:rmaratchige@gmail.com",
			isPrimary: true,
		},
		{
			title: "Stalk Me",
			link: "https://linkedin.com/in/ravindua",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Ravindu Aratchige - Developer | Designer | Writer",
	description: "I'm a software engineering undergraduate at Kotelawala Defence University.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@ravi-aratchige",
	description: "Coder by day, caffeinated coder by night",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}