import React, { FC } from "react";
import { Button } from "antd";

const ZButton: FC = ({ children }) => {
	return (
		<Button>
			<div className="text-xl text-blue-600">Hello {children}</div>
		</Button>
	);
};

export default ZButton;
