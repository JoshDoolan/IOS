var app = {
    initialize: function () {
        this.bind();
    },
    bind: function () {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function () {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');


    },
    report: function (id) {
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};


var photoModel;
var graphEndpoint = "https://graph.facebook.com/";
var albumQuery = "SELECT object_id FROM photo WHERE aid IN(SELECT aid FROM album WHERE owner = 271904999570900 ORDER BY modified DESC LIMIT 1) ORDER BY modified DESC LIMIT 1";


var App = Em.Application.create();


App.PhotoView = Em.Object.create(
{
    PhotoData:0,
    Test : 1
});

//App.Fb = Em.Object.create(getData());

//App.MyView = Em.View.extend({
//    mouseDown: function () {
//        App.PhotoView.extend({
//            photoData: getData()
//        });
       
//    },
//});


getData();

function getData(parameters) {
    
    $.getJSON(graphEndpoint + "fql?q=" + albumQuery, function (data) {
        data = data.data[0].object_id;

        $.getJSON(graphEndpoint + data, function (photoData) {
            console.log("dataRecieved");
             photoModel = photoData;
             App.PhotoView.set("PhotoData", photoModel);

        });

    });

}

