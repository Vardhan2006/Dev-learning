const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "amira mehta",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
        bio: "walking through dreams in doc martens ☁️🖤",
    },
    {
        name: "ojin oklawa",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
        bio: "too glam to give a damn 💅",
    }
];

function showUsers(arr) {
    const container = document.getElementById("users-container");

    container.innerHTML = "";

    arr.forEach((user) => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${user.pic}" alt="">

            <div class="blurred-layer"></div>

            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

showUsers(users);

function showUsers(arr) {
    const container = document.getElementById("users-container");

    container.innerHTML = "";

    arr.forEach((user) => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${user.pic}" alt="">

            <div class="blurred-layer"></div>

            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    console.log(inp.value);
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });

    showUsers(newUsers);
});

