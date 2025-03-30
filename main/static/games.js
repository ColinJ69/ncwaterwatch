var quiz = document.querySelector('#quizdiv');
var leaderboard = document.querySelector('#leaderboarddiv');
var donatediv = document.querySelector('#redeemdiv');
function openMenus() {
    var menu = document.querySelector('#quizMenu-opened');
    var openMenuBtn = document.querySelector('.bi-arrow-down-circle');

    function pushaway() {
        menu.style.display = 'none';
    }
    if (menu.style.display == 'block') {
        openMenuBtn.classList.remove('spinonthatthang');
        openMenuBtn.classList.add('spinbackonthatthang');
        menu.classList.remove('floatInMenu-Quiz')
        menu.classList.add('floatOutMenu-Quiz')
        setTimeout(
            pushaway,
            300
        )

    }
    else {
        openMenuBtn.classList.remove('spinbackonthatthang');
        openMenuBtn.classList.add('spinonthatthang');
        menu.classList.remove('floatOutMenu-Quiz')
        menu.classList.add('floatInMenu-Quiz')
        menu.style.display = 'block';
    }


}
function openQuizzes() {

    leaderboard.style.display = 'none';
    donatediv.style.display = 'none';
    quiz.style.display = 'block';
}
function openLeaderboard() {
    leaderboard.style.display = 'block';
    donatediv.style.display = 'none';
    quiz.style.display = 'none';


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
function logins() {
    window.location.href = 'http://127.0.0.1:8000/logins'
}
function openRedeem() {
    leaderboard.style.display = 'none';
    donatediv.style.display = 'block';
    quiz.style.display = 'none';
}
var queryDisplayContent = document.querySelector('.queriedDataShow');
var subReportResponse = document.getElementById('subRepResp');

var subEnteredUnique = document.getElementById('subEnterUni');
var subEventResponder = document.getElementById('subEvResponder');
var unshownDomainEnter = document.getElementById('unDomainEntered');
var PageDomRecreate;

class WeightedRandomPicker {
    constructor(arr) {
        this.arr = arr;
        this.weights = new Array(arr.length).fill(1);
    }

    pick() {
        const totalWeight = this.weights.reduce((acc, weight) => acc + weight, 0);
        let random = Math.random() * totalWeight;

        for (let i = 0; i < this.weights.length; i++) {
            if (random < this.weights[i]) {
                this.weights[i] *= 0.5;
                return this.arr[i];
            }
            random -= this.weights[i];
        }
    }
}
function donate() {
    try {
        var npoints = document.querySelector('#pointss').textContent
        var points = Number(npoints.replace(/\D/g, ''));


        if (points > 999) {

            document.querySelector('#pointss').textContent = `${points - 1000} points`
            






            let sent_data = JSON.stringify({ 'points': 10 })
            const API_URL = "/donate";

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
                body: sent_data
            })
                .then(response => response.json())

                .then(data => syn(data))
                .catch(error => console.error('Error:', error));

        }
        else {
            document.querySelector('#message').textContent = 'Insufficient Points!'
        }
    }
    catch {
        document.querySelector('#message').innerHTML = "<a href='logins' style='color:black'>Login here to start earning points</a> "
    }

}
function getQuestions() {
    const picked_question = new WeightedRandomPicker([
        0, 1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34,
        35, 36, 37, 38, 39, 40, 41,
        42, 43, 44, 45, 46, 47, 48]);
    var p = picked_question.pick();

    const cookie = document.cookie.slice(-32)


    let sent_data = { 'q': btoa(p) }
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


        .then(enteredQueryResponse => {

            var QueryResponse = atob(enteredQueryResponse)

            getQuestionInformation(QueryResponse)

        }
        )
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

function getQuestionInformation(PageWindowQuery) {

    function resetClasses() {
        document.querySelector('#quizdiv').classList.remove('retractExplanationSmol')
        document.querySelector('#quizdiv').classList.remove('retractExplanation')
        document.querySelector('#quizdiv').classList.remove('retractExplanationMoreSmol')
        document.querySelector('#quizdiv').classList.remove('retractlarge')
    }
    setTimeout(
        resetClasses,
        1000
    )
    var returnQueryPage = JSON.parse(PageWindowQuery);
    queryDisplayContent.textContent = returnQueryPage['QueryDataResolute'];
    subReportResponse.textContent = returnQueryPage['tokenizedQuery'][0];
    console.log(subReportResponse.innerText)
    subEnteredUnique.textContent = returnQueryPage['tokenizedQuery'][1];
    console.log(subEnteredUnique.innerText)
    subEventResponder.textContent = returnQueryPage['tokenizedQuery'][2];
    console.log(subEventResponder.innerText)
    unshownDomainEnter.textContent = returnQueryPage['tokenizedQuery'][3];
    console.log(unshownDomainEnter.innerText)

    PageDomRecreate = returnQueryPage['PageDomRecreate'];
    subReportResponse.style.color = 'black';
    subEnteredUnique.style.color = 'black';
    subEventResponder.style.color = 'black';
    unshownDomainEnter.style.color = 'black';
    var radios = document.forms["formA"].elements["q"];
    radios.forEach(function (radio) {
        radio.disabled = false;
    });
    try {
        localStorage.setItem('cexp', returnQueryPage['expcPlus'])
        localStorage.setItem('inexp', returnQueryPage['expcMinus'])
    }
    catch {

    }



}


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function () {
        getQuestions();
        daysLeft();
    });
});


