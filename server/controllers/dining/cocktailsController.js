/**
 * Created by patterncoder on 6/2/2015.
 */
var entertainmentService = require('../../services/entertainmentService');
var eventsService = require('../../services/eventsService');




var getData = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Cocktails";
    entertainmentService.getFutureMusicTop3()
        .then(function(music) {
            viewBag.schedule = music;
            return eventsService.getEventsTopX();
        })
        .then(function(events){
            viewBag.events = events;
            res.render('dining/cocktails', {  viewBag: viewBag })
        })


};



exports.getView = getData;