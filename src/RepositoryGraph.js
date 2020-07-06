import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const extensions = {
	c: "C",
	java: "Java",
	py: "Python",
	cpp: "C++",
	cs: "C#",
	js: "JavaScript",
	r: "R",
	php: "PHP",
	swift: "Swift",
	sql: "SQL",
	go: "Go",
	asm: "Assembly",
	pl: "Perl",
	m: "MATLAB (.m)",
	mat: "MATLAB(.mat)",
	rb: "Ruby",
	sb: "Scratch (.sb)",
	sb2: "Scratch (.sb2)",
	sprite: "Scratch (.sprite)",
	sprite2: "Scratch (.sprite2)",
	rs: "Rust",
	pls: "PL/SQL",
	vb: "Visual Basic",
	css: "CSS",
	html: "HTML",
	htm: "HTM",
	json: "JSON",
	jsp: "JSP",
	asp: "ASP",
	aspx: "ASPX",
	jsx: "JavaScript (jsx)",
	md: "MarkDown",
	scss: "SCSS",
	ino: "Arduino",
	txt: "Text",
};

export default class RepositoryGraph extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			show: false,
			options: null,
		};
	}

	componentDidMount() {
		fetch(`${global.API_URL}/gitbook/Repository/${this.props.userid}/repograph/${this.props.repoName}`, {
			method: "get",
			headers: global.API_HEADERS,
		})
			.then((response) => response.json())
			.then((json) => {
				this.classifyExtensions(json.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	classifyExtensions = (data) => {
		console.log("수신된 데이터 >>", data);
		if (data === null) {
			this.setState({
				show: true,
			});
			return;
		}
		let etc = Object.keys(data).includes('etc') ? data['etc'] : 0;
		let chartData = [];
		for (let key in data) {
			if (Object.keys(extensions).includes(key)) {
				chartData.push({ type: "stackedBar100", toolTipContent: "<b>{name}:</b> {y} files (#percent%)", showInLegend: true, name: extensions[key], dataPoints: [{ y: data[key], label: "total" }] });
			} else {
				etc += 1;
			}
		}
		if (etc !== 0) {
			chartData.push({ type: "stackedBar100", toolTipContent: "<b>{name}:</b> {y} files (#percent%)", showInLegend: true, name: "기타 (etc)", dataPoints: [{ y: etc, label: "total" }] });
		}

		let dataPoint;
		let total;
		let options = {
			animationEnabled: true,
			theme: "light2", // 테마 종류: [ "light1", "light2", "dark1", "dark2" ]
			backgroundColor: "#F4F4F4",
			axisY: {
				interval: 10,
				suffix: "%",
			},
			data: chartData,
		};

		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for (let i = 0; i < dataPoint.length; i++) {
			if (i === 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}

		this.setState({
			show: true,
			options: options,
		});
	};

	render() {
		//finally, render components
		return (
			<div style={{ marginTop: "10px" }}>
				{this.state.show === false ? (
					<div style={{ width: "30px", margin: " 50px auto " }}>
						<i class="fas fa-spinner fa-2x" style={{ color: "#0FC19E", animation: "fa-spin 2s linear infinite", fontSize: "4em", marginLeft: "-25px" }}></i>
					</div>
				) : this.state.options === null ? (
					<></>
				) : (
					<CanvasJSChart options={this.state.options} containerProps={{ height: "150px" }} />
				)}
			</div>
		);
	}
}
