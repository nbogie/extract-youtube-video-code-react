import { test, expect } from "vitest";
import { extractVideoIDFromYoutubeURL } from "./extractVideoIDFromYoutubeURL";

test("extractVideoIDFromYoutubeURL should extract video ID from good URL", () => {
    const inputURL =
        "https://www.youtube.com/watch?v=yPWkP-Ofn_Gsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2&pp=iAQB";
    const expected = "yPWkP-Ofn_Gsw";
    const actual = extractVideoIDFromYoutubeURL(inputURL);
    expect(actual).toEqual(expected);
});

test("extractVideoIDFromYoutubeURL should return null for invalid URL", () => {
    const inputURL =
        "https://www.youtube.com/watch?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2&pp=iAQB";
    const actual = extractVideoIDFromYoutubeURL(inputURL);
    expect(actual).toBeNull();
});
