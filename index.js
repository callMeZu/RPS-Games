//DOM
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  option_images = document.querySelectorAll(".option_image");

//Loop option image
option_images.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    //2nd loop
    option_images.forEach((image2, index2) => {
      //If index not equal, remove the "active" class
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    //TImeout
    let delay = setTimeout(() => {
      gameContainer.classList.remove("start");

      //main pic change when clicked the option pics
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      //random num
      let randomNumber = Math.floor(Math.random() * 3);

      //setting computer
      let cpuImages = [
        "assets/Rocky.png",
        "assets/Pappery.png",
        "assets/Scissors.png",
      ];
      cpuResult.src = cpuImages[randomNumber];

      //assign computer letter value
      let cpuValue = ["R", "P", "S"][randomNumber];
      //assign letter value with index
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        PR: "Kamu",
        SR: "Computer",
        PP: "Draw",
        RP: "Computer",
        SP: "Kamu",
        SS: "Draw",
        PS: "Computer",
        RS: "Kamu",
      };

      let outcomeValue = outcomes[userValue + cpuValue];

      //display the result
      result.textContent =
        userValue === cpuValue ? "Draw:)" : `${outcomeValue} Menang!!`;
    }, 2500);
  });
});
