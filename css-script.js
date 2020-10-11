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
    'CheechsPizza/index.html'
];

window.addEventListener('load', function()
{
    for (var i = 0; i < goToSiteBtn.length; i++)
    {
        var eachSiteBtn = goToSiteBtn[i];

        goToSiteBtn[i].value = i;

        eachSiteBtn.addEventListener('click', function(e)
        {
            window.open(siteURLS[e.target.value], '_blank');
        });
    }
});