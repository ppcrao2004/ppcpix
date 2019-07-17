$(function(){

        $("#btnShow").click(function () {
            $("#dialog").dialog({
                modal: true,
                title: "Google Map",
                width: 600,
                hright: 450,
                buttons: {
                    Close: function () {
                        $(this).dialog('close');
                    }
                },
                open: function () {
                    var mapOptions = {
                        center: new google.maps.LatLng(33.514586, -86.780558),
                        zoom: 18,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                    var map = new google.maps.Map($("#dvMap")[0], mapOptions);
                }
            });
        });
});