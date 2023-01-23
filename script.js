let language = prompt("What language do you speak?");

      if (language === "English" || language === "english") {
        alert("Welcome to the latest Survivor Updates!");
      } else {
        alert("👋👋👋");
      }

      function signUp() {
        let name = prompt("What is your name?");
        let age = prompt("How old are you?");
        let email = prompt("What is your email?");

        if (age >= 18) {
          let heading = document.querySelector("h2");
          heading.innerHTML =
            "Thank you " +
            name +
            " We'll be in touch by " +
            "" +
            email +
            " Enjoy Survivor!";
        } else {
          let heading = document.querySelector("h2");
          heading.innerHTML =
            "Sorry " +
            name +
            " you are too young to sign up for updates at this time. ";
        }
      }

      let button = document.querySelector("button");
      button.addEventListener("click", signUp);