function correctExplanation() {
    const countdownElement = document.getElementById('nextQuestion-skip');
    countdownElement.style.display = 'block';
    
    try {

        document.querySelector('#explanation').style.display = 'block';
        document.querySelector('.explaintext').classList.add('typing-effect');
        const text = localStorage.getItem('cexp');
        console.log(text)
        const typewriterElement = document.querySelector('.explaintext');
        typewriterElement.textContent = '';
        let index = 0;
        function type() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 5);
            }
        }
        type();
    }
    catch {

    }
}
function incorrectExplanation() {
    try {


        document.querySelector('#explanation').style.display = 'block';
        document.querySelector('.explaintext').classList.add('typing-effect');
        const text = localStorage.getItem('inexp');
        console.log(text)
        const typewriterElement = document.querySelector('.explaintext');
        typewriterElement.textContent = '';
        let index = 0;
        function type() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 10);
            }
        }
        type();
    }
    catch {

    }
}




var radios = document.forms["formA"].elements["q"];
var correct = document.getElementById('PageDomRecreate')
for (var i = 0, max = radios.length; i < max; i++) {

    radios[i].onclick = function () {
        if (window.innerWidth <= 436) {
            document.querySelector('#quizdiv').classList.remove('retractExplanationMoreSmol')
            document.querySelector('#quizdiv').classList.add('expandExplanationMoreSmol')
        }
        else if (window.innerWidth > 1500) {
            document.querySelector('#quizdiv').classList.add('expandlarge');
            document.querySelector('#quizdiv').classList.remove('retractlarge');
        }
        else if (window.innerWidth >= 800) {

            document.querySelector('#quizdiv').classList.remove('retractExplanation')
            document.querySelector('#quizdiv').classList.add('expandExplanation')
        }
        else if (window.innerWidth < 800) {

            document.querySelector('#quizdiv').classList.remove('retractExplanationSmol')
            document.querySelector('#quizdiv').classList.add('expandExplanationSmol')
        }
        radios.forEach(function (radio) {
            radio.disabled = true;
        });
        console.log(this.value)
        var openDirectory = ['subRepResp', 'subEnterUni', 'subEvResponder', 'unDomainEntered'];
        var ansQuery = openDirectory[Number(this.value) - 1]
        console.log(ansQuery)
        var ans = document.getElementById(ansQuery);
        console.log(PageDomRecreate)
        pushFooterDown();
        if (this.value == PageDomRecreate) {
            console.log(ans)

            ans.style.color = 'green';
            document.getElementById(ansQuery).textContent = 'Correct! +10';
            
            submitFormData();
            
            correctExplanation();
            

            try {
                var npoints = document.querySelector('#pointss').textContent
                
                if (npoints !== 'Login to gain points') {


                    var points = Number(npoints.replace(/\D/g, ''));
                    document.querySelector('#pointss').textContent = `${points + 10} points`

                    //document.getElementById('pointss').value = Number(document.getElementById('pointss').value.trim()) + 10

                    if (document.getElementById('pointss').value == 'NaN') {


                        document.getElementById('pointss').value = 10;

                    }
                }
            }
            finally {

            }



        } else {

            ans.style.color = '#e44444';
            document.getElementById(ansQuery).textContent = 'Incorrect';
            
            correctExplanation();
            

        }


    }
}

