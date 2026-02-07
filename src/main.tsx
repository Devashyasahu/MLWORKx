import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./globals.css";

function updateHeaderHeight() {
	const header = document.querySelector("header");
	if (!header) return;
	const height = header.getBoundingClientRect().height;
	document.documentElement.style.setProperty("--header-height", `${height}px`);
	// keep header element height in sync
	header.style.height = `var(--header-height)`;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);

// update after first paint and on resize to handle dynamic content
window.addEventListener("load", () => requestAnimationFrame(updateHeaderHeight));
window.addEventListener("resize", () => requestAnimationFrame(updateHeaderHeight));

// In case the header changes size after SPA navigation or async loads
const observer = new MutationObserver(() => requestAnimationFrame(updateHeaderHeight));
observer.observe(document.documentElement, { childList: true, subtree: true });

// Smooth-scroll handling for hash links (React Router may update hash without native smooth scroll)
function smoothScrollToHash() {
	if (!location.hash) return;
	const id = location.hash;
	const el = document.querySelector(id);
	if (el) {
		// run after layout updates
		requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
	}
}

window.addEventListener("load", () => requestAnimationFrame(smoothScrollToHash));
window.addEventListener("hashchange", () => requestAnimationFrame(smoothScrollToHash));

// Intercept in-page anchor clicks to smooth-scroll where hashchange may not fire
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  const anchor = target.closest("a") as HTMLAnchorElement | null;
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (!href || !href.startsWith("#")) return; // ⬅️ ONLY hash links

  const el = document.querySelector(href);
  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

