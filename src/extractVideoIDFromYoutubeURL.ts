export function extractVideoIDFromYoutubeURL(fullURL: string): string | null {
    //https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2&pp=iAQB
    //example input: "https://www.youtube.com/watch?v=yPWkP-Ofn_Gsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2&pp=iAQB"
    //example output: "yPWkP-Ofn_Gsw"
    const regex = /[?&]v=([a-zA-Z0-9_-]+)/;

    // Use the regex to extract the video ID from the URL
    const match = fullURL.match(regex);

    // Check if a match was found and return the video ID or null if no match
    return match ? match[1] : null;
}
