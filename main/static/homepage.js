

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
var map4;
document.addEventListener('DOMContentLoaded', function () {
    map4 = L.map('map4', { dragging: true }).setView([35.737088, -79.397509], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5, minZoom: 5, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map4);
    
})
function reload_map() {
    map4.invalidateSize();
}
window.addEventListener('storage', function (e) {
    if (e.key === 'profilePicture') {
        const profilePicElement = document.getElementById('pfp');
        if (profilePicElement) {
            profilePicElement.src = e.newValue;

        }
    }
});

window.onload = loadProfilePicture;

function loadProfilePicture() {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    try {
        const storedImage = localStorage.getItem('profilePicture');
        console.log(storedImage)
        if (storedImage) {
            document.getElementById('pfp').src = storedImage;
        }
        else {
            document.getElementById('pfp').src = "https://th.bing.com/th/id/OIP.YOCYcAmmqZOMDcP9mc2M6wHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7";
        }
    }
    catch {

    }
    myCallback();
}


var queryDisplayContent = document.querySelector('#queriedDataShow');
var subReportResponse = document.getElementById('subRepResp');

var subEnteredUnique = document.getElementById('subEnterUni');
var subEventResponder = document.getElementById('subEvResponder');
var unshownDomainEnter = document.getElementById('unDomainEntered');
var PageDomRecreate;

function myCallback() {
    var num = document.querySelector('#num').textContent;

    const cookie = document.cookie.slice(-32)

    

    let sent_data = { 'q': btoa(num) }

    const API_URL = "/stylesheet.css";

    const request = new Request(
        API_URL,
        { headers: { 'X-CSRFToken': cookie, 'Content-Type': 'application/json' } }
    );

    fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(sent_data)
    })

        .then(response => response.json())


        .then(questions => {

            var i = atob(questions)
           console.log(i)
            getQuestionInformation(i)

        }
        )
}

function getQuestionInformation(PageWindowQuery) {
    var returnQueryPage = JSON.parse(PageWindowQuery);
    console.log(returnQueryPage)
    queryDisplayContent.textContent = returnQueryPage['QueryDataResolute'];
    subReportResponse.textContent = returnQueryPage['tokenizedQuery'][0];

    subEnteredUnique.textContent = returnQueryPage['tokenizedQuery'][1];

    subEventResponder.textContent = returnQueryPage['tokenizedQuery'][2];

    unshownDomainEnter.textContent = returnQueryPage['tokenizedQuery'][3];
    

    PageDomRecreate = returnQueryPage['PageDomRecreate'];
    subReportResponse.style.color = 'black';
    subEnteredUnique.style.color = 'black';
    subEventResponder.style.color = 'black';
    unshownDomainEnter.style.color = 'black';
    

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
        .then(response => response.json())
        .then(response => {
            data = response['time']; return data;
        })
    window.location.reload();
}
/*
function handleCredentialResponse(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    
    const img = profile.getImageUrl();
    const name = profile.getName();
    const email = profile.getEmail();

    const user = { 'Name': name, 'Email': email }

    localStorage.setItem('profilePicture', img);
    const BASE_URL = '{{ request.scheme }}://{{ request.get_host }}/';

    
    const API_URL = BASE_URL + "/api/google-login";

    const request = new Request(
        API_URL,
        { headers: { 'X-CSRFToken': dsd, 'Content-Type': 'application/json' } }
    );

    return fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(response => {
            data = response['time']; return data;
        })
}    
 
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "374367816012-503cj4pjim8oe0obtglknt0b4ajrq1an.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } 
    );
    google.accounts.id.prompt(); 
}
*/
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {
            console.log(reader.result)
            const base64Image = reader.result;
            localStorage.setItem('profilePicture', base64Image);
            console.log(base64Image)
            loadProfilePicture();
        };
        reader.readAsDataURL(file);


    } else {
        console.log("No file selected");
    }
}
function openProfile() {
    var x = document.querySelector(".profile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function onVisible(element, callback) {
    if (!element) {
        console.error(`onVisible: Element with ID ${element} not found.`);
        return; // Exit the function early if the element doesn't exist
    }
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                callback(element);
                observer.disconnect();
            }
        });
    }).observe(element);
    if (!callback) console.error("onVisible: Invalid element provided.", element); return;
}

