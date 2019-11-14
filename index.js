function initMap() {
    var options = {
        zoom:1,
        center:{lat:51.476852, lng:-0.000500}
    }
    //New map
    var map = new google.maps.Map(document.getElementById('map'),  options);

    //Listen for click on map
    google.maps.event.addListener(map, 'click',
    function(event){
        //Add marker
        addMarker({coords:event.latLng});
    });

    // Array of markers
    var markers = [
        {
        coords:{lat:51.476852,lng:-0.000500},
        iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        content:'<h1>Greenwich</h1>'
        },
        // {
        // coords:{lat:49.6116,lng:6.1319},
        // iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        // content:'<h1>Luxembourg</h1>'
        // },
        {
        coords:{lat:40.7128,lng:-74.0060},
        iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        content:'<h1>New York</h1>'
        },
        {
        coords:{lat:35.6804,lng:139.7690},
        iconImage:'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
        content:'<h1>Tokyo</h1>'
        }

    ];
    //Loop through markers
    for(var i = 0; i < markers.length; i++){
        //Add marker
        addMarker(markers[i]);
    }

   // Add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map
    });
    
    // Check for customicon
    if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
    }

    //Check content
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
         content:props.content
     });

     marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}
}
}
        var iana_timezone_offsets = {"Africa\/Abidjan":0,"Africa\/Accra":0,"Africa\/Addis_Ababa":10800,"Africa\/Algiers":3600,"Africa\/Asmara":10800,"Africa\/Bamako":0,"Africa\/Bangui":3600,"Africa\/Banjul":0,"Africa\/Bissau":0,"Africa\/Blantyre":7200,"Africa\/Brazzaville":3600,"Africa\/Bujumbura":7200,"Africa\/Cairo":7200,"Africa\/Casablanca":3600,"Africa\/Ceuta":3600,"Africa\/Conakry":0,"Africa\/Dakar":0,"Africa\/Dar_es_Salaam":10800,"Africa\/Djibouti":10800,"Africa\/Douala":3600,"Africa\/El_Aaiun":3600,"Africa\/Freetown":0,"Africa\/Gaborone":7200,"Africa\/Harare":7200,"Africa\/Johannesburg":7200,"Africa\/Juba":10800,"Africa\/Kampala":10800,"Africa\/Khartoum":7200,"Africa\/Kigali":7200,"Africa\/Kinshasa":3600,"Africa\/Lagos":3600,"Africa\/Libreville":3600,"Africa\/Lome":0,"Africa\/Luanda":3600,"Africa\/Lubumbashi":7200,"Africa\/Lusaka":7200,"Africa\/Malabo":3600,"Africa\/Maputo":7200,"Africa\/Maseru":7200,"Africa\/Mbabane":7200,"Africa\/Mogadishu":10800,"Africa\/Monrovia":0,"Africa\/Nairobi":10800,"Africa\/Ndjamena":3600,"Africa\/Niamey":3600,"Africa\/Nouakchott":0,"Africa\/Ouagadougou":0,"Africa\/Porto-Novo":3600,"Africa\/Sao_Tome":0,"Africa\/Tripoli":7200,"Africa\/Tunis":3600,"Africa\/Windhoek":7200,"America\/Adak":-36000,"America\/Anchorage":-32400,"America\/Anguilla":-14400,"America\/Antigua":-14400,"America\/Araguaina":-10800,"America\/Argentina\/Buenos_Aires":-10800,"America\/Argentina\/Catamarca":-10800,"America\/Argentina\/Cordoba":-10800,"America\/Argentina\/Jujuy":-10800,"America\/Argentina\/La_Rioja":-10800,"America\/Argentina\/Mendoza":-10800,"America\/Argentina\/Rio_Gallegos":-10800,"America\/Argentina\/Salta":-10800,"America\/Argentina\/San_Juan":-10800,"America\/Argentina\/San_Luis":-10800,"America\/Argentina\/Tucuman":-10800,"America\/Argentina\/Ushuaia":-10800,"America\/Aruba":-14400,"America\/Asuncion":-10800,"America\/Atikokan":-18000,"America\/Bahia":-10800,"America\/Bahia_Banderas":-21600,"America\/Barbados":-14400,"America\/Belem":-10800,"America\/Belize":-21600,"America\/Blanc-Sablon":-14400,"America\/Boa_Vista":-14400,"America\/Bogota":-18000,"America\/Boise":-25200,"America\/Cambridge_Bay":-25200,"America\/Campo_Grande":-14400,"America\/Cancun":-18000,"America\/Caracas":-14400,"America\/Cayenne":-10800,"America\/Cayman":-18000,"America\/Chicago":-21600,"America\/Chihuahua":-25200,"America\/Costa_Rica":-21600,"America\/Creston":-25200,"America\/Cuiaba":-14400,"America\/Curacao":-14400,"America\/Danmarkshavn":0,"America\/Dawson":-28800,"America\/Dawson_Creek":-25200,"America\/Denver":-25200,"America\/Detroit":-18000,"America\/Dominica":-14400,"America\/Edmonton":-25200,"America\/Eirunepe":-18000,"America\/El_Salvador":-21600,"America\/Fort_Nelson":-25200,"America\/Fortaleza":-10800,"America\/Glace_Bay":-14400,"America\/Godthab":-10800,"America\/Goose_Bay":-14400,"America\/Grand_Turk":-18000,"America\/Grenada":-14400,"America\/Guadeloupe":-14400,"America\/Guatemala":-21600,"America\/Guayaquil":-18000,"America\/Guyana":-14400,"America\/Halifax":-14400,"America\/Havana":-18000,"America\/Hermosillo":-25200,"America\/Indiana\/Indianapolis":-18000,"America\/Indiana\/Knox":-21600,"America\/Indiana\/Marengo":-18000,"America\/Indiana\/Petersburg":-18000,"America\/Indiana\/Tell_City":-21600,"America\/Indiana\/Vevay":-18000,"America\/Indiana\/Vincennes":-18000,"America\/Indiana\/Winamac":-18000,"America\/Inuvik":-25200,"America\/Iqaluit":-18000,"America\/Jamaica":-18000,"America\/Juneau":-32400,"America\/Kentucky\/Louisville":-18000,"America\/Kentucky\/Monticello":-18000,"America\/Kralendijk":-14400,"America\/La_Paz":-14400,"America\/Lima":-18000,"America\/Los_Angeles":-28800,"America\/Lower_Princes":-14400,"America\/Maceio":-10800,"America\/Managua":-21600,"America\/Manaus":-14400,"America\/Marigot":-14400,"America\/Martinique":-14400,"America\/Matamoros":-21600,"America\/Mazatlan":-25200,"America\/Menominee":-21600,"America\/Merida":-21600,"America\/Metlakatla":-32400,"America\/Mexico_City":-21600,"America\/Miquelon":-10800,"America\/Moncton":-14400,"America\/Monterrey":-21600,"America\/Montevideo":-10800,"America\/Montserrat":-14400,"America\/Nassau":-18000,"America\/New_York":-18000,"America\/Nipigon":-18000,"America\/Nome":-32400,"America\/Noronha":-7200,"America\/North_Dakota\/Beulah":-21600,"America\/North_Dakota\/Center":-21600,"America\/North_Dakota\/New_Salem":-21600,"America\/Ojinaga":-25200,"America\/Panama":-18000,"America\/Pangnirtung":-18000,"America\/Paramaribo":-10800,"America\/Phoenix":-25200,"America\/Port-au-Prince":-18000,"America\/Port_of_Spain":-14400,"America\/Porto_Velho":-14400,"America\/Puerto_Rico":-14400,"America\/Punta_Arenas":-10800,"America\/Rainy_River":-21600,"America\/Rankin_Inlet":-21600,"America\/Recife":-10800,"America\/Regina":-21600,"America\/Resolute":-21600,"America\/Rio_Branco":-18000,"America\/Santarem":-10800,"America\/Santiago":-10800,"America\/Santo_Domingo":-14400,"America\/Sao_Paulo":-10800,"America\/Scoresbysund":-3600,"America\/Sitka":-32400,"America\/St_Barthelemy":-14400,"America\/St_Johns":-12600,"America\/St_Kitts":-14400,"America\/St_Lucia":-14400,"America\/St_Thomas":-14400,"America\/St_Vincent":-14400,"America\/Swift_Current":-21600,"America\/Tegucigalpa":-21600,"America\/Thule":-14400,"America\/Thunder_Bay":-18000,"America\/Tijuana":-28800,"America\/Toronto":-18000,"America\/Tortola":-14400,"America\/Vancouver":-28800,"America\/Whitehorse":-28800,"America\/Winnipeg":-21600,"America\/Yakutat":-32400,"America\/Yellowknife":-25200,"Antarctica\/Casey":28800,"Antarctica\/Davis":25200,"Antarctica\/DumontDUrville":36000,"Antarctica\/Macquarie":39600,"Antarctica\/Mawson":18000,"Antarctica\/McMurdo":46800,"Antarctica\/Palmer":-10800,"Antarctica\/Rothera":-10800,"Antarctica\/Syowa":10800,"Antarctica\/Troll":0,"Antarctica\/Vostok":21600,"Arctic\/Longyearbyen":3600,"Asia\/Aden":10800,"Asia\/Almaty":21600,"Asia\/Amman":7200,"Asia\/Anadyr":43200,"Asia\/Aqtau":18000,"Asia\/Aqtobe":18000,"Asia\/Ashgabat":18000,"Asia\/Atyrau":18000,"Asia\/Baghdad":10800,"Asia\/Bahrain":10800,"Asia\/Baku":14400,"Asia\/Bangkok":25200,"Asia\/Barnaul":25200,"Asia\/Beirut":7200,"Asia\/Bishkek":21600,"Asia\/Brunei":28800,"Asia\/Chita":32400,"Asia\/Choibalsan":28800,"Asia\/Colombo":19800,"Asia\/Damascus":7200,"Asia\/Dhaka":21600,"Asia\/Dili":32400,"Asia\/Dubai":14400,"Asia\/Dushanbe":18000,"Asia\/Famagusta":7200,"Asia\/Gaza":7200,"Asia\/Hebron":7200,"Asia\/Ho_Chi_Minh":25200,"Asia\/Hong_Kong":28800,"Asia\/Hovd":25200,"Asia\/Irkutsk":28800,"Asia\/Jakarta":25200,"Asia\/Jayapura":32400,"Asia\/Jerusalem":7200,"Asia\/Kabul":16200,"Asia\/Kamchatka":43200,"Asia\/Karachi":18000,"Asia\/Kathmandu":20700,"Asia\/Khandyga":32400,"Asia\/Kolkata":19800,"Asia\/Krasnoyarsk":25200,"Asia\/Kuala_Lumpur":28800,"Asia\/Kuching":28800,"Asia\/Kuwait":10800,"Asia\/Macau":28800,"Asia\/Magadan":39600,"Asia\/Makassar":28800,"Asia\/Manila":28800,"Asia\/Muscat":14400,"Asia\/Nicosia":7200,"Asia\/Novokuznetsk":25200,"Asia\/Novosibirsk":25200,"Asia\/Omsk":21600,"Asia\/Oral":18000,"Asia\/Phnom_Penh":25200,"Asia\/Pontianak":25200,"Asia\/Pyongyang":32400,"Asia\/Qatar":10800,"Asia\/Qostanay":21600,"Asia\/Qyzylorda":18000,"Asia\/Riyadh":10800,"Asia\/Sakhalin":39600,"Asia\/Samarkand":18000,"Asia\/Seoul":32400,"Asia\/Shanghai":28800,"Asia\/Singapore":28800,"Asia\/Srednekolymsk":39600,"Asia\/Taipei":28800,"Asia\/Tashkent":18000,"Asia\/Tbilisi":14400,"Asia\/Tehran":12600,"Asia\/Thimphu":21600,"Asia\/Tokyo":32400,"Asia\/Tomsk":25200,"Asia\/Ulaanbaatar":28800,"Asia\/Urumqi":28800,"Asia\/Ust-Nera":36000,"Asia\/Vientiane":25200,"Asia\/Vladivostok":36000,"Asia\/Yakutsk":32400,"Asia\/Yangon":23400,"Asia\/Yekaterinburg":18000,"Asia\/Yerevan":14400,"Atlantic\/Azores":-3600,"Atlantic\/Bermuda":-14400,"Atlantic\/Canary":0,"Atlantic\/Cape_Verde":-3600,"Atlantic\/Faroe":0,"Atlantic\/Madeira":0,"Atlantic\/Reykjavik":0,"Atlantic\/South_Georgia":-7200,"Atlantic\/St_Helena":0,"Atlantic\/Stanley":-10800,"Australia\/Adelaide":37800,"Australia\/Brisbane":36000,"Australia\/Broken_Hill":37800,"Australia\/Currie":39600,"Australia\/Darwin":34200,"Australia\/Eucla":31500,"Australia\/Hobart":39600,"Australia\/Lindeman":36000,"Australia\/Lord_Howe":39600,"Australia\/Melbourne":39600,"Australia\/Perth":28800,"Australia\/Sydney":39600,"Europe\/Amsterdam":3600,"Europe\/Andorra":3600,"Europe\/Astrakhan":14400,"Europe\/Athens":7200,"Europe\/Belgrade":3600,"Europe\/Berlin":3600,"Europe\/Bratislava":3600,"Europe\/Brussels":3600,"Europe\/Bucharest":7200,"Europe\/Budapest":3600,"Europe\/Busingen":3600,"Europe\/Chisinau":7200,"Europe\/Copenhagen":3600,"Europe\/Dublin":0,"Europe\/Gibraltar":3600,"Europe\/Guernsey":0,"Europe\/Helsinki":7200,"Europe\/Isle_of_Man":0,"Europe\/Istanbul":10800,"Europe\/Jersey":0,"Europe\/Kaliningrad":7200,"Europe\/Kiev":7200,"Europe\/Kirov":10800,"Europe\/Lisbon":0,"Europe\/Ljubljana":3600,"Europe\/London":0,"Europe\/Luxembourg":3600,"Europe\/Madrid":3600,"Europe\/Malta":3600,"Europe\/Mariehamn":7200,"Europe\/Minsk":10800,"Europe\/Monaco":3600,"Europe\/Moscow":10800,"Europe\/Oslo":3600,"Europe\/Paris":3600,"Europe\/Podgorica":3600,"Europe\/Prague":3600,"Europe\/Riga":7200,"Europe\/Rome":3600,"Europe\/Samara":14400,"Europe\/San_Marino":3600,"Europe\/Sarajevo":3600,"Europe\/Saratov":14400,"Europe\/Simferopol":10800,"Europe\/Skopje":3600,"Europe\/Sofia":7200,"Europe\/Stockholm":3600,"Europe\/Tallinn":7200,"Europe\/Tirane":3600,"Europe\/Ulyanovsk":14400,"Europe\/Uzhgorod":7200,"Europe\/Vaduz":3600,"Europe\/Vatican":3600,"Europe\/Vienna":3600,"Europe\/Vilnius":7200,"Europe\/Volgograd":14400,"Europe\/Warsaw":3600,"Europe\/Zagreb":3600,"Europe\/Zaporozhye":7200,"Europe\/Zurich":3600,"Indian\/Antananarivo":10800,"Indian\/Chagos":21600,"Indian\/Christmas":25200,"Indian\/Cocos":23400,"Indian\/Comoro":10800,"Indian\/Kerguelen":18000,"Indian\/Mahe":14400,"Indian\/Maldives":18000,"Indian\/Mauritius":14400,"Indian\/Mayotte":10800,"Indian\/Reunion":14400,"Pacific\/Apia":50400,"Pacific\/Auckland":46800,"Pacific\/Bougainville":39600,"Pacific\/Chatham":49500,"Pacific\/Chuuk":36000,"Pacific\/Easter":-18000,"Pacific\/Efate":39600,"Pacific\/Enderbury":46800,"Pacific\/Fakaofo":46800,"Pacific\/Fiji":46800,"Pacific\/Funafuti":43200,"Pacific\/Galapagos":-21600,"Pacific\/Gambier":-32400,"Pacific\/Guadalcanal":39600,"Pacific\/Guam":36000,"Pacific\/Honolulu":-36000,"Pacific\/Kiritimati":50400,"Pacific\/Kosrae":39600,"Pacific\/Kwajalein":43200,"Pacific\/Majuro":43200,"Pacific\/Marquesas":-34200,"Pacific\/Midway":-39600,"Pacific\/Nauru":43200,"Pacific\/Niue":-39600,"Pacific\/Norfolk":39600,"Pacific\/Noumea":39600,"Pacific\/Pago_Pago":-39600,"Pacific\/Palau":32400,"Pacific\/Pitcairn":-28800,"Pacific\/Pohnpei":39600,"Pacific\/Port_Moresby":36000,"Pacific\/Rarotonga":-36000,"Pacific\/Saipan":36000,"Pacific\/Tahiti":-36000,"Pacific\/Tarawa":43200,"Pacific\/Tongatapu":46800,"Pacific\/Wake":43200,"Pacific\/Wallis":43200,"UTC":0,"Etc\/GMT":0,"Etc\/GMT+1":-3600,"Etc\/GMT+10":-36000,"Etc\/GMT+11":-39600,"Etc\/GMT+12":-43200,"Etc\/GMT+2":-7200,"Etc\/GMT+3":-10800,"Etc\/GMT+4":-14400,"Etc\/GMT+5":-18000,"Etc\/GMT+6":-21600,"Etc\/GMT+7":-25200,"Etc\/GMT+8":-28800,"Etc\/GMT+9":-32400,"Etc\/GMT-1":3600,"Etc\/GMT-10":36000,"Etc\/GMT-11":39600,"Etc\/GMT-12":43200,"Etc\/GMT-13":46800,"Etc\/GMT-14":50400,"Etc\/GMT-2":7200,"Etc\/GMT-3":10800,"Etc\/GMT-4":14400,"Etc\/GMT-5":18000,"Etc\/GMT-6":21600,"Etc\/GMT-7":25200,"Etc\/GMT-8":28800,"Etc\/GMT-9":32400};
        var iana_timezone_colors = {"Africa\/Abidjan":"red","Africa\/Accra":"red","Africa\/Addis_Ababa":"green","Africa\/Algiers":"orange","Africa\/Asmara":"green","Africa\/Bamako":"red","Africa\/Bangui":"orange","Africa\/Banjul":"red","Africa\/Bissau":"red","Africa\/Blantyre":"yellow","Africa\/Brazzaville":"orange","Africa\/Bujumbura":"yellow","Africa\/Cairo":"yellow","Africa\/Casablanca":"orange","Africa\/Ceuta":"orange","Africa\/Conakry":"red","Africa\/Dakar":"red","Africa\/Dar_es_Salaam":"green","Africa\/Djibouti":"green","Africa\/Douala":"orange","Africa\/El_Aaiun":"orange","Africa\/Freetown":"red","Africa\/Gaborone":"yellow","Africa\/Harare":"yellow","Africa\/Johannesburg":"yellow","Africa\/Juba":"green","Africa\/Kampala":"green","Africa\/Khartoum":"yellow","Africa\/Kigali":"yellow","Africa\/Kinshasa":"orange","Africa\/Lagos":"orange","Africa\/Libreville":"orange","Africa\/Lome":"red","Africa\/Luanda":"orange","Africa\/Lubumbashi":"yellow","Africa\/Lusaka":"yellow","Africa\/Malabo":"orange","Africa\/Maputo":"yellow","Africa\/Maseru":"yellow","Africa\/Mbabane":"yellow","Africa\/Mogadishu":"green","Africa\/Monrovia":"red","Africa\/Nairobi":"green","Africa\/Ndjamena":"orange","Africa\/Niamey":"orange","Africa\/Nouakchott":"red","Africa\/Ouagadougou":"red","Africa\/Porto-Novo":"orange","Africa\/Sao_Tome":"red","Africa\/Tripoli":"yellow","Africa\/Tunis":"orange","Africa\/Windhoek":"yellow","America\/Adak":"green","America\/Anchorage":"yellow","America\/Anguilla":"cyan","America\/Antigua":"cyan","America\/Araguaina":"green","America\/Argentina\/Buenos_Aires":"green","America\/Argentina\/Catamarca":"green","America\/Argentina\/Cordoba":"green","America\/Argentina\/Jujuy":"green","America\/Argentina\/La_Rioja":"green","America\/Argentina\/Mendoza":"green","America\/Argentina\/Rio_Gallegos":"green","America\/Argentina\/Salta":"green","America\/Argentina\/San_Juan":"green","America\/Argentina\/San_Luis":"green","America\/Argentina\/Tucuman":"green","America\/Argentina\/Ushuaia":"green","America\/Aruba":"cyan","America\/Asuncion":"green","America\/Atikokan":"blue","America\/Bahia":"green","America\/Bahia_Banderas":"violet","America\/Barbados":"cyan","America\/Belem":"green","America\/Belize":"violet","America\/Blanc-Sablon":"cyan","America\/Boa_Vista":"cyan","America\/Bogota":"blue","America\/Boise":"red","America\/Cambridge_Bay":"red","America\/Campo_Grande":"cyan","America\/Cancun":"blue","America\/Caracas":"cyan","America\/Cayenne":"green","America\/Cayman":"blue","America\/Chicago":"violet","America\/Chihuahua":"red","America\/Costa_Rica":"violet","America\/Creston":"red","America\/Cuiaba":"cyan","America\/Curacao":"cyan","America\/Danmarkshavn":"red","America\/Dawson":"orange","America\/Dawson_Creek":"red","America\/Denver":"red","America\/Detroit":"blue","America\/Dominica":"cyan","America\/Edmonton":"red","America\/Eirunepe":"blue","America\/El_Salvador":"violet","America\/Fort_Nelson":"red","America\/Fortaleza":"green","America\/Glace_Bay":"cyan","America\/Godthab":"green","America\/Goose_Bay":"cyan","America\/Grand_Turk":"blue","America\/Grenada":"cyan","America\/Guadeloupe":"cyan","America\/Guatemala":"violet","America\/Guayaquil":"blue","America\/Guyana":"cyan","America\/Halifax":"cyan","America\/Havana":"blue","America\/Hermosillo":"red","America\/Indiana\/Indianapolis":"blue","America\/Indiana\/Knox":"violet","America\/Indiana\/Marengo":"blue","America\/Indiana\/Petersburg":"blue","America\/Indiana\/Tell_City":"violet","America\/Indiana\/Vevay":"blue","America\/Indiana\/Vincennes":"blue","America\/Indiana\/Winamac":"blue","America\/Inuvik":"red","America\/Iqaluit":"blue","America\/Jamaica":"blue","America\/Juneau":"yellow","America\/Kentucky\/Louisville":"blue","America\/Kentucky\/Monticello":"blue","America\/Kralendijk":"cyan","America\/La_Paz":"cyan","America\/Lima":"blue","America\/Los_Angeles":"orange","America\/Lower_Princes":"cyan","America\/Maceio":"green","America\/Managua":"violet","America\/Manaus":"cyan","America\/Marigot":"cyan","America\/Martinique":"cyan","America\/Matamoros":"violet","America\/Mazatlan":"red","America\/Menominee":"violet","America\/Merida":"violet","America\/Metlakatla":"yellow","America\/Mexico_City":"violet","America\/Miquelon":"green","America\/Moncton":"cyan","America\/Monterrey":"violet","America\/Montevideo":"green","America\/Montserrat":"cyan","America\/Nassau":"blue","America\/New_York":"blue","America\/Nipigon":"blue","America\/Nome":"yellow","America\/Noronha":"yellow","America\/North_Dakota\/Beulah":"violet","America\/North_Dakota\/Center":"violet","America\/North_Dakota\/New_Salem":"violet","America\/Ojinaga":"red","America\/Panama":"blue","America\/Pangnirtung":"blue","America\/Paramaribo":"green","America\/Phoenix":"red","America\/Port-au-Prince":"blue","America\/Port_of_Spain":"cyan","America\/Porto_Velho":"cyan","America\/Puerto_Rico":"cyan","America\/Punta_Arenas":"green","America\/Rainy_River":"violet","America\/Rankin_Inlet":"violet","America\/Recife":"green","America\/Regina":"violet","America\/Resolute":"violet","America\/Rio_Branco":"blue","America\/Santarem":"green","America\/Santiago":"green","America\/Santo_Domingo":"cyan","America\/Sao_Paulo":"green","America\/Scoresbysund":"orange","America\/Sitka":"yellow","America\/St_Barthelemy":"cyan","America\/St_Johns":"wheat","America\/St_Kitts":"cyan","America\/St_Lucia":"cyan","America\/St_Thomas":"cyan","America\/St_Vincent":"cyan","America\/Swift_Current":"violet","America\/Tegucigalpa":"violet","America\/Thule":"cyan","America\/Thunder_Bay":"blue","America\/Tijuana":"orange","America\/Toronto":"blue","America\/Tortola":"cyan","America\/Vancouver":"orange","America\/Whitehorse":"orange","America\/Winnipeg":"violet","America\/Yakutat":"yellow","America\/Yellowknife":"red","Antarctica\/Casey":"orange","Antarctica\/Davis":"red","Antarctica\/DumontDUrville":"green","Antarctica\/Macquarie":"cyan","Antarctica\/Mawson":"blue","Antarctica\/McMurdo":"violet","Antarctica\/Palmer":"green","Antarctica\/Rothera":"green","Antarctica\/Syowa":"green","Antarctica\/Troll":"red","Antarctica\/Vostok":"violet","Arctic\/Longyearbyen":"orange","Asia\/Aden":"green","Asia\/Almaty":"violet","Asia\/Amman":"yellow","Asia\/Anadyr":"blue","Asia\/Aqtau":"blue","Asia\/Aqtobe":"blue","Asia\/Ashgabat":"blue","Asia\/Atyrau":"blue","Asia\/Baghdad":"green","Asia\/Bahrain":"green","Asia\/Baku":"cyan","Asia\/Bangkok":"red","Asia\/Barnaul":"red","Asia\/Beirut":"yellow","Asia\/Bishkek":"violet","Asia\/Brunei":"orange","Asia\/Chita":"yellow","Asia\/Choibalsan":"orange","Asia\/Colombo":"wheat","Asia\/Damascus":"yellow","Asia\/Dhaka":"violet","Asia\/Dili":"yellow","Asia\/Dubai":"cyan","Asia\/Dushanbe":"blue","Asia\/Famagusta":"yellow","Asia\/Gaza":"yellow","Asia\/Hebron":"yellow","Asia\/Ho_Chi_Minh":"red","Asia\/Hong_Kong":"orange","Asia\/Hovd":"red","Asia\/Irkutsk":"orange","Asia\/Jakarta":"red","Asia\/Jayapura":"yellow","Asia\/Jerusalem":"yellow","Asia\/Kabul":"wheat","Asia\/Kamchatka":"blue","Asia\/Karachi":"blue","Asia\/Kathmandu":"wheat","Asia\/Khandyga":"yellow","Asia\/Kolkata":"wheat","Asia\/Krasnoyarsk":"red","Asia\/Kuala_Lumpur":"orange","Asia\/Kuching":"orange","Asia\/Kuwait":"green","Asia\/Macau":"orange","Asia\/Magadan":"cyan","Asia\/Makassar":"orange","Asia\/Manila":"orange","Asia\/Muscat":"cyan","Asia\/Nicosia":"yellow","Asia\/Novokuznetsk":"red","Asia\/Novosibirsk":"red","Asia\/Omsk":"violet","Asia\/Oral":"blue","Asia\/Phnom_Penh":"red","Asia\/Pontianak":"red","Asia\/Pyongyang":"yellow","Asia\/Qatar":"green","Asia\/Qostanay":"violet","Asia\/Qyzylorda":"blue","Asia\/Riyadh":"green","Asia\/Sakhalin":"cyan","Asia\/Samarkand":"blue","Asia\/Seoul":"yellow","Asia\/Shanghai":"orange","Asia\/Singapore":"orange","Asia\/Srednekolymsk":"cyan","Asia\/Taipei":"orange","Asia\/Tashkent":"blue","Asia\/Tbilisi":"cyan","Asia\/Tehran":"wheat","Asia\/Thimphu":"violet","Asia\/Tokyo":"yellow","Asia\/Tomsk":"red","Asia\/Ulaanbaatar":"orange","Asia\/Urumqi":"orange","Asia\/Ust-Nera":"green","Asia\/Vientiane":"red","Asia\/Vladivostok":"green","Asia\/Yakutsk":"yellow","Asia\/Yangon":"wheat","Asia\/Yekaterinburg":"blue","Asia\/Yerevan":"cyan","Atlantic\/Azores":"orange","Atlantic\/Bermuda":"cyan","Atlantic\/Canary":"red","Atlantic\/Cape_Verde":"orange","Atlantic\/Faroe":"red","Atlantic\/Madeira":"red","Atlantic\/Reykjavik":"red","Atlantic\/South_Georgia":"yellow","Atlantic\/St_Helena":"red","Atlantic\/Stanley":"green","Australia\/Adelaide":"wheat","Australia\/Brisbane":"green","Australia\/Broken_Hill":"wheat","Australia\/Currie":"cyan","Australia\/Darwin":"wheat","Australia\/Eucla":"wheat","Australia\/Hobart":"cyan","Australia\/Lindeman":"green","Australia\/Lord_Howe":"cyan","Australia\/Melbourne":"cyan","Australia\/Perth":"orange","Australia\/Sydney":"cyan","Europe\/Amsterdam":"orange","Europe\/Andorra":"orange","Europe\/Astrakhan":"cyan","Europe\/Athens":"yellow","Europe\/Belgrade":"orange","Europe\/Berlin":"orange","Europe\/Bratislava":"orange","Europe\/Brussels":"orange","Europe\/Bucharest":"yellow","Europe\/Budapest":"orange","Europe\/Busingen":"orange","Europe\/Chisinau":"yellow","Europe\/Copenhagen":"orange","Europe\/Dublin":"red","Europe\/Gibraltar":"orange","Europe\/Guernsey":"red","Europe\/Helsinki":"yellow","Europe\/Isle_of_Man":"red","Europe\/Istanbul":"green","Europe\/Jersey":"red","Europe\/Kaliningrad":"yellow","Europe\/Kiev":"yellow","Europe\/Kirov":"green","Europe\/Lisbon":"red","Europe\/Ljubljana":"orange","Europe\/London":"red","Europe\/Luxembourg":"orange","Europe\/Madrid":"orange","Europe\/Malta":"orange","Europe\/Mariehamn":"yellow","Europe\/Minsk":"green","Europe\/Monaco":"orange","Europe\/Moscow":"green","Europe\/Oslo":"orange","Europe\/Paris":"orange","Europe\/Podgorica":"orange","Europe\/Prague":"orange","Europe\/Riga":"yellow","Europe\/Rome":"orange","Europe\/Samara":"cyan","Europe\/San_Marino":"orange","Europe\/Sarajevo":"orange","Europe\/Saratov":"cyan","Europe\/Simferopol":"green","Europe\/Skopje":"orange","Europe\/Sofia":"yellow","Europe\/Stockholm":"orange","Europe\/Tallinn":"yellow","Europe\/Tirane":"orange","Europe\/Ulyanovsk":"cyan","Europe\/Uzhgorod":"yellow","Europe\/Vaduz":"orange","Europe\/Vatican":"orange","Europe\/Vienna":"orange","Europe\/Vilnius":"yellow","Europe\/Volgograd":"cyan","Europe\/Warsaw":"orange","Europe\/Zagreb":"orange","Europe\/Zaporozhye":"yellow","Europe\/Zurich":"orange","Indian\/Antananarivo":"green","Indian\/Chagos":"violet","Indian\/Christmas":"red","Indian\/Cocos":"wheat","Indian\/Comoro":"green","Indian\/Kerguelen":"blue","Indian\/Mahe":"cyan","Indian\/Maldives":"blue","Indian\/Mauritius":"cyan","Indian\/Mayotte":"green","Indian\/Reunion":"cyan","Pacific\/Apia":"red","Pacific\/Auckland":"violet","Pacific\/Bougainville":"cyan","Pacific\/Chatham":"wheat","Pacific\/Chuuk":"green","Pacific\/Easter":"blue","Pacific\/Efate":"cyan","Pacific\/Enderbury":"violet","Pacific\/Fakaofo":"violet","Pacific\/Fiji":"violet","Pacific\/Funafuti":"blue","Pacific\/Galapagos":"violet","Pacific\/Gambier":"yellow","Pacific\/Guadalcanal":"cyan","Pacific\/Guam":"green","Pacific\/Honolulu":"green","Pacific\/Kiritimati":"red","Pacific\/Kosrae":"cyan","Pacific\/Kwajalein":"blue","Pacific\/Majuro":"blue","Pacific\/Marquesas":"wheat","Pacific\/Midway":"cyan","Pacific\/Nauru":"blue","Pacific\/Niue":"cyan","Pacific\/Norfolk":"cyan","Pacific\/Noumea":"cyan","Pacific\/Pago_Pago":"cyan","Pacific\/Palau":"yellow","Pacific\/Pitcairn":"orange","Pacific\/Pohnpei":"cyan","Pacific\/Port_Moresby":"green","Pacific\/Rarotonga":"green","Pacific\/Saipan":"green","Pacific\/Tahiti":"green","Pacific\/Tarawa":"blue","Pacific\/Tongatapu":"violet","Pacific\/Wake":"blue","Pacific\/Wallis":"blue","UTC":"red","Etc\/GMT":"#f8f8f8","Etc\/GMT+1":"#f8f8f8","Etc\/GMT+10":"#f8f8f8","Etc\/GMT+11":"#f8f8f8","Etc\/GMT+12":"#f8f8f8","Etc\/GMT+2":"#f8f8f8","Etc\/GMT+3":"#f8f8f8","Etc\/GMT+4":"#f8f8f8","Etc\/GMT+5":"#f8f8f8","Etc\/GMT+6":"#f8f8f8","Etc\/GMT+7":"#f8f8f8","Etc\/GMT+8":"#f8f8f8","Etc\/GMT+9":"#f8f8f8","Etc\/GMT-1":"#f8f8f8","Etc\/GMT-10":"#f8f8f8","Etc\/GMT-11":"#f8f8f8","Etc\/GMT-12":"#f8f8f8","Etc\/GMT-13":"#f8f8f8","Etc\/GMT-14":"#f8f8f8","Etc\/GMT-2":"#f8f8f8","Etc\/GMT-3":"#f8f8f8","Etc\/GMT-4":"#f8f8f8","Etc\/GMT-5":"#f8f8f8","Etc\/GMT-6":"#f8f8f8","Etc\/GMT-7":"#f8f8f8","Etc\/GMT-8":"#f8f8f8","Etc\/GMT-9":"#f8f8f8"};
        var utc_offset_colors  = {"-11":"cyan","-10":"green","-9":"yellow","-8":"orange","-7":"red","-6":"violet","-5":"blue","-4":"cyan","-3":"green","-2":"yellow","-1":"orange","UTC":"red","+1":"orange","+2":"yellow","+3":"green","+4":"cyan","+5":"blue","+6":"violet","+7":"red","+8":"orange","+9":"yellow","+10":"green","+11":"cyan","+12":"blue"};
        var timer_interval = null;

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        }

        function extend(a, b) {
            for (var i in b) {
                if (hasOwnProp(b, i)) {
                    a[i] = b[i];
                }
            }

            if (hasOwnProp(b, 'toString')) {
                a.toString = b.toString;
            }

            if (hasOwnProp(b, 'valueOf')) {
                a.valueOf = b.valueOf;
            }
            return a;
        }

        function SearchCityPlugin(options) {
            if(typeof options !== "undefined") {
                this.options = extend(this.options, options);
            }
        }

        SearchCityPlugin.prototype = {
            options: {
                placeholder: 'Search',
                minLength: 2,
                limit: 5,
            },
            onAdd: function(map) {
                this._map = map;

                this._onChange = this._onChange.bind(this);
                this._onKeyDown = this._onKeyDown.bind(this);
                this._clear = this._clear.bind(this);

                var el = this.container = document.createElement('div');
                el.className = 'mapboxgl-ctrl-geocoder mapboxgl-ctrl';

                var icon = document.createElement('span');
                icon.className = 'geocoder-icon geocoder-icon-search';

                this._inputEl = document.createElement('input');
                this._inputEl.type = 'text';
                this._inputEl.placeholder = this.options.placeholder;

                this._inputEl.addEventListener('keydown', this._onKeyDown);
                this._inputEl.addEventListener('change', this._onChange);

                var actions = document.createElement('div');
                actions.classList.add('geocoder-pin-right');

                this._clearEl = document.createElement('button');
                this._clearEl.className = 'geocoder-icon geocoder-icon-close';
                this._clearEl.setAttribute('aria-label', 'Clear');
                this._clearEl.addEventListener('click', this._clear);

                this._loadingEl = document.createElement('span');
                this._loadingEl.className = 'geocoder-icon geocoder-icon-loading';

                actions.appendChild(this._clearEl);
                actions.appendChild(this._loadingEl);

                el.appendChild(icon);
                el.appendChild(this._inputEl);
                el.appendChild(actions);

                this._typeahead = new Suggestions(this._inputEl, [], {
                    filter: false,
                    minLength: this.options.minLength,
                    limit: this.options.limit
                });
                this._typeahead.getItemValue = function(item) { return item.display_name; };
                return el;
            },
            onRemove: function () {
                this.container.parentNode.removeChild(this.container);
                this._map = null;

                return this;
            },
            _onKeyDown: debounce(function(e) {
                // if target has shadowRoot, then get the actual active element inside the shadowRoot
                var target = e.target.shadowRoot ? e.target.shadowRoot.activeElement : e.target;
                if (!target.value) {
                    return this._clearEl.style.display = 'none';
                }

                // TAB, ESC, LEFT, RIGHT, ENTER, UP, DOWN
                if (e.metaKey || [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) return;

                if (target.value.length >= this.options.minLength) {
                    this._geocode(target.value);
                }
            }, 200),

            _onChange: function() {
                if (this._inputEl.value) this._clearEl.style.display = 'block';
                var selected = this._typeahead.selected;
                if (selected && this.options['marker']) {
                    this.options.marker.setLngLat([selected.lng, selected.lat])
                        .addTo(this._map);
                }
            },
            _geocode: function(searchInput) {
                var self = this;
                this._loadingEl.style.display = 'block';
                $.ajax({
                    url: "/timezone-map/suggest",
                    method: "GET",
                    data: {
                        term: searchInput,
                        limit: self.options.limit
                    },
                    success:function (data) {
                        self._loadingEl.style.display = 'none';
                        self._typeahead.update(data.items);
                    },
                    error: function () {
                        self._loadingEl.style.display = 'none';

                    }
                });

            },
            _clear: function(ev) {
                if (ev) ev.preventDefault();
                this._inputEl.value = '';
                this._typeahead.selected = null;
                this._typeahead.clear();
                this._onChange();
                this._inputEl.focus();
                this.options.marker.remove();
                this._clearEl.style.display = 'none';
            }
        };

        function renderMap() {
            var map_bounds = [
                [-180.0, -65.0], // Southwest coordinates
                [180.0, 85.0]
            ];
            var map = new mapboxgl.Map({
                container: 'timezones-map',
                style: 'https://m.24timezones.com/styles/osm-bright-en/style.json',
                zoom: 0.9,
                minZoom: 0.9,
                center: [0, 30],
                attributionControl: false,
                maxBounds: map_bounds
            });
            map.scrollZoom.disable();
            map.dragRotate.disable();
            map.touchZoomRotate.disableRotation();

            var popup = new mapboxgl.Popup({
                closeButton: false
            });
            var utc_popup = new mapboxgl.Popup({
                closeButton: false
            });

            var marker = new mapboxgl.Marker({
                draggable: false
            });

            map.on('load', function() {
                var expression = ["match", ["get", "tzid"]];
                var tz_id;
                for (tz_id in iana_timezone_colors) {
                    expression.push(tz_id, iana_timezone_colors[tz_id]);
                }
                expression.push("#f8f8f8");

                map.addSource('timezones', {
                    "type": "vector",
                    "tiles": ["https://m.24timezones.com/timezone-tiles/{z}/{x}/{y}.mvt"]

                });

                map.addLayer({
                    "id": "timezones",
                    "type": "fill",
                    "source": "timezones",
                    "source-layer": "geojsonLayer",
                    "paint": {
                        "fill-color": expression,
                        "fill-opacity": 0.25
                    }
                });

                map.addLayer({
                    "id": "timezones-highlighted",
                    "type": "fill",
                    "source": "timezones",
                    "source-layer": "geojsonLayer",
                    "paint": {
                        "fill-color": expression,
                        "fill-opacity": 0.5
                    },
                    "filter": ["==", "offset", ""]
                });

                map.addControl(new SearchCityPlugin({'marker': marker}), 'top-left');
                map.addControl(new mapboxgl.NavigationControl());

                var throttle = function(func, limit) {
                    var inThrottle;
                    return function() {
                        var args = arguments;
                        var context = this;
                        if (!inThrottle) {
                            func.apply(context, args);
                            inThrottle = true;
                            setTimeout(function(){
                                inThrottle = false;
                            }, limit);
                        }
                    }
                };

                map.on('mousemove', 'timezones', throttle(function(e) {
                    // Change the cursor style as a UI indicator.
                    map.getCanvas().style.cursor = 'pointer';

                    // Single out the first found feature.
                    var feature = e.features[0];
                    var c_time = moment().utcOffset(feature.properties.offset / 60);
                    utc_popup.setHTML(c_time.format('Z'));
                    utc_popup.setLngLat(e.lngLat);
                    utc_popup.addTo(map);

                    map.setFilter('timezones-highlighted', ['==', 'offset', feature.properties.offset]);
                }, 30));

                map.on('mouseleave', 'timezones', function() {
                    map.getCanvas().style.cursor = '';
                    utc_popup.remove();
                    map.setFilter('timezones-highlighted', ['==', 'offset', '']);
                });

                map.addSource('offset_blocks', {
                    type: 'geojson',
                    data: '/js/data/timezones_map/offsets.json'
                });

                var utc_expression = ["match", ['get', 'description']];
                var utc_offset;
                for (utc_offset in utc_offset_colors) {
                    utc_expression.push(utc_offset, utc_offset_colors[utc_offset]);
                }
                utc_expression.push("#088");

                map.addLayer({
                    'id': 'offset-blocks',
                    'type': 'fill',
                    'source': 'offset_blocks',
                    'layout': {},
                    'paint': {
                        'fill-color': utc_expression,
                        'fill-opacity': 0.65
                    }
                });


                map.addLayer({
                    "id": "offset-block-labels",
                    "type": "symbol",
                    "source": "offset_blocks",
                    "layout": {
                        "text-field": ["get", "description"],
                        // "text-variable-anchor": ["top", "bottom", "left", "right"],
                        "text-justify": "center"
                    }
                });

                map.addSource('cities', {
                    type: 'geojson',
                    data: "/js/data/timezones_map/cities.json"
                });

                map.addLayer({
                    "id": "cities",
                    'type': 'circle',
                    "source": "cities",
                    'paint': {
                        // make circles larger as the user zooms from z12 to z22
                        'circle-radius': 3,
                        'circle-color': 'red'
                    }
                });


                map.on('click', function(e) {
                    var width = 10;
                    var height = 20;
                    var point = e.point;

                    var features = map.queryRenderedFeatures([
                        [point.x - width / 2, point.y - height / 2],
                        [point.x + width / 2, point.y + height / 2]
                    ], { layers: ['cities'] });

                    if (!features.length) {
                        return;
                    }

                    if(null !== timer_interval) {
                        clearInterval(timer_interval);
                        timer_interval = null;
                    }
                    utc_popup.remove();


                    // Single out the first found feature.
                    var feature = features[0];
                    var updatePopupHtml = function() {
                        var current_time = moment.utc().tz(feature.properties.tz);
                        popup.setHTML("<div><b>" + feature.properties.name + "</b></div>" +
                            "<div>" + current_time.format("MM/DD HH:mm:ss z") + "</div>" +
                            "<div>UTC offset: " + current_time.format("Z") +"</div>"
                        );
                    };
                    popup.setLngLat(e.lngLat);
                    updatePopupHtml(feature);
                    popup.addTo(map);
                    if(null == timer_interval) {
                        timer_interval = setInterval(updatePopupHtml, 1000);
                    }

                });

                var onMouseMoveCityLayer = function(e) {
                    // Change the cursor style as a UI indicator.
                    map.getCanvas().style.cursor = 'pointer';
                    if(null !== timer_interval) {
                        clearInterval(timer_interval);
                        timer_interval = null;
                    }
                    utc_popup.remove();

                    // Single out the first found feature.
                    var feature = e.features[0];

                    popup.setLngLat(e.lngLat);
                    var updatePopupHtml = function() {
                        var current_time = moment.utc().tz(feature.properties.tz);
                        popup.setHTML("<div><b>" + feature.properties.name + "</b></div>" +
                            "<div>" + current_time.format("MM/DD HH:mm:ss z") + "</div>" +
                            "<div>UTC offset: " + current_time.format("Z") +"</div>"
                        );
                    };
                    updatePopupHtml();
                    popup.addTo(map);
                    if(null == timer_interval) {
                        timer_interval = setInterval(updatePopupHtml, 1000);
                    }
                };

                var onMouseLeaveCityLayer = function(e) {
                    map.getCanvas().style.cursor = '';
                    popup.remove();
                    clearInterval(timer_interval);
                    timer_interval = null;
                };

                map.on('mousemove', 'cities', onMouseMoveCityLayer);
                map.on('mouseleave', 'cities', onMouseLeaveCityLayer);

                map.on('touchstart', 'cities', onMouseMoveCityLayer);
                map.on('touchcancel', 'cities', onMouseLeaveCityLayer);
            });
        }
        renderMap();



//   $('#map').timezonePicker({
//   quickLink: [{
//       "PST": "PST",
//       "MST": "MST",
//       "CST": "CST",
//       "EST": "EST",
//       "GMT": "GMT",
//       "INDIA": "Asia/Kolkata",
//       "IST": "IST"
//   }],
//   width: 800,
//   height: 400,
//   hoverColor: '#666666',
//   selectedColor: '#333333',
//   mapColor: '#BBB',
//   mapHover: null,
//   defaultCss: true,
//   localStore: true,
//   selectBox: true,
//   showHoverText: true,
//   hoverText: null,
//   dayLightSaving: ((typeof moment == "function") ? (true) : (false))
//  });
// });
