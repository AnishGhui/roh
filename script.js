function submitPoll() {
    var selectedLyric = document.getElementById("favorite-lyric").value;
    var resultText = "Thank you for participating! Your favorite lyric is: ";

    if (selectedLyric === "someone-like-you") {
        resultText += '"Never mind, I\'ll find someone like you."';
    } else if (selectedLyric === "hello") {
        resultText += '"Hello, it\'s me."';
    } else if (selectedLyric === "easy-on-me") {
        resultText += '"Go easy on me, baby."';
    }

    document.getElementById("poll-result").innerHTML = resultText;
}
