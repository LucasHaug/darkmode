const colorMap = [
  ["rgb(239, 83, 80)", "rgb(211, 47, 47)"], // Mecânica
  ["rgb(236, 64, 122)", "rgb(194, 24, 91)"], // Bixes
  ["rgb(92, 107, 192)", "rgb(48, 63, 159)"], // Elétrica
  ["rgb(38, 198, 218)", "rgb(0, 131, 143)"], // Comp
  ["rgb(171, 71, 188)", "rgb(123, 31, 162)"], // Design
];

const updateColors = () => {
  let from = ($("body").hasClass("darkmode") && 1) || 0;
  let to = (from == 0 && 1) || 0;

  $(".username-coloured, li.recent-topic-item .metadata > a >  span, .online-list .legend a, .group-title").each(function (i) {
    colorMap.forEach((e) => {
      if (this.style.color == e[from]) {
        this.style.color = e[to];
      }
    });
  });
};

function darkmode(doDark) {
  let date = new Date();

  if (doDark) {
    $("body").addClass("darkmode");
    $("#callDark").hide();
    $("#callLight").show();

    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "darkmode=true;expires=" + date.toGMTString() + ";path=/";
  } else {
    $("body").removeClass("darkmode");
    $("#callDark").show();
    $("#callLight").hide();

    document.cookie = "darkmode=false;expires=" + date.toGMTString() + ";path=/";
  }

  updateColors();
}

updateColors();
