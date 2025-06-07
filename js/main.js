const funnyEmptyMessages = [
    "Trying to generate a QR code from nothing? Bold move! 😄",
    "Oops! Empty input detected. Even QR codes need something to chew on. 🤖",
    "Hey! I need *something* to turn into a QR code. Even a potato URL. 🥔",
    "Nada in the input box. Let’s try that again, shall we? 😅",
    "You typed... absolutely nothing. QR code says: 'I got nothing, chief.' 🤷‍♂️",
    "Please feed me a link! I’m hungry for data! 🍽️🔗",
    "This isn’t magic. I still need a URL, wizard. 🧙‍♂️✨",
    "Houston, we have a problem. The textbox is empty. 🚀",
    "No input, no QR. That’s the rule. 📏",
    "A blank box won't get you a QR code. Sorry! 📦❌",
    "I asked for a URL, not your silence. 🤫",
    "Give me something. Anything. Even your grocery list. 🛒",
    "Error: User forgot what they were doing. 🧠💤",
    "Oops! You dropped your idea on the floor. 🎈",
    "The textbox is lonely. Say hi to it with a URL. 👋",
    "QR codes don’t speak ghost. 👻",
    "Can’t make a QR code out of dreams. ☁️",
    "404: User input not found. 🕵️‍♂️",
    "Enter a URL or I’ll tell the internet on you. 🧑‍💻",
    "Silence is golden, but I still need a URL. 🥇",
    "I’m not a mind reader. Put something in the box! 🧠🔮",
    "I can't make a QR code out of nothing... yet. 🤓",
    "The button works. Your memory, maybe not. 😜",
    "A blank canvas? How very avant-garde. 🎨",
    "Imagine a QR code. That’s all you’ll get without input. 🧘",
    "You forgot the URL. I didn’t forget to notice. 👀",
    "This textbox isn’t going to fill itself. Or is it? 🤔",
    "You’ve officially confused me and the canvas. 😵‍💫",
    "Still waiting on that URL... ⌛",
    "QR code not found. Did you lose it? 🧭",
    "No URL? This isn’t a fortune cookie. 🥠",
    "Put in a URL or I’ll start singing. 🎤😳",
    "You skipped a step. Try again, Padawan. 🛸",
    "Even AI has limits. I need a URL. 😅",
    "That textbox isn’t just decorative. 🖼️",
    "Input, please. My canvas is feeling useless. 🖌️",
    "You hit Convert, but there's nothing to convert. 😬",
    "You had one job... and it was to type something. 📋",
    "A wild error appeared! 💥",
    "Why are we yelling at empty boxes? 😶",
    "Do I look like I can read your mind? Wait, don’t answer. 🧐",
    "Blank input detected. Initiating judgment protocol... 🧑‍⚖️",
    "You can’t make soup without ingredients. 🥣",
    "This isn’t charades. You gotta type. 🎭",
    "Stop trying to bamboozle me with emptiness. 😤",
    "Generating QR code for... nothing. Ta-da! 🎩",
    "If I had a nickel for every empty input... 💰",
    "This button isn’t magical. Well, not *that* magical. ✨",
    "Seriously? Try again, tech wizard. 🧙‍♀️",
    "What am I supposed to convert? Air? 🫧",
    "Roses are red, violets are blue, type something in, or no QR for you. 🌹",
    "Fun fact: Empty boxes generate zero QR codes. 📦",
    "QR code says: 'Nice try, human.' 🤖",
    "The input box is as empty as my weekend plans. 📅",
    "This canvas is hungry. Feed it a URL! 🍽️",
    "No input? My disappointment is immeasurable. 😔",
    "Hello darkness, my old friend... there’s no input again. 🎶",
    "Guess what happens when the input is empty? Nothing. 🥱",
    "If you stare long enough, a QR code still won’t appear. 👁️",
    "Attempting to convert your imagination... 🌀",
    "No URL, no party. 🎉",
    "That button’s tired of being pressed for no reason. 💤",
    "Is this some kind of minimalist QR trend? 😎",
    "I need content! This isn’t a vibes-only generator. 🌈",
    "The textbox called. It wants attention. 📞",
    "Are we pretending URLs don’t exist now? 👀",
    "I'm 90% sure you forgot the URL. The other 10% is denial. 😏",
    "This feels like a staring contest with a blank form. 🐸",
    "Don’t make me generate an error QR. 🧨",
    "Still waiting... and waiting... and waiting... ⏳",
    "Insert coin to continue... or just type something. 🕹️",
    "Your silence is loud. And unproductive. 🔇",
    "Beep boop. Input not found. 🤖🔍",
    "You've reached the void. There’s nothing here. 🕳️",
    "QR codes can't be made from vibes. Sorry. ✌️",
    "Even a 'hello' would be better than this. 👋",
    "Maybe the QR code is inside you all along. ❤️",
    "No words? No code. That’s the deal. 🛑",
    "I'd say 'nice try' but you didn't try anything. 😂",
    "Congratulations, you broke... nothing. 💥",
    "This isn’t a reverse-QR generator. 🌀",
    "Blank inputs are like silent karaoke. Weird. 🎤❌",
    "Put something in the box and I’ll make the magic happen. 🪄",
    "A QR code without content is just a sad square. 🥲",
    "I can't decode the silence. Speak, friend, and enter. 🧙‍♂️",
    "I asked for a URL, not a riddle. 🧩",
    "You did nothing — and it worked perfectly. 😁",
    "No data? No drama. Just no QR. 🎭",
    "Trying to break the matrix? Try entering a URL first. 🧬",
    "Zero input = zero QR = zero fun. 🎈",
    "I've met air that was more informative. 🪁",
    "Don’t make me generate a passive-aggressive QR. 😐",
    "This isn’t a motivational app. Just type something! 😅",
    "That’s an impressive amount of... nothing. 🪞",
    "You can’t copy what doesn’t exist. 📋❌",
    "The force is strong with this... empty input. 🌌",
    "Enter something or the QR elf goes home. 🧝‍♂️",
    "What’s invisible, silent, and doesn't make a QR? This. 👻",
    "The QR gods demand a sacrifice. A URL will do. 🧿",
    "This blank is the loudest cry for help I’ve seen. 🆘",
    "One does not simply generate a QR without input. 🧝",
    "Hey, I’m not judging... but the textbox might be. 👀",
    "Please put a URL in, or I’ll start generating dad jokes. 😬",
    "No data = no QR = existential crisis. 🧘‍♂️",
    "You’ve reached peak nothingness. 🕶️",
    "I bet your cat just walked across the keyboard. 🐱⌨️",
    "The QR fairy went on strike due to lack of content. 🧚",
    "Enter something... anything... even Morse code! 🔡",
];

