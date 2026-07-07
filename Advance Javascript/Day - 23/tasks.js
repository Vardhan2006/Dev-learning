let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitform.bind(this)); // bind the value of submit form so the this will be object
    },

    submitform: function (e) {
        e.preventDefault();
        this.addUser();
        this.renderUI();

        console.log(this.users);
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: form.photo.value,
        });

        form.reset();
    },

    renderUI: function () {

        let usersContainer = document.querySelector(".users");

        usersContainer.innerHTML = "";

        this.users.forEach(function (user) {

            usersContainer.innerHTML += `
            <div class="card">
                <img src="${user.photo}" alt="${user.username}">
                <h3>${user.username}</h3>
                <h4>${user.role}</h4>
                <p>${user.bio}</p>
            </div>
        `;
        });

    },

    removeUser: function () { },
};

userManager.init();

/*

approach

- first create array to store users
- than create methods for addUser, removeUser, Submitform
- check where to initi than create init func and add event 
  listener to the form

*/