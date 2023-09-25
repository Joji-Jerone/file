var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      r_size +
      "px;height:" +
      r_size +
      "px;left:" +
      r_left +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      r_bg +
      ",1);-webkit-animation:love " +
      r_time +
      "s ease;-moz-animation:love " +
      r_time +
      "s ease;-ms-animation:love " +
      r_time +
      "s ease;animation:love " +
      r_time +
      "s ease'></div>"
  );

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      "px;height:" +
      (r_size - 10) +
      "px;left:" +
      (r_left + r_num) +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      (r_bg + 25) +
      ",1);-webkit-animation:love " +
      (r_time + 5) +
      "s ease;-moz-animation:love " +
      (r_time + 5) +
      "s ease;-ms-animation:love " +
      (r_time + 5) +
      "s ease;animation:love " +
      (r_time + 5) +
      "s ease'></div>"
  );
}, 500);

var i = 0;
var txt1 =
  "Hello Meri Lulu.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > You mean the world to me < Everything about you is so damn close to my heart  <<                  You are the one I would never want to leave < My precious gift in my life....! <                           I cherish each and every moment with you...!                                                     > You have been my support system all through these years...!                     << I am deeply in love with you my mermaid...!                                                     > I Love my DAD , MOM and Aunty so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my them....!                                                             >From the Depth of my heart , I say this...!                   <<I Love You Ende Kadal Kanniyae...!                                                              >Things getting tougher in life...                         <<We can get through this phase...                               >We have been together in the worst of worst Nightmares...                              << This too shall pass...!                                  >I left you lonely last night...                               <<Thinking of that I regret so badly...!                                       >You held my hand when you know me as a stranger ...                                         <<Now I am asking your hand once again...                                 <Give me your hand and I will never leave you alone again...                                       >Give me one more chance ...                               <<I will never let it go...                             >I will go any far to earn your trust ...                                     <<I will keep trying to win my lulu back...!                             >MERI PYAARI LULU...          <<COME ON YAAR , WE NEED TO GET BACK.                  << HAMAARI KAHANI HAS LONG WAY TO GO....!";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
