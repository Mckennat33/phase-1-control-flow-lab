function scuberGreetingForFeet(number){ 
   
    if (number <= 400) {
      return 'This one is on me!'
    } else if (number >= 2001 && number < 2501) {
      return 'I will gladly take your thirty bucks.'
    } else if (number >= 2501) {
      return 'No can do.'
    }
  }
    
function ternaryCheckCity(city){

  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
  
}



function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      
    case 'not as generous':
      return 'Thank you.'; 

    case 'thanks for everything':
      return 'Bye.'
}
}