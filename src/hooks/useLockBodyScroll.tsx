import { useLayoutEffect } from "react";

const useLockBodyScroll = (locked: boolean) => {
	useLayoutEffect(() => {
		const overflowY = locked ? "hidden" : "scroll";

		document.body.style.overflowY = overflowY;
	}, [locked]);
};

export default useLockBodyScroll;
