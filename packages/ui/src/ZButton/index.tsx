import React, { FC } from "react";
import { Button } from "antd";
import { IButton } from "./interface";

const ZButton: FC<IButton> = ({ children }) => {
	return (
		<Button>
			<div className="text-xl text-blue-600">Hello {children}</div>
		</Button>
	);
};

export default ZButton;
