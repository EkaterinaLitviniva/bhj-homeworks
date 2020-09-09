const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const request = new XMLHttpRequest();

request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

request.addEventListener('readystatechange', function() {
  if (this.readyState !== this.DONE)  
    return;

  switch (this.status) {
    case 0:
      alert('Нет ответа от сервера');
      break;

      case 200:
      const poll = JSON.parse(this.responseText);
      title.innerText = poll.data.title;

       let buttonsHTML = '';      
       for (let i = 0; i < poll.data.answers.length; i++)
         buttonsHTML += `<button class="poll__answer" value="${i}">${poll.data.answers[i]}</button>`;
       answers.innerHTML = buttonsHTML;
      
       for (const button of answers.querySelectorAll('.poll__answer'))
         button.addEventListener('click', function() {
           const request2 = new XMLHttpRequest();
          
           request2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php'); 
           request2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

           request2.addEventListener('readystatechange', function() {
             if (this.readyState !== this.DONE)  
               return;
            
             switch (this.status) {
               case 0:
                 alert('Нет ответа от сервера');
                 break;
              
            }
          });
           
          request2.send(`vote=${poll.id}&answer=${button.value}`);
          
          alert('Спасибо, ваш голос засчитан!');
          
        });
    }
});

request.send();