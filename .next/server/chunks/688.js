"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/profile.57237f06.jpg","height":643,"width":643,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDBBEFEjFx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGBEAAgMAAAAAAAAAAAAAAAAAAgMAARH/2gAMAwEAAhEDEQA/AIVNWNuxG2tenMkxdvLpCHZaOOsZ8URE1CQIduT3tICyp//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer),
/* harmony export */   "r": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ({ title , description , buttons  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "contact",
        className: "bg-white py-5 px-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-primary fw-bold text-center",
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-sm-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center",
                            children: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center",
                            children: buttons.map((value, index)=>value.isPrimary ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-primary my-1 mx-0",
                                        children: value.title
                                    })
                                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-outline-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-secondary text-center py-2 px-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container text-muted",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                children: [
                    "\xa9 2023 ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/ravi-aratchige",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "Ravindu Aratchige"
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ seo  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: seo.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            })
        ]
    });
};


/***/ }),

/***/ 9312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ navigation),
/* harmony export */   "HJ": () => (/* binding */ SEO),
/* harmony export */   "Ok": () => (/* binding */ links),
/* harmony export */   "PX": () => (/* binding */ contact),
/* harmony export */   "ZT": () => (/* binding */ work),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "mf": () => (/* binding */ intro),
/* harmony export */   "q": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1392);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const navigation = {
    name: "Ravindu",
    links: [
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Projects",
            link: "#projects"
        },
        {
            title: "Contact",
            link: "#contact"
        },
        {
            title: "Links",
            link: "/links"
        }, 
    ]
};
const intro = {
    title: "Hey, I'm Ravindu",
    description: "A software engineer passionate about machine learning, UX design and more.",
    image: _profile_jpg__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src,
    buttons: [
        {
            title: "Contact Me",
            link: "#contact",
            isPrimary: true
        },
        {
            title: "Hire Me",
            link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
            isPrimary: false
        }, 
    ]
};
const about = {
    title: "Who I am",
    description: [
        "I'm a software engineering undergraduate at Kotelawala Defence University. My academic journey has been an exciting quest, but what truly fuels my drive is my passion for shaping exceptional user experiences, diving into the intricate world of machine learning, and crafting software that stands out.",
        "I'm more than just a software developer. I'm a creative thinker with a knack for leading teams and fostering effective collaboration. I'm on a mission to apply my skills and knowledge to create groundbreaking solutions. I believe in the power of innovation to elevate user experiences and drive business success.",
        "You can find me coding, scrolling through TikTok and occasionally studying.", 
    ]
};
const work = {
    title: "What I do",
    cards: [
        {
            title: "Machine Learning",
            description: "I build software powered by AI and machine learning models.",
            icons: null
        },
        {
            title: "UI/UX Design",
            description: "I craft exceptional interfaces for various types of software",
            icons: null
        },
        {
            title: "Web Development",
            description: "I create beautiful, performant web applications",
            icons: null
        }
    ]
};
const projects = {
    title: "Projects",
    cards: [
        {
            title: "Spacefarer",
            description: "Ever wondered what role you would play if you were an astronaut, adventuring through space with your resourceful crew members?",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/ravi-aratchige/spacefarer"
                }, 
            ]
        },
        {
            title: "TumorScan",
            description: "TumorScan is a web app for medical professionals and students to identify and classify brain tumors in MRI scans using deep learning.",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/Caramel-Labs/tumorscan"
                }, 
            ]
        },
        {
            title: "DjangMemo",
            description: "DjangMemo is a notes application built using the powerful Django framework. DjangMemo is still a work in progress, and is open for feedback!",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/ravi-aratchige/DjangMemo"
                }, 
            ]
        },
        {
            title: "Exo",
            description: "Exo is a flight-booking application for interplanetary space travel. Exo was designed for Tech-Triathlon 2023 by Rootcode Labs.",
            icons: [
                {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPaintBrush,
                    link: "https://github.com/hashirshoaeb/portfolio"
                }, 
            ]
        }, 
    ]
};
const contact = {
    title: "Get in touch",
    description: "Let's chat! I'm always open to your feedback on my projects and my work. Feel free to reach out directly by email.",
    buttons: [
        {
            title: "Email Me",
            link: "mailto:rmaratchige@gmail.com",
            isPrimary: true
        },
        {
            title: "Stalk Me",
            link: "https://linkedin.com/in/ravindua",
            isPrimary: false
        }, 
    ]
};
// SEARCH ENGINE 
const SEO = {
    // 50 - 60 char  
    title: "Ravindu Aratchige - Developer | Designer | Writer",
    description: "I'm a software engineering undergraduate at Kotelawala Defence University.",
    image: _profile_jpg__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src
};
const links = {
    image: _profile_jpg__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src,
    title: "@ravi-aratchige",
    description: "Coder by day, caffeinated coder by night",
    cards: [
        {
            title: "My website",
            link: "https://hashirshoaeb.com/"
        },
        {
            title: "QuranTalk App",
            link: "https://www.qurantalk.app/"
        },
        {
            title: "StarBook App",
            link: "https://starbook.dev/"
        },
        {
            title: "My GitHub",
            link: "https://github.com/hashirshoaeb/"
        },
        {
            title: "My LinkedIn",
            link: "https://www.linkedin.com/in/hashirshoaeb/"
        }, 
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;