// The scope of `random` is too loose 


const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
var days;

const getTrainingDays = event => {

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
     days = 200;
  }

  return days;
};
var name='Nala';
// The scope of `name` is too tight 
const logEvent = (event) => {

  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days) => {

  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
var days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
var name = 'Warren';

logEvent(event2);
logTime(days2);

