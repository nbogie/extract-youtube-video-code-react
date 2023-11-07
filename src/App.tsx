import { useState } from "react";
import "./App.css";

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

function extractVideoIDFromYoutubeURL(fullURL: string): string | null {
    //https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2&pp=iAQB
    //example input: "https://www.youtube.com/watch?v=yPWkP-Ofn_Gsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2&pp=iAQB"
    //example output: "yPWkP-Ofn_Gsw"
    const regex = /[?&]v=([a-zA-Z0-9_-]+)/;

    // Use the regex to extract the video ID from the URL
    const match = fullURL.match(regex);

    // Check if a match was found and return the video ID or null if no match
    return match ? match[1] : null;
}

export default App;
