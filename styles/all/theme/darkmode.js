function darkmode(doDark) {
	if (doDark) {
		$("body").addClass("darkmode");
		$("#callDark").hide();
		$("#callLight").show();
		var date = new Date();
		date.setTime(date.getTime()+(365*24*60*60*1000));
		document.cookie = "darkmode=true;expires=" + date.toGMTString() + ";path=/";

		const colorMap = [
			["rgb(239, 83, 80)", "rgb(211, 47, 47)"],   // Mecânica
			["rgb(236, 64, 122)", "rgb(194, 24, 91)"],  // Bixes
			["rgb(92, 107, 192)", "rgb(48, 63, 159)"],  // Elétrica
			["rgb(38, 198, 218)", "rgb(0, 131, 143)"],  // Comp
			["rgb(171, 71, 188)", "rgb(123, 31, 162)"], // Design
		];

		$(".username-coloured, li.recent-topic-item .metadata > a >  span, .online-list .legend a").each(function (i) {
			colorMap.forEach(e => {
				if (this.style.color == e[1]) {
					this.style.color = e[0];
				}
			});
		});

	} else {
		$("body").removeClass("darkmode");
		$("#callDark").show();
		$("#callLight").hide();
		var date = new Date();
		document.cookie = "darkmode=false;expires=" + date.toGMTString() + ";path=/";

		const colorMap = [
			["rgb(239, 83, 80)", "rgb(211, 47, 47)"],   // Mecânica
			["rgb(236, 64, 122)", "rgb(194, 24, 91)"],  // Bixes
			["rgb(92, 107, 192)", "rgb(48, 63, 159)"],  // Elétrica
			["rgb(38, 198, 218)", "rgb(0, 131, 143)"],  // Comp
			["rgb(171, 71, 188)", "rgb(123, 31, 162)"], // Design
		];

		$(".username-coloured, li.recent-topic-item .metadata > a >  span, .online-list .legend a").each(function (i) {
			colorMap.forEach(e => {
				if (this.style.color == e[1]) {
					this.style.color = e[0];
				}
			});
		});
	}
}