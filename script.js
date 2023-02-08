(function() {

  // data dada como referência para o countdown
  const countdownDate =  new Date("Aug 25, 2023 16:30:00")

  var daysLabel = document.getElementById("daysLeft");
  var hoursLabel = document.getElementById("hoursLeft");
  var minutesLabel = document.getElementById("minutesLeft");
  var secondsLabel = document.getElementById("secondsLeft");

  function startCountdown() {

    var timer = setInterval(() => {
      const today = new Date()

      // retorna o valor numérico em milissegundos correspondente ao horário da
      // data especificada de acordo com o horário universal
      var distance = countdownDate.getTime() - today.getTime()

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      secondsLabel.innerHTML = seconds.toString().padStart(2, '0')
      minutesLabel.innerHTML = minutes.toString().padStart(2, '0')
      hoursLabel.innerHTML = hours.toString().padStart(2, '0')
      daysLabel.innerHTML = days.toString().padStart(2, '0')

      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown-title").innerHTML = "Mission Accomplished"
        document.getElementById("timer").innerHTML = '<h2 style="text-align: center; width: 100%">Rocket has been launched! 🚀</h2>'
      }
    }, 1000)

  }

  startCountdown()
  
})();