/*class Fetch {
    async getCurrent(input){
        const myKey = "efdd3fa197msh4db17590f0d99f7p17b49djsna1ec81770b7c";

        const response = await fetch(
            `https://google-translate1.p.rapidapi.com/language/translate/v2`);

        const data = await response.json();

        console.log(data);

        return data;
    }
}

*/

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "efdd3fa197msh4db17590f0d99f7p17b49djsna1ec81770b7c",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	},
	"data": {
		"q": "I love you",
		"target": "uz",
		"source": "en"
	}
};

$(document).ready(function(){

	$("#btn").click(function(e){
		var v = $('#getWord').val();
		
		$(`${settings.data.q}`).text(`${v}`);
		console.log(settings.data.q=v);
		console.log(v);
		console.log(settings.data.target);

		$.ajax(settings).done(function (response) {
			console.log(response);
			$("#translation").text(`${response.data.translations[0].translatedText}`);
			console.log();
	});
			
			
  });
  
});




  
/*
  const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "efdd3fa197msh4db17590f0d99f7p17b49djsna1ec81770b7c",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	},
	"data": {
		"q": "Hello, world!",
		"target": "es",
		"source": "en"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

*/