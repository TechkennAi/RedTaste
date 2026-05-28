import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { createElement, forwardRef, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = forwardRef(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	return createElement("svg", {
		ref,
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		className: mergeClasses("lucide", className),
		...rest
	}, [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = forwardRef(({ className, ...props }, ref) => createElement(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
		...props
	}));
	Component.displayName = `${iconName}`;
	return Component;
};
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("ArrowRight", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Award = createLucideIcon("Award", [["path", {
	d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
	key: "1yiouv"
}], ["circle", {
	cx: "12",
	cy: "8",
	r: "6",
	key: "1vp47v"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartColumn = createLucideIcon("ChartColumn", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M18 17V9",
		key: "2bz60n"
	}],
	["path", {
		d: "M13 17V5",
		key: "1frdt8"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheckBig = createLucideIcon("CircleCheckBig", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("CircleCheck", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CodeXml = createLucideIcon("CodeXml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("ExternalLink", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Facebook = createLucideIcon("Facebook", [["path", {
	d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
	key: "1jg4f8"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Globe = createLucideIcon("Globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Instagram = createLucideIcon("Instagram", [
	["rect", {
		width: "20",
		height: "20",
		x: "2",
		y: "2",
		rx: "5",
		ry: "5",
		key: "2e1cvw"
	}],
	["path", {
		d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
		key: "9exkf1"
	}],
	["line", {
		x1: "17.5",
		x2: "17.51",
		y1: "6.5",
		y2: "6.5",
		key: "r4j83e"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Linkedin = createLucideIcon("Linkedin", [
	["path", {
		d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
		key: "c2jq9f"
	}],
	["rect", {
		width: "4",
		height: "12",
		x: "2",
		y: "9",
		key: "mk3on5"
	}],
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("Mail", [["rect", {
	width: "20",
	height: "16",
	x: "2",
	y: "4",
	rx: "2",
	key: "18n3k1"
}], ["path", {
	d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
	key: "1ocrg3"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("MapPin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("Menu", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "6",
		y2: "6",
		key: "1owob3"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "18",
		y2: "18",
		key: "yk5zj1"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelsTopLeft = createLucideIcon("PanelsTopLeft", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M9 21V9",
		key: "1oto5p"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("Phone", [["path", {
	d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
	key: "foiqr5"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rocket = createLucideIcon("Rocket", [
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
		key: "m3kijz"
	}],
	["path", {
		d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
		key: "1fmvmk"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
		key: "1f8sc4"
	}],
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("Search", [["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}], ["path", {
	d: "m21 21-4.3-4.3",
	key: "1qie3q"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("Send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("ShieldCheck", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Shield = createLucideIcon("Shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Target = createLucideIcon("Target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Twitter = createLucideIcon("Twitter", [["path", {
	d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
	key: "pff0z6"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserCheck = createLucideIcon("UserCheck", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["polyline", {
		points: "16 11 18 13 22 9",
		key: "1pwet4"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("Users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["path", {
		d: "M16 3.13a4 4 0 0 1 0 7.75",
		key: "1da9ce"
	}]
]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("X", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
/**
* @license lucide-react v0.475.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("Zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
//#region app/components/Navbar.tsx
var Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navLinks = [
		{
			name: "Services",
			href: "#services"
		},
		{
			name: "Portfolio",
			href: "#portfolio"
		},
		{
			name: "About",
			href: "#about"
		},
		{
			name: "Contact",
			href: "#contact"
		}
	];
	return /* @__PURE__ */ jsxs("nav", {
		className: "fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex justify-between h-16 items-center",
				children: [
					/* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						className: "flex-shrink-0 flex items-center gap-3",
						children: /* @__PURE__ */ jsx("img", {
							src: "/logo.png",
							alt: "Redtaste Logo",
							className: "h-16 w-auto object-contain",
							onError: (e) => e.currentTarget.style.display = "none"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ jsxs("div", {
							className: "ml-10 flex items-baseline space-x-8",
							children: [navLinks.map((link) => /* @__PURE__ */ jsx("a", {
								href: link.href,
								className: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
								children: link.name
							}, link.name)), /* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200",
								children: "Get Started"
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "md:hidden",
						children: /* @__PURE__ */ jsx("button", {
							onClick: () => setIsOpen(!isOpen),
							className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none",
							children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
						})
					})
				]
			})
		}), isOpen && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: -20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "md:hidden bg-white border-b border-gray-100",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
				children: [navLinks.map((link) => /* @__PURE__ */ jsx("a", {
					href: link.href,
					className: "text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium",
					onClick: () => setIsOpen(false),
					children: link.name
				}, link.name)), /* @__PURE__ */ jsx("a", {
					href: "#contact",
					className: "w-full text-center block bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 mt-4",
					onClick: () => setIsOpen(false),
					children: "Get Started"
				})]
			})
		})]
	});
};
//#endregion
//#region app/components/Hero3D.tsx
var AnimatedSphere = () => {
	return /* @__PURE__ */ jsx(Float, {
		speed: 2,
		rotationIntensity: 1,
		floatIntensity: 2,
		children: /* @__PURE__ */ jsx(Sphere, {
			ref: useRef(null),
			args: [
				1,
				100,
				200
			],
			scale: typeof window !== "undefined" && window.innerWidth < 768 ? 1.8 : 2.4,
			children: /* @__PURE__ */ jsx(MeshDistortMaterial, {
				color: "#3b82f6",
				attach: "material",
				distort: .4,
				speed: 2,
				roughness: .2,
				metalness: .8
			})
		})
	});
};
var Hero3D = () => {
	return /* @__PURE__ */ jsx("div", {
		className: "w-full h-[300px] sm:h-[400px] lg:h-[600px]",
		children: /* @__PURE__ */ jsxs(Canvas, {
			camera: {
				position: [
					0,
					0,
					5
				],
				fov: 75
			},
			children: [
				/* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
				/* @__PURE__ */ jsx("directionalLight", {
					position: [
						2,
						1,
						1
					],
					intensity: 2
				}),
				/* @__PURE__ */ jsx(AnimatedSphere, {}),
				/* @__PURE__ */ jsx(OrbitControls, { enableZoom: false })
			]
		})
	});
};
//#endregion
//#region app/components/TechStackVisual.tsx
var TechStackVisual = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full h-full flex items-center justify-center p-6 lg:p-12 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -z-10" }), /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] flex items-center justify-center perspective-[1000px]",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					animate: {
						rotateX: 45,
						rotateZ: -25,
						y: [
							20,
							30,
							20
						]
					},
					transition: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "absolute w-full h-full bg-white/40 backdrop-blur-md rounded-[40px] border border-white/50 shadow-xl flex flex-col p-6 space-y-4 origin-center -z-30 translate-y-16 scale-90 opacity-60",
					children: [
						/* @__PURE__ */ jsx("div", { className: "h-4 w-1/2 bg-gray-200/50 rounded-full" }),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx("div", { className: "h-20 bg-gray-100/50 rounded-2xl" }), /* @__PURE__ */ jsx("div", { className: "h-20 bg-gray-100/50 rounded-2xl" })]
						}),
						/* @__PURE__ */ jsx("div", { className: "h-32 bg-gray-50/50 rounded-3xl" })
					]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					animate: {
						rotateX: 45,
						rotateZ: -25,
						y: [
							0,
							10,
							0
						]
					},
					transition: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
						delay: .2
					},
					className: "absolute w-full h-full bg-white/60 backdrop-blur-lg rounded-[40px] border border-white/80 shadow-2xl flex flex-col p-6 space-y-6 origin-center -z-20 translate-y-8 scale-95 opacity-80",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600",
							children: /* @__PURE__ */ jsx(UserCheck, { size: 20 })
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2 flex-1",
							children: [/* @__PURE__ */ jsx("div", { className: "h-2.5 w-2/3 bg-blue-200 rounded-full" }), /* @__PURE__ */ jsx("div", { className: "h-2 w-1/2 bg-gray-100 rounded-full" })]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 bg-blue-50/30 rounded-3xl p-4 flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-center text-blue-600",
							children: [/* @__PURE__ */ jsx(Search, { size: 24 }), /* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-widest",
								children: "SEO Active"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "h-1.5 w-full bg-blue-100 rounded-full overflow-hidden",
							children: /* @__PURE__ */ jsx(motion.div, {
								animate: { x: ["-100%", "100%"] },
								transition: {
									duration: 2,
									repeat: Infinity,
									ease: "linear"
								},
								className: "w-1/3 h-full bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					animate: {
						rotateX: 45,
						rotateZ: -25,
						y: [
							-20,
							-10,
							-20
						]
					},
					transition: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
						delay: .4
					},
					className: "absolute w-full h-full bg-white rounded-[40px] border border-blue-100 shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden origin-center -z-10 -translate-y-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "h-10 bg-gray-50/80 border-b border-gray-100 flex items-center px-6 space-x-2",
						children: [
							/* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-400" }),
							/* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-400" }),
							/* @__PURE__ */ jsx("div", { className: "flex-1 ml-4 h-4 bg-gray-200/50 rounded-full" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6 space-y-6 flex-1 bg-gradient-to-b from-white to-blue-50/30",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200",
									children: /* @__PURE__ */ jsx(Globe, { size: 24 })
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-right space-y-1",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-[10px] font-black text-blue-600 uppercase tracking-tighter",
										children: "Performance"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-lg font-bold text-gray-900 leading-none",
										children: "99.9%"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "h-6 w-full bg-gray-900 rounded-lg flex items-center px-3",
									children: /* @__PURE__ */ jsx("div", { className: "h-1.5 w-1/3 bg-white/20 rounded-full" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-3 text-center",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "p-3 bg-white rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center",
										children: [/* @__PURE__ */ jsx(ShieldCheck, {
											size: 16,
											className: "text-green-500 mb-2"
										}), /* @__PURE__ */ jsx("div", { className: "h-1 w-8 bg-gray-100 rounded-full" })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "p-3 bg-white rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center",
										children: [/* @__PURE__ */ jsx(Zap, {
											size: 16,
											className: "text-yellow-500 mb-2"
										}), /* @__PURE__ */ jsx("div", { className: "h-1 w-8 bg-gray-100 rounded-full" })]
									})]
								})]
							}),
							/* @__PURE__ */ jsx(motion.div, {
								animate: { opacity: [
									.5,
									1,
									.5
								] },
								transition: {
									duration: 2,
									repeat: Infinity
								},
								className: "mt-auto h-20 w-full bg-blue-600 rounded-2xl flex items-center justify-center text-white",
								children: /* @__PURE__ */ jsx(CodeXml, {
									size: 32,
									strokeWidth: 1.5
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					animate: {
						y: [
							0,
							-20,
							0
						],
						rotate: [
							0,
							10,
							0
						]
					},
					transition: {
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "absolute -top-10 -right-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-blue-600 border border-blue-50 z-20",
					children: [/* @__PURE__ */ jsx(Zap, {
						size: 32,
						fill: "currentColor",
						className: "opacity-20"
					}), /* @__PURE__ */ jsx(Zap, {
						size: 32,
						className: "absolute"
					})]
				}),
				/* @__PURE__ */ jsx(motion.div, {
					animate: {
						y: [
							0,
							20,
							0
						],
						rotate: [
							0,
							-10,
							0
						]
					},
					transition: {
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: .5
					},
					className: "absolute -bottom-10 -left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-500 border border-blue-50 z-20",
					children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" })
				})
			]
		})]
	});
};
//#endregion
//#region app/components/Hero.tsx
var Hero = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative pt-32 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .8 },
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6",
								children: [/* @__PURE__ */ jsx(CircleCheckBig, { size: 16 }), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium",
									children: "Professional Web Solutions by Redtaste"
								})]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6",
								children: [
									"Elevate Your ",
									/* @__PURE__ */ jsx("span", {
										className: "text-blue-600",
										children: "Digital Presence"
									}),
									" Today"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xl text-gray-600 mb-8 max-w-xl",
								children: "Redtaste Websolutions provides comprehensive digital services including custom websites, business profile management, SEO optimization, and more to help your business thrive."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "#contact",
									className: "flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group",
									children: ["Start Your Project", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 group-hover:translate-x-1 transition-transform" })]
								}), /* @__PURE__ */ jsx("a", {
									href: "#portfolio",
									className: "flex items-center justify-center bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all",
									children: "View Portfolio"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-3xl font-bold text-gray-900",
										children: "50+"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gray-500 text-sm",
										children: "Projects Delivered"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-3xl font-bold text-gray-900",
										children: "98%"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gray-500 text-sm",
										children: "Client Satisfaction"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-3xl font-bold text-gray-900",
										children: "24/7"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gray-500 text-sm",
										children: "Expert Support"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: 1,
							delay: .2
						},
						className: "relative h-[400px] sm:h-[500px] lg:h-auto",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-blue-400/10 blur-3xl rounded-full" }),
							/* @__PURE__ */ jsx("div", {
								className: "hidden lg:block",
								children: /* @__PURE__ */ jsx(Hero3D, {})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "lg:hidden h-full",
								children: /* @__PURE__ */ jsx(TechStackVisual, {})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10" })
		]
	});
};
//#endregion
//#region app/components/About.tsx
var About = () => {
	const stats = [
		{
			label: "Years Experience",
			value: "8+",
			icon: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-blue-600" })
		},
		{
			label: "Team Experts",
			value: "15+",
			icon: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-blue-600" })
		},
		{
			label: "Success Rate",
			value: "99%",
			icon: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-blue-600" })
		},
		{
			label: "Projects Launched",
			value: "200+",
			icon: /* @__PURE__ */ jsx(Rocket, { className: "w-6 h-6 text-blue-600" })
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "pt-12 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "text-4xl font-bold text-gray-900 mb-6",
							children: ["Empowering Businesses Through ", /* @__PURE__ */ jsx("span", {
								className: "text-blue-600",
								children: "Innovation"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xl text-gray-600 mb-8 leading-relaxed",
							children: "At Redtaste Websolutions, we are a team of passionate developers, designers, and digital strategists dedicated to helping businesses navigate the digital landscape. Our mission is to provide high-quality, scalable web solutions that drive real results."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 mb-10 leading-relaxed",
							children: "Founded with the vision of making professional web services accessible to businesses of all sizes, we've grown into a full-service digital agency. We combine technical expertise with a deep understanding of business goals to create digital experiences that resonate with users and deliver ROI."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-6",
							children: stats.map((stat, index) => /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: index * .1 },
								className: "p-6 bg-gray-50 rounded-2xl border border-gray-100",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mb-4",
										children: stat.icon
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-bold text-gray-900 mb-1",
										children: stat.value
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-500 font-medium uppercase tracking-wider",
										children: stat.label
									})
								]
							}, stat.label))
						})
					]
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "aspect-square rounded-3xl overflow-hidden shadow-2xl",
							children: /* @__PURE__ */ jsx("img", {
								src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
								alt: "Our Team",
								className: "w-full h-full object-cover"
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" }),
						/* @__PURE__ */ jsx("div", { className: "absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" })
					]
				})]
			})
		})
	});
};
//#endregion
//#region app/components/Services.tsx
var services$1 = [
	{
		id: 1,
		title: "Custom Website Design",
		shortDescription: "Bespoke websites tailored to your brand identity and business goals.",
		fullDescription: "We create high-performance, visually stunning websites that represent your brand perfectly. Our websites are not just digital brochures; they are powerful tools designed to convert visitors into loyal customers.",
		usefulness: "Increases brand credibility, provides a 24/7 digital storefront, and improves customer trust through professional presentation.",
		icon: /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8 text-blue-600" }),
		color: "bg-blue-50",
		benefits: [
			"Mobile-first design",
			"High conversion rates",
			"Fast loading speeds"
		]
	},
	{
		id: 2,
		title: "Business Profile Management",
		shortDescription: "Expertly managed business profiles across platforms for maximum visibility.",
		fullDescription: "We manage your digital footprint across Google, LinkedIn, and other key platforms. By maintaining consistent and engaging profiles, we ensure your business is easily discoverable and attractive to potential partners.",
		usefulness: "Improves local SEO, ensures brand consistency across the web, and drives higher engagement from social platforms.",
		icon: /* @__PURE__ */ jsx(PanelsTopLeft, { className: "w-8 h-8 text-blue-600" }),
		color: "bg-blue-50",
		benefits: [
			"Google Business optimization",
			"LinkedIn growth strategy",
			"Consistent branding"
		]
	},
	{
		id: 3,
		title: "SEO Optimization",
		shortDescription: "Data-driven strategies to boost your search rankings and organic traffic.",
		fullDescription: "Our SEO experts use the latest techniques to ensure your website ranks high on search engines. We focus on keyword research, technical SEO, and content strategy to drive sustainable organic growth.",
		usefulness: "Reduces dependency on paid ads, brings in high-quality organic leads, and provides long-term digital authority.",
		icon: /* @__PURE__ */ jsx(Search, { className: "w-8 h-8 text-blue-600" }),
		color: "bg-blue-50",
		benefits: [
			"Keyword ranking growth",
			"Technical SEO audits",
			"Content strategy"
		]
	},
	{
		id: 4,
		title: "Analytics & Reporting",
		shortDescription: "Comprehensive insights into your digital performance with actionable reports.",
		fullDescription: "We don't just deliver services; we prove their value. Our detailed analytics and reporting help you understand exactly how your digital investments are performing and where the next opportunities lie.",
		usefulness: "Enables data-driven decision making, tracks ROI accurately, and identifies areas for business growth.",
		icon: /* @__PURE__ */ jsx(ChartColumn, { className: "w-8 h-8 text-blue-600" }),
		color: "bg-blue-50",
		benefits: [
			"Real-time dashboards",
			"Monthly performance reviews",
			"Goal tracking"
		]
	},
	{
		id: 5,
		title: "Performance Optimization",
		shortDescription: "Ultra-fast loading times and smooth user experiences that convert.",
		fullDescription: "Speed is a feature. We optimize every aspect of your website to ensure it loads in the blink of an eye. Faster sites rank better on Google and have significantly lower bounce rates.",
		usefulness: "Improves user experience, boosts search engine rankings, and prevents losing customers to slow loading times.",
		icon: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8 text-blue-600" }),
		color: "bg-blue-50",
		benefits: [
			"Core Web Vitals optimization",
			"Image compression",
			"Code minification"
		]
	},
	{
		id: 6,
		title: "Digital Security",
		shortDescription: "State-of-the-art security measures to protect your business and data.",
		fullDescription: "In an era of increasing digital threats, we keep your business safe. From SSL certificates to advanced firewalls and regular security patches, we ensure your data and your customers' information are protected.",
		usefulness: "Protects against data breaches, ensures regulatory compliance, and builds customer confidence in your digital platform.",
		icon: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-blue-600" }),
		color: "bg-blue-50",
		benefits: [
			"SSL/TLS encryption",
			"Regular backups",
			"Vulnerability scanning"
		]
	}
];
var Services = () => {
	const [selectedService, setSelectedService] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		id: "services",
		className: "py-20 lg:py-32 bg-gray-50/50",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-20",
				children: [/* @__PURE__ */ jsx(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "text-4xl font-bold text-gray-900 mb-4",
					children: "Comprehensive Digital Solutions"
				}), /* @__PURE__ */ jsx(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .2 },
					className: "text-xl text-gray-600 max-w-2xl mx-auto",
					children: "We offer a wide range of services designed to help businesses establish a powerful and effective online presence."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: services$1.map((service, index) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: index * .1 },
					onClick: () => setSelectedService(service),
					className: "bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`,
							children: service.icon
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-gray-900 mb-4",
							children: service.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 leading-relaxed mb-6",
							children: service.shortDescription
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all",
							children: ["Learn More ", /* @__PURE__ */ jsx(CircleCheck, { className: "ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" })]
						})
					]
				}, service.id))
			})]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: selectedService && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto",
			children: [/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setSelectedService(null),
				className: "fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				className: "relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto p-8 lg:p-12",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => setSelectedService(null),
					className: "absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20",
					children: /* @__PURE__ */ jsx(X, { size: 24 })
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `${selectedService.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8`,
							children: selectedService.icon
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-3xl font-bold text-gray-900 mb-4",
							children: selectedService.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xl text-gray-600 mb-8 leading-relaxed",
							children: selectedService.fullDescription
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6 mb-10",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-sm font-bold text-blue-600 uppercase tracking-widest mb-2",
								children: "Why it's useful"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-700 font-medium",
								children: selectedService.usefulness
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-sm font-bold text-gray-900 uppercase tracking-widest mb-4",
								children: "Key Benefits"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: selectedService.benefits.map((benefit) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-2 text-gray-600",
									children: [/* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-blue-500 flex-shrink-0" }), /* @__PURE__ */ jsx("span", {
										className: "text-sm",
										children: benefit
									})]
								}, benefit))
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100",
							children: [/* @__PURE__ */ jsx("a", {
								href: "#contact",
								onClick: () => setSelectedService(null),
								className: "flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200",
								children: "Inquire About This Service"
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setSelectedService(null),
								className: "flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all",
								children: "Close"
							})]
						})
					]
				})]
			})]
		}) })]
	});
};
//#endregion
//#region app/components/Portfolio.tsx
var projects = [
	{
		id: 1,
		title: "E-commerce Platform",
		category: "Web Development",
		description: "A full-featured e-commerce solution with real-time inventory tracking, secure payments, and a custom admin dashboard.",
		image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
		tags: [
			"React",
			"Node.js",
			"MongoDB",
			"Stripe"
		],
		link: "#"
	},
	{
		id: 2,
		title: "SaaS Analytics Dashboard",
		category: "UI/UX Design",
		description: "A comprehensive analytics dashboard for SaaS businesses, focusing on user behavior and subscription metrics.",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
		tags: [
			"Next.js",
			"Tailwind",
			"Framer Motion",
			"Recharts"
		],
		link: "#"
	},
	{
		id: 3,
		title: "Corporate Identity System",
		category: "Branding",
		description: "A complete rebranding project for a global logistics firm, including logo design, brand guidelines, and digital assets.",
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
		tags: [
			"Branding",
			"Design",
			"Strategy"
		],
		link: "#"
	},
	{
		id: 4,
		title: "Real Estate Portal",
		category: "Web Development",
		description: "A modern real estate platform with advanced search filters, map integration, and virtual tour capabilities.",
		image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
		tags: [
			"React",
			"Google Maps API",
			"Firebase"
		],
		link: "#"
	},
	{
		id: 5,
		title: "Health & Wellness App",
		category: "Mobile Solutions",
		description: "A cross-platform mobile application for tracking fitness goals, nutrition, and mental health metrics.",
		image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
		tags: [
			"React Native",
			"TypeScript",
			"Supabase"
		],
		link: "#"
	},
	{
		id: 6,
		title: "AI Content Platform",
		category: "SEO Optimization",
		description: "An AI-powered content generation and SEO optimization tool for digital marketing agencies.",
		image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
		tags: [
			"OpenAI API",
			"Python",
			"FastAPI"
		],
		link: "#"
	}
];
var Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		id: "portfolio",
		className: "py-20 lg:py-32 bg-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ jsx(motion.h2, {
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						className: "text-4xl font-bold text-gray-900 mb-4",
						children: "Featured Work"
					}), /* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { delay: .2 },
						className: "text-xl text-gray-600",
						children: "Discover how Redtaste Websolutions helps businesses transform their digital vision into reality."
					})]
				}), /* @__PURE__ */ jsxs(motion.button, {
					initial: {
						opacity: 0,
						x: 20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					className: "text-blue-600 font-semibold flex items-center hover:gap-2 transition-all",
					children: ["View All Projects ", /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 w-4 h-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: projects.map((project, index) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { delay: index * .1 },
					onClick: () => setSelectedProject(project),
					className: "group relative overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: project.image,
							alt: project.title,
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-8",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-blue-400 font-medium mb-2",
								children: project.category
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-bold text-white mb-4",
								children: project.title
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center text-white/80 text-sm font-semibold group-hover:text-white transition-colors",
								children: ["View Details ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							})
						]
					})]
				}, project.id))
			})]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: selectedProject && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto",
			children: [/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setSelectedProject(null),
				className: "fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				className: "relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => setSelectedProject(null),
					className: "absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20",
					children: /* @__PURE__ */ jsx(X, { size: 24 })
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-square lg:aspect-auto h-full overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: selectedProject.image,
							alt: selectedProject.title,
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-8 lg:p-12",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-blue-600 font-bold tracking-wider uppercase text-sm mb-4",
								children: selectedProject.category
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-6",
								children: selectedProject.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-600 text-lg leading-relaxed mb-8",
								children: selectedProject.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-10",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-sm font-bold text-gray-900 uppercase tracking-widest mb-4",
									children: "Technologies Used"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: selectedProject.tags.map((tag) => /* @__PURE__ */ jsx("span", {
										className: "px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold",
										children: tag
									}, tag))
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-col sm:flex-row gap-4",
								children: /* @__PURE__ */ jsx("button", {
									onClick: () => setSelectedProject(null),
									className: "flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all w-full sm:w-auto",
									children: "Close"
								})
							})
						]
					})]
				})]
			})]
		}) })]
	});
};
//#endregion
//#region app/components/Contact.tsx
var Contact = () => {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "py-20 lg:py-32 bg-gray-50/50",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-2 gap-16",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs(motion.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "text-4xl font-bold text-gray-900 mb-6",
						children: ["Let's Build Something ", /* @__PURE__ */ jsx("span", {
							className: "text-blue-600",
							children: "Extraordinary"
						})]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: .2 },
						className: "text-xl text-gray-600 mb-12",
						children: "Ready to take your business to the next level? Contact us today for a free consultation and let's discuss how we can help you grow."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start space-x-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "bg-white p-4 rounded-2xl shadow-sm border border-gray-100",
									children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-blue-600" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "text-lg font-bold text-gray-900 mb-1",
									children: "Email Us"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-gray-600",
									children: "kenafangideh@gmail.com"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start space-x-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "bg-white p-4 rounded-2xl shadow-sm border border-gray-100",
									children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-blue-600" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "text-lg font-bold text-gray-900 mb-1",
									children: "Call Us"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-gray-600",
									children: "+2347031374263"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start space-x-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "bg-white p-4 rounded-2xl shadow-sm border border-gray-100",
									children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-blue-600" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "text-lg font-bold text-gray-900 mb-1",
									children: "Visit Us"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-gray-600",
									children: "Lagos, Nigeria"
								})] })]
							})
						]
					})
				] }), /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					className: "bg-white p-10 rounded-3xl border border-gray-100 shadow-xl",
					children: /* @__PURE__ */ jsxs("form", {
						action: "https://formsubmit.co/kenafangideh@gmail.com",
						method: "POST",
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsx("input", {
								type: "hidden",
								name: "_subject",
								value: "New Project Inquiry - Redtaste Websolutions"
							}),
							/* @__PURE__ */ jsx("input", {
								type: "hidden",
								name: "_template",
								value: "table"
							}),
							/* @__PURE__ */ jsx("input", {
								type: "hidden",
								name: "_next",
								value: typeof window !== "undefined" ? window.location.href : ""
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid md:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block text-sm font-medium text-gray-700 mb-2",
									children: "First Name"
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									name: "first_name",
									required: true,
									className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900",
									placeholder: "John"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block text-sm font-medium text-gray-700 mb-2",
									children: "Last Name"
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									name: "last_name",
									required: true,
									className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900",
									placeholder: "Doe"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-sm font-medium text-gray-700 mb-2",
								children: "Email Address"
							}), /* @__PURE__ */ jsx("input", {
								type: "email",
								name: "email",
								required: true,
								className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900",
								placeholder: "john@example.com"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-sm font-medium text-gray-700 mb-2",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								name: "message",
								required: true,
								rows: 4,
								className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900",
								placeholder: "Tell us about your project..."
							})] }),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								className: "w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-200",
								children: [/* @__PURE__ */ jsx("span", { children: "Send Message" }), /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" })]
							})
						]
					})
				})]
			})
		})
	});
};
//#endregion
//#region app/components/Footer.tsx
var services = [
	{
		title: "Custom Website Design",
		description: "We create high-performance, visually stunning websites that represent your brand perfectly. Our websites are not just digital brochures; they are powerful tools designed to convert visitors into loyal customers.",
		benefits: [
			"Mobile-first design",
			"High conversion rates",
			"Fast loading speeds"
		]
	},
	{
		title: "SEO Optimization",
		description: "Our SEO experts use the latest techniques to ensure your website ranks high on search engines. We focus on keyword research, technical SEO, and content strategy to drive sustainable organic growth.",
		benefits: [
			"Keyword ranking growth",
			"Technical SEO audits",
			"Content strategy"
		]
	},
	{
		title: "Digital Marketing",
		description: "Comprehensive digital marketing strategies to reach your target audience and grow your brand online.",
		benefits: [
			"Social media management",
			"Paid advertising",
			"Email marketing"
		]
	},
	{
		title: "Business Strategy",
		description: "Data-driven business strategies to help you navigate the digital landscape and achieve your goals.",
		benefits: [
			"Market analysis",
			"Growth planning",
			"ROI optimization"
		]
	}
];
var legalContent = {
	"Privacy Policy": {
		description: "Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.",
		benefits: [
			"Data encryption",
			"No third-party selling",
			"Transparency"
		]
	},
	"Terms of Service": {
		description: "By using our services, you agree to these terms. They outline our responsibilities and yours.",
		benefits: [
			"Service guarantees",
			"User responsibilities",
			"Legal compliance"
		]
	},
	"Cookie Policy": {
		description: "We use cookies to improve your experience on our site. This policy explains what cookies we use and why.",
		benefits: [
			"Personalization",
			"Site performance",
			"User preferences"
		]
	}
};
var Footer = () => {
	const [selectedItem, setSelectedItem] = useState(null);
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-white border-t border-gray-100 pt-20 pb-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "col-span-1 lg:col-span-1",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 block",
								children: "Redtaste Websolutions"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-600 mb-8 max-w-xs",
								children: "Empowering businesses with cutting-edge digital solutions and professional web experiences."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex space-x-4",
								children: [
									/* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-gray-400 hover:text-blue-600 transition-colors",
										children: /* @__PURE__ */ jsx(Twitter, { size: 20 })
									}),
									/* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-gray-400 hover:text-blue-600 transition-colors",
										children: /* @__PURE__ */ jsx(Facebook, { size: 20 })
									}),
									/* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-gray-400 hover:text-blue-600 transition-colors",
										children: /* @__PURE__ */ jsx(Instagram, { size: 20 })
									}),
									/* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-gray-400 hover:text-blue-600 transition-colors",
										children: /* @__PURE__ */ jsx(Linkedin, { size: 20 })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-lg font-bold text-gray-900 mb-6",
						children: "Services"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-4",
						children: services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
							onClick: () => setSelectedItem(service),
							className: "text-gray-600 hover:text-blue-600 transition-colors",
							children: service.title
						}) }, service.title))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-lg font-bold text-gray-900 mb-6",
						children: "Company"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#about",
							className: "text-gray-600 hover:text-blue-600 transition-colors",
							children: "About Us"
						}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "text-gray-600 hover:text-blue-600 transition-colors",
							children: "Contact"
						}) })]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-gray-500 text-sm",
					children: "© 2026 Redtaste Websolutions Inc. All rights reserved."
				}), /* @__PURE__ */ jsx("div", {
					className: "flex space-x-8",
					children: Object.entries(legalContent).map(([title, content]) => /* @__PURE__ */ jsx("button", {
						onClick: () => setSelectedItem({
							title,
							...content
						}),
						className: "text-gray-500 text-sm hover:text-blue-600 transition-colors",
						children: title
					}, title))
				})]
			})]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: selectedItem && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto",
			children: [/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setSelectedItem(null),
				className: "fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .9,
					y: 20
				},
				className: "relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto p-8 lg:p-12",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => setSelectedItem(null),
					className: "absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20",
					children: /* @__PURE__ */ jsx(X, { size: 24 })
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-3xl font-bold text-gray-900 mb-6",
							children: selectedItem.title
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-8",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-sm font-bold text-blue-600 uppercase tracking-widest mb-3",
								children: "Overview"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-600 leading-relaxed",
								children: selectedItem.description
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-sm font-bold text-gray-900 uppercase tracking-widest mb-4",
								children: "Key Features"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: selectedItem.benefits.map((benefit) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-2 text-gray-600",
									children: [/* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-blue-500 flex-shrink-0" }), /* @__PURE__ */ jsx("span", {
										className: "text-sm",
										children: benefit
									})]
								}, benefit))
							})] })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 pt-6 border-t border-gray-100",
							children: /* @__PURE__ */ jsx("button", {
								onClick: () => setSelectedItem(null),
								className: "w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200",
								children: "Close"
							})
						})
					]
				})]
			})]
		}) })]
	});
};
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Redtaste Websolutions | Professional Digital Services" }, {
		name: "description",
		content: "Expert web development, business profiles, and SEO optimization by Redtaste Websolutions."
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(Portfolio, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-CtMbrDkW.js",
		"imports": ["/assets/jsx-runtime-CmABIsXt.js", "/assets/scheduler-B-dnwOS3.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Iw1-xDNd.js",
			"imports": ["/assets/jsx-runtime-CmABIsXt.js", "/assets/scheduler-B-dnwOS3.js"],
			"css": ["/assets/root-DYeuowac.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-CPVCn7gY.js",
			"imports": ["/assets/jsx-runtime-CmABIsXt.js", "/assets/scheduler-B-dnwOS3.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-285721ab.js",
	"version": "285721ab",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "dist\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
