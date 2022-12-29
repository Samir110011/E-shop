(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 0,
      dayMonth = "11/20/",
      event = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > event) {
    event = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(event).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days-1").innerText = Math.floor(distance / (day)),
          document.getElementById("hours-1").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes-1").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds-1").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "EVENT DURATION";
          document.getElementById("timer-1").style.display = "none";
          document.getElementById("timer-2").style.display = "flex";
          clearInterval(x);
        }
        //seconds
      }, 0)
  
  }());

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 0,
      dayMonth = "12/20/",
      event = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > event) {
    event = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(event).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days-2").innerText = Math.floor(distance / (day)),
          document.getElementById("hours-2").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes-2").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds-2").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "EVENT ENDED";
          document.getElementById("timer").style.display = "none";
          clearInterval(x);
        }
        //seconds
      }, 0)
  
  }());