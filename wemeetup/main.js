
        jQuery(document).ready(function($) {

            var monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

            $.ajax({
                url: "events.json", // change this
                type: 'GET', // POST | PUT | GET | etc
                data: { data: "data" }, // change this
                dataType: "json", // change the data type according to your needs
                success: function(response) // if success do this
                {

                    var events = JSON.parse(response)
                    console.log(events);
                    var count = 0;
                    $.each(events, function(key, value) {

                            console.log(events.event_id);
                            console.log(value);
                            var building_name = events.building_name[count];
                            var event_title = events.event_title[count];
                            var event_date = events.event_date[count];

                            var meetup_group = events.meetup_group[count];
                            var url = "https://www.meetup.com/" + events.url[count];


                            var rand_members = Math.floor(Math.random() * Math.floor(7));

                            var currentDate = new Date(event_date);
                            var date = currentDate.getDate();
                            var month = currentDate.getMonth(); 
                            var year = currentDate.getFullYear();
                            var dateWithFullMonthName = monthNames[month] + " " + date + ", " + year;
                            var date_month = monthNames[month] + " " + date;
                            count++;

                            $(".container").append(
                            '<div class="card rounded mb-3 gray">' + 
                            '<h5 class="card-title pl-3 pt-3 mb-1">'+ event_title+'</h5>' + 
                            '<h6 class="card-subtitle pl-3 mb-2 text-muted gray">' + building_name + '</h6>' + 
                            '<div class="card-body">' + 
                                '<h5 class="card-subtitle">'+ meetup_group + '</h5>' + 
                                '<p class="card-text mb-2 mr-2 pr-2 text-right gray">' + date_month + '       '+
                                    '<button type="button" class="btn btn-interest pl-2" data-toggle="modal" data-target="#exampleModalCenter'+count+'">' +
                                        "Find Out More!" +
                                    '</button>' + 
                                '</p></div></div>')
                        

                                $(".container").append(
        '<div class="modal fade" id="exampleModalCenter'+count+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
            '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">'+
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<img src="logosmall.png" width="120px" height=auto alt="">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                            '<span aria-hidden="true">&times;</span>' +
                        '</button></div>' +
                    '<div class="modal-body"><div class="modal-top"><div class="modal-text">' +
                                '<h5 class="modal-title red" id="exampleModalLongTitle">' + event_title +'</h5>'+
                                '<h6 class="card-subtitle mb-2 red">'+building_name +'</h6>' +
                                '<h6 class="card-subtitle mb-2 red">'+dateWithFullMonthName+'</h6>' +
                            '</div>'+
                            '<div class="modal-media"><img src="house.jpeg" width="120px" height=auto alt="" class="image">' +
                            '</div></div>'+
                        '<div class="modal-bottom">'+
                            '<h6 class="card-subtitle mb-2 red bold">'+rand_members+' other WeWork members are also interested in this event!</h6>'+
                            '<div class="egyptians">'+

                                '<img src="egyptian.gif" height=auto alt="" class="gif">'.repeat(rand_members)+
                                
                            '</div></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                        
                        '<a class="btn red btn-interest" target="_blank" href="'+url+'" role="button">Im interested</a>'+
                    '</div></div></div></div>'

                        );
                });

            }});
        });