import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Select } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";

const { Option } = Select;

export default function OwnerUI({
	purpose,
	setPurposeEvents,
	address,
	mainnetProvider,
	localProvider,
	yourLocalBalance,
	price,
	tx,
	readContracts,
	writeContracts,
}) {
	// used for viewing tokens
	const [tokenNum, settokenNum] = useState('');

	return (
		<div>
			<div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64, marginBottom: 64 }}>
				<h2>🟡 View number of tokens 🟡</h2>
				<h3> { tokenNum } token(s) available. </h3>
				<div style={{ margin: 8 }}>
					<Select 
						placeholder="Enter Product ID"
						onSelect={async (value) => {
							writeContracts.YourContract.displayTokens(address, value)
							.then(result => {
								settokenNum(result.toNumber());
							});
						}}
					>
						<Option value="1">Earthen Bottle</Option>
						<Option value="2">Nomad Tumbler</Option>
						<Option value="3">Focus Paper Refill</Option>
						<Option value="4">Machined Mechanical Pencil</Option>
					</Select>
				</div>
			</div>
		</div>
	);
}
