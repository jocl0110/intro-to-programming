const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

const skillsSection = document.getElementById('skills');
const skills = ['HTML5', 'CSS', 'JavaScript', 'Teamwork', 'Problem Solving', 'Algorithms' ];
const skillsList = skillsSection.querySelector('ul');



copyright.innerHTML = `Jose Izquierdo ${thisYear}`;
footer.appendChild(copyright);

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// It didn't let me use the document.getElementsByName method in the line #22. 
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
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName} </a><span>wrote you ${usersMessage}</span>`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = "button";
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();

    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})