onVisible(document.querySelector("#hqth"), () => {
    try {
        fetch('/get_points')
            .then(response => response.json())
            .then(console.log(response))
            .then(data => {
                countIni(JSON.stringify(data));
            })
    }

    catch { }
}
);
onVisible(document.querySelector("#homeguidetxt"), () =>

    document.querySelector('.bg-text').classList.add('from-right')


)
onVisible(document.querySelector(".box"), () =>

    document.querySelector('.box').classList.add('growdiv'),
    setTimeout(document.querySelector('.box').classList.remove('growdiv'), 2000),
    setTimeout(reload_map, 4000)


)


onVisible(document.querySelector('#homenews'), () =>
    document.querySelector('#homenewsbox').classList.add('from-left')

)
function countIni(num) {
    let startNum = 0,
        endNum = num,
        nSecond = 2,
        resolutionMS = 33,
        deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;
    if (num === 0) {
        document.querySelector('#response').textContent = 0;
    }
    var handle = setInterval(() => {

        var x = startNum.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        document.querySelector('#response').textContent = `${x} points`;

        // if already updated the endNum, stop
        if (startNum >= endNum) clearInterval(handle);

        startNum += deltaNum;
        startNum = Math.min(startNum, endNum);
    }, resolutionMS);
}

try {
    onVisible(document.querySelector(".profile"), () =>

        fetch('/get_points')
            .then(response => response.json())
            .then(console.log(response))
            .then(data => {
                countInin(JSON.stringify(data));
            })



    );
}
catch { }


function countInin(num) {
    let startNum = 0,
        endNum = num,
        nSecond = 2,
        resolutionMS = 33,
        deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;
    if (num === 0) {
        document.querySelector('.profilepoints').textContent = 0;
    }
    var handle = setInterval(() => {

        var x = startNum.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        document.querySelector('.profilepoints').textContent = `${x} points`;

        // if already updated the endNum, stop
        if (startNum >= endNum) clearInterval(handle);

        startNum += deltaNum;
        startNum = Math.min(startNum, endNum);
    }, resolutionMS);
}


var radios = document.forms["formA"].elements["q"];
var correct = document.getElementById('PageDomRecreate')
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
        var openDirectory = ['subRepResp', 'subEnterUni', 'subEvResponder', 'unDomainEntered'];
        var ansQuery = openDirectory[Number(this.value) - 1]
        
        if (ansQuery == PageDomRecreate) {


            document.querySelector('#question_divy').innerHTML = '<h1>Correct</h1>';
            setTimeout(() => location.reload(), 3000);



        } else {

            document.querySelector('#question_divy').innerHTML = '<h1>Incorrect</h1>';

            setTimeout(() => location.reload(), 3000);
        }


    }
}
function login() {
    var l = document.querySelector('.login')
    var k = document.querySelector('#register')
    if (l.style.display == "block" || k.style.display == 'block') {
        l.style.display = 'none';
        k.style.display = 'none'
    }
    else {
        k.style.display = 'none';
        l.style.display = 'block';
    }

}

function register() {
    var l = document.querySelector('.login')
    var k = document.querySelector('#register')
    if (l.style.display == "block") {
        l.style.display = 'none';
        k.style.display = 'block';
    }
    else {
        l.style.display = 'block';
        k.style.display = 'none';
    }
}
function reset() {
    var l = document.querySelector('.login')
    var k = document.querySelector('#register')
    var r = document.querySelector('.reset')
    l.style.display = 'none';
    k.style.display = 'none';
    r.style.display = 'block';
}
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
        .then(response => response.json())
        .then(response => {
            data = response['time']; return data;
        });
    window.location.reload();
}
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
        .then(response => response.json())
        .then(response => {
            data = response['time']; return data;
        })
    window.location.reload();
}