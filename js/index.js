const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.id = 'copyright';

const skillsSection = document.getElementById('skills');
const skills = ['HTML5', 'CSS', 'JavaScript', 'Teamwork', 'Problem Solving', 'Algorithms' ];
const skillsList = skillsSection.querySelector('ul');


    
copyright.innerHTML = `©Jose Izquierdo ${thisYear}`;
footer.appendChild(copyright);

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}





const messageForm = document.querySelector('form');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    console.log(usersName)
    console.log(usersEmail)
    console.log(usersMessage)
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName} </a> wrote you `;
    const span = document.createElement('span');
    span.textContent = usersMessage;
    newMessage.appendChild(span)
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = "button";
    removeButton.id = "removeButton";
    messageList.addEventListener('click', (e) => {
            const button = e.target;
            const entry = button.parentNode;
            button.textContent === 'remove'
            messageList.removeChild(entry);

    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})



// AJAX

var githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/jocl0110/repos');
githubRequest.send();
githubRequest.addEventListener('load', (e) => {
    var repositories = JSON.parse(this.githubRequest.responseText);
    console.log(repositories);
    
    const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');
for(let i = 0; i < repositories.length; i++){
    const project = document.createElement('li');
    project.innerHTML = repositories[i].name;
    projectList.appendChild(project);
}
})