function pushFooterDown() {
    var footer = document.querySelector('.gamepagefooter-class');
    footer.style.marginTop = '50%';
    
}
function reset() {
    window.location.reload();
}
function reset_new_question() {
    
    resetButtons();
}

var isd = document.cookie
var csrftoken = isd.slice(-32)


function submitFormData() {
    

    let sent_data = { 'points': 10 }
    const API_URL = "/add_points";

    const request = new Request(
        API_URL,
        { headers: { 'X-CSRFToken': csrftoken, 'Content-Type': 'application/json' } }
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

}
function removeCover() {
    if (window.innerWidth <= 436) {
        document.querySelector('#quizdiv').classList.add('retractExplanationMoreSmol')
        document.querySelector('#quizdiv').classList.remove('expandExplanationMoreSmol')
    }
    else if (window.innerWidth > 1500) {
        document.querySelector('#quizdiv').classList.add('retractlarge');
        document.querySelector('#quizdiv').classList.remove('expandlarge');
    }
    else if (window.innerWidth > 800) {

        document.querySelector('#quizdiv').classList.add('retractExplanation');
        document.querySelector('#quizdiv').classList.remove('expandExplanation');
    }
    else if (window.innerWidth <= 800) {
        document.querySelector('#quizdiv').classList.add('retractExplanationSmol')
        document.querySelector('#quizdiv').classList.remove('expandExplanationSmol')
    }

}
function resetButtons() {
    var footer = document.querySelector('.gamepagefooter-class');
    footer.style.marginTop = '30%';
    document.getElementById('nextQuestion-skip').style.display = 'none';

    document.querySelector('#explanation').style.display = 'none';
    removeCover();
    getQuestions();

}




function countdown() {
    try {
        let count = 10;

        const countdownElement = document.getElementById('countdownnum');
        countdownElement.style.display = 'block';

        const countdown = setInterval(() => {
            count--; countdownElement.textContent = count + 's';
            console.log(count)
            if (count === 0) {
                clearInterval(countdown);

            }
        }, 1000);
    }
    catch {

    }
}

var messageContentChange;
function syn(data) {
    messageContentChange = document.querySelector('#message').innerHTML;
    console.log(messageContentChange)
    if (data.status == 'Good') {
        document.querySelector('#message').textContent = "Success"
        setTimeout(
           resetMessage
        , 3000);
    }
    else if (data.status == 'Bad') {

        document.querySelector('#message').innerHTML = "Error"
        setTimeout(
            resetMessage
        , 3000);
    }
    else if (data.status == 'nameError') {

        document.querySelector('#message').innerHTML = "<a href='logins' style='color:black'>Login here to start earning points</a> "
        setTimeout( 
            resetMessage
        , 3000);
    }
}

function resetMessage() {
    console.log(messageContentChange)
    document.querySelector('#message').innerHTML = messageContentChange;
}
function daysLeft() {
    const today = new Date();

    
    const year = today.getFullYear();
    const month = today.getMonth() + 1; 

    
    const lastDayOfMonth = new Date(year, month, 0);

    
    const daysLeft = (lastDayOfMonth - today) / (1000 * 60 * 60 * 24);

    document.querySelector('#timeLeftChar').textContent = `${Math.ceil(daysLeft)} days until reset ⏱️`;
}




var isd = document.cookie
var dsd = isd.slice(-32)
function cover() {
    var div = document.getElementById('formA');

}
function sign_up() {
    const BASE_URL = '{{ request.scheme }}://{{ request.get_host }}/';

    let sent_data = { 'register': true }
    const API_URL = BASE_URL + "/newsletter_signup";

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
    const BASE_URL = '{{ request.scheme }}://{{ request.get_host }}/';

    let sent_data = { 'email': document.querySelector('#noAccEmail').value }
    const API_URL = BASE_URL + "/newsletter_signup";

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