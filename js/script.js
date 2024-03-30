document.getElementById('negative').style.border = "8px dotted blue";

const body = document.body ;
const div = document.createElement("div") ;
div.textContent = "DOCUMENT OBJECT MODEL" ;

//body.append("T-rex"); writes T-rex at the bottom of the page
//body.append(div); writes hello hello at the bottom of the page
const paragraph = document.getElementsByTagName('p');
for (let i = 0; i < paragraph.length; i++) {
   paragraph[i].style.fontWeight = 'bold' ;
   }

const sync = document.querySelectorAll('.wh li');
for (let i = 0; i < sync.length; i++) {
   sync[i].style.fontWeight = 'bold'   ;
   }

const testButton = document.getElementById('testButton');
testButton.addEventListener('click', (e) => {
   alert('Hold on, the page is loading.');
   alert('90% complete.');
   alert('Loading has finished.');
   alert('I told you to click in the top right corner for a reason...')
   });

   const form = document.getElementsByClassName('nintendo');
   const toons = document.querySelectorAll('option[value]');
const graphics = document.getElementById('snes').addEventListener('change', (e) => {
for(let i = 0; i < toons.length; i++) {
   const dataCheck = e.target.value;
   const tmnt = toons[i].getAttribute('value');
   if(dataCheck === "dk") {  //works with the value of their values 
       alert('COCONUT');
       };
       if(dataCheck === "fzero") {
         alert('FALCON PUNCH');
         };
         if(dataCheck === "kirby") {
            alert('BALLOONS');
            };
            if(dataCheck === "shy") {
               alert('HELLO');
               };
               if(dataCheck === "sword") {
                  alert('TEMPLE OF TIME');
                  };
}
});

if(document.getElementById('chaos')) {
   (document.getElementById('chaos')).addEventListener('click', () => {
      const name = prompt("what\'s you name?");
      alert(`Hi, ${name}. Want to see something cool?`);
      document.querySelector('html').innerHTML = `
       <h1>Welcome to ${name}'s site!</h1>
       <img src="https://retrocdn.net/images/f/f6/Chaotix_title.png">
     `;
  });
  };

  const colors = ['cerulean', 'blue', 'fuchsia', 'vermillion', 'red', 'cyan', 'crimson', 'saffron', 'pink',
          'violet', 'lavendar', 'pewter', 'deepskyblue', 'indigo', 'turquoise', 'celadon', 'viridian', 'cinnabar'];
          const index = 0;
          function changeColor() {
            const randomIndex = Math.floor(Math.random() * colors.length);
            const color = colors[randomIndex];
            document.getElementById('changer').style.color = color;
          }
          setInterval(function() {
              changeColor();
          }, 1000);
