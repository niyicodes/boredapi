// selecting button
const btn = document.querySelector('.get-activity');

// adding eventlistener
btn.addEventListener('click', rActivity);

function rActivity(e){
   // Instantiate obj
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `https://www.boredapi.com/api/activity/`, true);

   xhr.onload = function(){
      if(this.status === 200) {
         const response = JSON.parse(this.responseText);
         
         let output = '';

         if(response.activity !== ""){
            
            output += `
                  <div>
                     <h4>${response.activity}</h4>
                     <div>
                        <span>Type:" ${response.type} " </span> <br><br>
                        <span>Participants: " ${response.participants} "</span> <br><br>
                        <span>key: ${response.key}</span> <br><br>
                        <span><a href="${response.link}" target="_blank" rel="noopener noreferrer">${response.link}</a></span> 
                     </div>
                  </div>
            `;
            
         }

         document.querySelector('.results').innerHTML = output;
      }
   }
   xhr.send();
   
   e.preventDefault();
}