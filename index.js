function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!'
   } else if (ride > 400 && ride <= 2000) {
    return 'That will be twenty bucks.'
  } else if (ride > 2000 && ride <=2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) { 
    return 'No can do.'
  }
  
};


function ternaryCheckCity(destination) {
 /* 
  if (destination === "NYC") {
    return "Ok, sounds good."
  }  else { 
    return "No go."
  }*/
  let result = destination === "NYC" ? "Ok, sounds good." : "No go.";
  return result;
    
};

  


function switchOnCharmFromTip(tip){

  let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    case 'thanks for everything':
      response = "Bye."
      break;
  }
  return response;
}