const qr = new QRious({
    element: document.getElementById('qrCanvas'),
    size: 240,
    value: 'Did you really scan the default QR code? 🤔',
});

function showNotification(message, duration = 3000) {
    let notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '30px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.background = 'rgba(0,0,0,0.8)';
    notification.style.color = '#fff';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '6px';
    notification.style.fontSize = '16px';
    notification.style.opacity = '1';
    notification.style.transition = 'opacity 0.5s';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, duration);
}

function speakMessage(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'en-US';
    utterance.pitch = 1.2; // Slightly higher pitch for a funnier tone
    utterance.rate = 1; // Normal speaking rate
    utterance.volume = 1; // Full volume
    speechSynthesis.speak(utterance);
}

document.getElementById('generateBtn').onclick = function () {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        msg = funnyEmptyMessages[Math.floor(Math.random() * funnyEmptyMessages.length)];
        showNotification(msg);
        speakMessage(msg);
        return;
    }
    qr.value = url;
    document.getElementById('downloadBtn').disabled = false;
};

document.getElementById('downloadBtn').onclick = async function () {
    const canvas = document.getElementById('qrCanvas');
    if (navigator.canShare && navigator.canShare({ files: [] })) {
        canvas.toBlob(async function (blob) {
            const file = new File([blob], 'qr-code.png', { type: 'image/png' });
            try {
                await navigator.share({
                    files: [file],
                    title: 'QR Code',
                    text: 'Here is a QR code I generated!'
                });
            } catch (err) {
                alert('Sharing failed or was cancelled.');
            }
        }, 'image/png');
    } else {
        // Download the image if sharing is not supported
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qr-code.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

document.getElementById('aboutBtn').onclick = function () {
    alert('QR Generator\n\nEnter a URL and click Convert to generate a QR code. You can download or share the QR code using the provided button.');
};