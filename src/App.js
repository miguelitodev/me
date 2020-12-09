import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
	return (
		<>
			<Router>
				<AppRoutes />
			</Router>
			<GlobalStyles />
		</>
	);
};

export default App;
