// Set initial time
let min: number = 600;

const minElement: HTMLElement | null = document.getElementById('min');
if (minElement) {
    setInterval(function() {
        min--;
        minElement.innerHTML = min.toString();
    }, 1000);
}

// Define the questions
interface Question {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    correctOption: string;
}

const questions: Question[] = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
];

// Initialize question and options
const questioElement: HTMLElement | null = document.getElementById('ques');
const opt1Element: HTMLElement | null = document.getElementById('opt1');
const opt2Element: HTMLElement | null = document.getElementById('opt2');
const opt3Element: HTMLElement | null = document.getElementById('opt3');

if (questioElement && opt1Element && opt2Element && opt3Element) {
    questioElement.innerText = questions[0].question;
    opt1Element.innerText = questions[0].option1;
    opt2Element.innerText = questions[0].option2;
    opt3Element.innerText = questions[0].option3;
}

let score: number = 0;
let index: number = 0;

function Next(): void {
    index++;
    if (index >= questions.length) {
        document.write("<center>Questions are Full</center>" + score);
    } else {
        if (questioElement && opt1Element && opt2Element && opt3Element) {
            questioElement.innerText = questions[index].question;
            opt1Element.innerText = questions[index].option1;
            opt2Element.innerText = questions[index].option2;
            opt3Element.innerText = questions[index].option3;
        }
    }

    const optElements: NodeListOf<HTMLInputElement> = document.getElementsByName('abc') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < optElements.length; i++) {
        if (optElements[i].checked) {
            optElements[i].checked = false;
        }
    }
}

const btn: HTMLButtonElement | null = document.getElementById('btn') as HTMLButtonElement;
function abcd(): void {
    if (btn) {
        btn.disabled = false;
    }
}
