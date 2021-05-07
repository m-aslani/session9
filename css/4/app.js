$(function () {
  $("input[name=time]").before('<button id="btn1T">-</button>');
  $("input[name=time]").after('<button id="btn2T">+</button>');
  $("input[name=count]").before('<button id="btn1C">-</button>');
  $("input[name=count]").after('<button id="btn2C">+</button>');
 
/** for timer */


  $("#btn1T").click(function () {
    let time = $("input[name=time]").val();
    console.log(time);
    let t = time.split(":");
    console.log(t);
    let sec = parseInt(t[1]);
    let min = parseInt(t[0]);
    if (sec === 0) {
      min--;
      sec = 45;
    } else {
      sec -= 15;
    }
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    $("input[name=time]").val(`${min} : ${sec}`);
  });

  $("#btn2T").click(function () {
    let time = $("input[name=time]").val();
    let t = time.split(":");
    console.log(t);
    let sec = parseInt(t[1]);
    let min = parseInt(t[0]);
    if (sec === 45) {
      min++;
      sec = 0;
    } else {
      sec += 15;
    }
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    $("input[name=time]").val(`${min} : ${sec}`);
  });
//   min = min < 10 ? "0" + min : min;
//   sec = sec < 10 ? "0" + sec : sec;
//   $("input[name=time]").val(`${min} : ${sec}`);

  /** for counter  */

  $("#btn1C").click(function () {
    let num = $("input[name=count]").val();
    num = parseInt(num);
    num--;
    $("input[name=count]").val(`${num}`);
  });
  $("#btn2C").click(function () {
    let num = $("input[name=count]").val();
    num = parseInt(num);
    num++;
    $("input[name=count]").val(`${num}`);
  });
});
