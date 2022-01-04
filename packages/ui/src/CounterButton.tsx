import * as React from "react";

export const CounterButton = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<p>
				This is component iadasdfsdfdffsfsds from <code>ui</code>
			</p>
			<p>
				<button type="button" onClick={() => setCount((c) => c + 1)}>
					count updated {count}
				</button>
			</p>
		</div>
	);
};
