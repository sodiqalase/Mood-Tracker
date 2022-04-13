import React, { useState } from "react";

import "./stylesheets/index.scss";

import MoodTrackerInput from "./components/MoodTrackerInput";
import MoodTrackerResult from "./components/MoodTrackerResult";

interface ImoodObject {
	icon: string;
	text: string;
	date: string;
	value: string;
}

function App() {
	const [results, setResults] = useState<ImoodObject[] | []>([]);

	return (
		<main className="screen">
			<section className="moodTracker__container">
				<section className="moodTracker__inputWrapper">
					<MoodTrackerInput setResults={setResults} />
				</section>
				<section className="moodTracker__resultWrapper">
					<MoodTrackerResult results={results} />
				</section>
			</section>
		</main>
	);
}

export default App;
