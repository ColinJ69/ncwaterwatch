
var isd = document.cookie
var dsd = isd.slice(-32)
function sign_up() {
   

    let sent_data = { 'register': true }
    const API_URL = "/newsletter_signup";

    const request = new Request(
        API_URL,
        { headers: { 'X-CSRFToken': dsd, 'Content-Type': 'application/json' } }
    );

    
    return fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(sent_data)
    })
        .then(window.location.reload());
}
function unsub() {
    

    let sent_data = { 'register': false }
    const API_URL = "/newsletter_signup";

    const request = new Request(
        API_URL,
        { headers: { 'X-CSRFToken': dsd, 'Content-Type': 'application/json' } }
    );

    

    return fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(sent_data)
    })
        .then(window.location.reload());
}
function cafo() {
    var public = document.querySelector('.public');
    var cafo = document.querySelector('.cafo');
    var polluter = document.querySelector('.polluters');
    var publicMap = document.querySelector('.publicMap');
    var cafoMap = document.querySelector('.cafoMap');
    var polluterMap = document.querySelector('.pollutersMap');
    public.style.display = 'none';
    polluter.style.display = 'none';
    cafo.style.display = 'block';
    publicMap.style.display = 'none';
    polluterMap.style.display = 'none';
    cafoMap.style.display = 'block';
    reload_map();
}

function public() {
    var public = document.querySelector('.public');
    var cafo = document.querySelector('.cafo');
    var polluter = document.querySelector('.polluters');
    var publicMap = document.querySelector('.publicMap');
    var cafoMap = document.querySelector('.cafoMap');
    var polluterMap = document.querySelector('.pollutersMap');
    public.style.display = 'block';
    cafo.style.display = 'none';
    polluter.style.display = 'none';
    publicMap.style.display = 'block';
    polluterMap.style.display = 'none';
    cafoMap.style.display = 'none';
    reload_map();
}
function menuchangeZvalue() {
    var i = document.querySelector('#menuToggle');
    function closeWindowZreset() {
        i.style.zIndex = 1;
    }
    if (i.style.zIndex == 3) {

        setTimeout(closeWindowZreset,
            2000
        )

    }
    else {
        i.style.zIndex = 3;
    }
}

function polluters() {
    var public = document.querySelector('.public');
    var cafo = document.querySelector('.cafo');
    var polluter = document.querySelector('.polluters');
    var publicMap = document.querySelector('.publicMap');
    var cafoMap = document.querySelector('.cafoMap');
    var polluterMap = document.querySelector('.pollutersMap');
    public.style.display = 'none';
    cafo.style.display = 'none';
    polluter.style.display = 'block';
    publicMap.style.display = 'none';
    polluterMap.style.display = 'block';
    cafoMap.style.display = 'none';
    reload_map();
}
function toggleMaps() {
    var toggleMaps = document.querySelector('.toggleMaps');
    if (toggleMaps.style.display == 'block') {
        console.log('closed')
        document.querySelector('.toggleMaps2').style.display = 'none';
        toggleMaps.style.display = 'none';
        document.querySelector('.toggleMaps3').style.display = 'none';
    }
    else {
        toggleMaps.style.display = 'block';
        document.querySelector('.toggleMaps2').style.display = 'block';
        document.querySelector('.toggleMaps3').style.display = 'block';
        console.log('opened')
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { document.getElementById("location").innerHTML = "Geolocation is not supported by this browser."; }
}
function showPosition(position) {
    document.getElementById("add").value = position.coords.latitude + ", " + position.coords.longitude;
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED: document.getElementById("location").innerHTML = "User denied the request for Geolocation."; break;
        case error.POSITION_UNAVAILABLE: document.getElementById("location").innerHTML = "Location information is unavailable."; break;
        case error.TIMEOUT: document.getElementById("location").innerHTML = "The request to get user location timed out."; break;
        case error.UNKNOWN_ERROR: document.getElementById("location").innerHTML = "An unknown error occurred."; break;
    }
}


var isd = document.cookie
var dsd = isd.slice(-32)
function syn(x) {
    var i = document.querySelector('#balls');
    console.log('connected')
    if (x == '1') {
        document.querySelector('#resultCon').style.display = 'flex';
        i.innerHTML = '<h5>Your well is likely polluted from PFAS above a dangerous threshold as predicted by various factors including distance from industrial plants or wastewater plants, climate of the area, and soil type.</h5>'
    }
    else if (x == '0') {
        document.querySelector('#resultCon').style.display = 'flex';
        i.innerHTML = '<h3>Your well is most likely not polluted from PFAS as predicted by various factors including distance from industrial plants or wastewater plants, climate of the area, and soil type.</h3>'
    }
    else if (x == '2') {
        document.querySelector('#resultCon').style.display = 'flex';
        i.innerHTML = '<h6 style="text-align:left;">There was an error. <br>Did you:<br><br>.Enter a valid address/coordinates(must include city + state in address)<br><br>.Enter a valid well depth(number only in feet)</h6>'
    }

}
function test() {

    let sent_data = { 'add': document.querySelector('#add').value, 'depth': document.querySelector('#depth').value }
    const API_URL = "synthesize";
    document.querySelector('#resultCon').style.display = 'flex';
    document.querySelector('#balls').innerHTML = '<p>Loading <p class="dot">.</p><p class="dot">.</p><p class="dot">.</p></p>'
    const request = new Request(
        API_URL,
        {
            headers: {
                'X-CSRFToken': dsd,
                'Content-Type': 'application/json'
            }
        }
    );

    return fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(sent_data)
    })
        .then(response => response.json())
        .then(data => {
            syn(JSON.stringify(data))
        });
}
var isd = document.cookie
var dsd = isd.slice(-32)


function sign_up_no_acc() {
    

    let sent_data = { 'email': document.querySelector('#noAccEmail').value }
    const API_URL = "/newsletter_signup";

    const request = new Request(
        API_URL,
        { headers: { 'X-CSRFToken': dsd, 'Content-Type': 'application/json' } }
    );
    
    return fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(sent_data)
    })
        .then(window.location.reload());

}
