(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {

            var selector_map = $('#google_map');
            var img_pin = selector_map.attr('data-pin');
            var data_map_x = selector_map.attr('data-map-x');
            var data_map_y = selector_map.attr('data-map-y');
            var scrollwhell = selector_map.attr('data-scrollwhell');
            var draggable = selector_map.attr('data-draggable');

            if (img_pin == null) {
                img_pin = 'images/icons/location.png';
            }
            if (data_map_x == null || data_map_y == null) {
                data_map_x = 37.3863866;
                data_map_y = -122.0576091;
            }
            if (scrollwhell == null) {
                scrollwhell = 0;
            }

            if (draggable == null) {
                draggable = 0;
            }

            var style = [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": "#FFBB00"
                        },
                        {
                            "saturation": 43.400000000000006
                        },
                        {
                            "lightness": 37.599999999999994
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "hue": "#FFC200"
                        },
                        {
                            "saturation": -61.8
                        },
                        {
                            "lightness": 45.599999999999994
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "hue": "#FF0300"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 51.19999999999999
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "hue": "#FF0300"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 52
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "hue": "#0078FF"
                        },
                        {
                            "saturation": -13.200000000000003
                        },
                        {
                            "lightness": 2.4000000000000057
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "hue": "#00FF6A"
                        },
                        {
                            "saturation": -1.0989010989011234
                        },
                        {
                            "lightness": 11.200000000000017
                        },
                        {
                            "gamma": 1
                        }
                    ]
                }
            ];

            var latitude = data_map_x,
                longitude = data_map_y,
                map_zoom = 14;

            var locations = [
                ['<div class="infobox"><h4>MINA</h4><p>Now that you visited our website, how' +
                ' <br>about checking out our office too?</p></div>'
                    , latitude, longitude, 2]
            ];

            if (selector_map !== undefined) {
                var map = new google.maps.Map(document.getElementById('google_map'), {
                    zoom: map_zoom,
                    scrollwheel: scrollwhell,
                    navigationControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: draggable,
                    styles: style,
                    center: new google.maps.LatLng(latitude, longitude),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
            }

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: img_pin
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }

        });

})(jQuery);