'use strict';

var goToSiteBtn = document.getElementsByClassName("goToSiteBtn");
var siteDesc = document.getElementsByClassName("siteDesc");

var siteURLS = 
[
    'JulieBday2020/index.html',
    'About Me Week 1/index.html',
    'ImageSwapping/index.html',
    'SubscribeToMyWebsite/index.html',
    'FunctionalImageSwapping/index.html',
    'ImageSwapping-Arrays/index.html',
    'CheechsPizza/index.html',
    'Photo Gallery with Timer/index.html',
    "Validating - Cheech's Pizza Online Ordering/index.html",
    'Address Book/index.html',
    'MidTerm - Tic Tac Toe/index.html',
	'Chalk/index.js',
];

window.addEventListener('load', function()
{
    for (var i = 0; i < goToSiteBtn.length; i++)
    {
        var eachSiteBtn = goToSiteBtn[i];

        goToSiteBtn[i].value = i;
		
		if (goToSiteBtn[i].id == "CurrentWeather")
		{
			eachSiteBtn.addEventListener('click', function(e)
			{
				window.open('https://ridinginstyle00-current-weather.netlify.app/', '_blank');
			});
		}
		else if (goToSiteBtn[i].id == "DeployAVueProject")
		{
			eachSiteBtn.addEventListener('click', function(e)
			{
				window.open('https://ridinginstyle00-deploy.netlify.app/', '_blank');
			});
		}
		else if (goToSiteBtn[i].id == "PopularTVShows")
		{
			eachSiteBtn.addEventListener('click', function(e)
			{
				window.open('https://ridinginstyle00-populartvshows.netlify.app/', '_blank');
			});
		}
		else
		{
			eachSiteBtn.addEventListener('click', function(e)
			{
				window.open(siteURLS[e.target.value], '_blank');
			});
		}		
    }
});