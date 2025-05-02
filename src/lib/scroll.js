// src/lib/scrollToCenter.js
export function scrollToCenter(node) {
	const handleClick = (e) => {
		e.preventDefault();

		const targetId = node.getAttribute('href').substring(1);
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}
