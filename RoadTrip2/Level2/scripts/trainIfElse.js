var trainNumber = 1;
var trainsOperational = 5;
var totalTrains = 12;
var stoppedTrain = trainsOperational + 1;


if (trainsOperational > 0) {
   if( trainsOperational == totalTrains){
      console.log('All trains are running at JavaScript express.');
   }else{
      for(trainNumber; trainNumber <= totalTrains; trainNumber++){
         if(trainNumber <= trainsOperational){
            console.log('Train #' + trainNumber + ' is running.');
         }else if(trainNumber == 10){
            console.log('Train #10 begins to run at noon.');
         }else {
            console.log('Train #' + trainNumber + ' is not operational.');
         }
      }
   }

} else {
   console.log('No trains are operational today! :/');
}
