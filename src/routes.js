import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

const AppRoutes = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/contact" exact>
					<Contact />
				</Route>
			</Switch>
		</div>
	);
};

export default AppRoutes;
