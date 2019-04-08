import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import logo from "../assets/logo/logo.png";
import "../assets/styles/main.scss";
import ContractOverview from "../components/contract/ContractOverview";

class Home extends Component<RouteComponentProps> {
	public state = {
		searchValue: ""
	};

	public render() {
		return (
			<div className="home">
				<form>
					<div className="main-logo text-center">
						<img alt="Ctor" src={logo} />
					</div>

					<div className="inner-form">
						<div className="basic-search">
							<div className="input-field">
								<input
									id="search"
									type="text"
									value={this.state.searchValue}
									onChange={event => {
										this.setState({ searchValue: event.target.value });
									}}
									onKeyPress={event => {
										if (event.key === "Enter") {
											this.search();
										}
									}}
									placeholder="Search for a contract address..."
								/>
								<div className="icon-wrap">
									<svg version="1.1" xmlBase="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
										<path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z" />
									</svg>
								</div>
							</div>
						</div>

						<ContractOverview limit={10} />
					</div>
				</form>
			</div>
		);
	}

	public search() {
		this.props.history.push("/contract/" + this.state.searchValue);
		return false;
	}
}

export default Home;