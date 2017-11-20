var trainNumber = 1;
var trainsOperational = 8;
var totalTrains = 12;
var stoppedTrain = trainsOperational + 1;

for(trainNumber; trainNumber <= totalTrains; trainNumber++){
   if(trainNumber <= trainsOperational){
      console.log('Train #' + trainNumber + ' is running.');
   }else if(trainNumber == 10){
      console.log('Train #10 begins to run at noon.');
   }else {
      console.log('Train #' + trainNumber + ' is not operational.');
   }
}
