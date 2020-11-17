const BUGS_CHANNEL = "https://discord.com/api/webhooks/765979356329017354/290k_5-OtOHeNlU--97t7w4t-m5SfTJmpyxwTNtbmO4J_RhSspkKKJL9Im0i9FJzbg-9";
const SUGGEST_CHANNEL = "https://discord.com/api/webhooks/765979485744267295/AQxJreFrIa5wvW50WSAsgIqzkfHRkPXIBxeN9uODZ85UPRPC41zxpLtp7f_RYl4a-4Zz";
changeView("about");

function changeView(type, title) {
    const content = document.getElementById("content");
    switch (type) {
        case "updates":
            content.innerHTML = `
                    <h1>Updates</h1>
                        <p>This is a feature that is currently in developement, check back later to see how were going!</p>
                      `;
            break;
        case "bug":
            content.innerHTML = `
                <h1>Report a Bug</h1>
                    <p>Have you found a Bug? If so submit it here and join our Support Server to tell us more information, so we can make Fusion as perfect as possible.</p>
                        <input id="username" type="text" placeholder="Discord Username + Tag" class="field"><br><br>
                        <input id="text" type="text" placeholder="Bug to Report" class="field"><br><br>
                        <button type="button" onClick="sendHook('${BUGS_CHANNEL}', 'username', 'text', 'Fusion Bugs', 'https://cdn.discordapp.com/avatars/752595663732211831/ef253574485aa8b67a66eb2a585e771e.png?size=512', 'Please specify a valid Discord username with Tag.', 'Please specify the bug you would like to report.', 'Fusion 🌀 Bug')" class="button">🚀 Report Bug</button>
                  `;
            break;
        case "suggest":
            content.innerHTML = `
                    <h1>Submit a Suggestion</h1>
                        <p>If you have any ideas that will improve Fusion, submit them here or join our Support Server.</p>
                            <input id="username" type="text" placeholder="Discord Username + Tag" class="field"><br><br>
                            <input id="text" type="text" placeholder="Suggestion to Submit" class="field"><br><br>
                            <button type="button" onClick="sendHook('${SUGGEST_CHANNEL}', 'username', 'text', 'Fusion Suggestions', 'https://cdn.discordapp.com/avatars/752595663732211831/ef253574485aa8b67a66eb2a585e771e.png?size=512', 'Please specify a valid Discord username with Tag.', 'Please specify the suggestion you would like to submit!', 'Fusion 🌀 Suggestion')" class="button">🚀 Submit Suggestion</button>
                      `;
            break;
        case "about":
            content.innerHTML = `
                <h1>About</h1>
                    <p>Fusion includes so many great features such as reaction roles, starboard, fun commands that get your whole server giggling and last but not least moderation. Super simple'n'efficient ready to use however you'd like too, made to improve your Discord Server!</p>
                      <h3>Here are the commands you can use with Fusion.</h3>
                        <p class="commands">🌍 General: <br><code>reverse</code>, <code>search</code>, <code>encrypt</code>, <code>decrypt</code>, <code>ping</code></p>
                        <p class="commands">🛠️ Moderation: <br><code>warn</code>, <code>ban</code>, <code>kick</code>, <code>clear</code>, <code>avatar</code>, <code>profile</code>, <code>server</code>, <code>someone</code>, <code>rr-add</code>, <code>starboard</code></p>
                        <p class="commands">🕹 Recreational: <br><code>8ball</code>, <code>dice</code>, <code>meme</code>, <code>coinflip</code>, <code>roast</code>. <code>pun</code>, <code>dadjoke</code>, <code>rps</code>, <code>cuteness</code>, <code>butt</code>, <code>yomama</code></p>
                        <p class="commands">👻 Roleplay: <br><code>nuke</code>, <code>slap</code>, <code>hug</code>, <code>punch</code>, <code>laugh</code>, <code>squish</code>, <code>stretch</code></p>
                  `;
            break;
        default:
            content.innerHTML = `<h1>${title}</h1>`;
            break;
    }
}

function sendHook(URL, usernameID, textID, botUsername, botPfp, noUser, noText, botTitle) {
    const username = document.getElementById(usernameID);
    const text = document.getElementById(textID);
    if (username.value === "" || (username.value.includes("#") === false)) {
        return window.alert(noUser);
    }
    if (text.value === "") {
        return window.alert(noText);
    }
    var request = new XMLHttpRequest();
    request.open("POST", URL);
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        "username": botUsername,
        "avatar_url": botPfp,
        "embeds": [
            {
                "title": botTitle,
                "description": text.value,
                "footer": {
                    "text": `Sent By ${username.value}`
                },
            }
        ],
    }
    request.send(JSON.stringify(params));
    window.alert(`This has been recorded and soon will be reviewed.`);
    changeView("about");
}
