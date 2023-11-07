import { useState } from "react";
import "./App.css";
import { extractVideoIDFromYoutubeURL } from "./extractVideoIDFromYoutubeURL";

export function App(): JSX.Element {
    const [text, setText] = useState("");

    function copyAndClear(fullURL: string): void {
        const code = extractVideoIDFromYoutubeURL(fullURL);
        if (code) {
            navigator.clipboard.writeText(code);
            setText("");
        } else {
            alert("couldn't get video id from url");
        }
    }

    const extracted = extractVideoIDFromYoutubeURL(text);

    return (
        <div>
            <h1>Extract video id from youtube URL</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="youtube url"
            />
            <button onClick={(e) => copyAndClear(text)}>copy and clear</button>
            {extracted !== null && <input value={extracted} readOnly />}
        </div>
    );
}

export default App;
