// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // time block for savingEntry function.
var timeBlockId;

// array for schedule planner
var scheduleTime = [
  {
    time: '09 AM',
    scheduleItem: ''
  },
  {
    time: '10 AM',
    scheduleItem: ''
  },
  {
    time: '11 AM',
    scheduleItem: ''
  },
  {
    time: '12 PM',
    scheduleItem: ''
  },
  {
    time: '1 PM',
    scheduleItem: ''
  },
  {
    time: '2 PM',
    scheduleItem: ''
  },
  {
    time: '3 PM',
    scheduleItem: ''
  },
  {
    time: '4 PM',
    scheduleItem: ''
  },
  {
    time: '5 PM',
    scheduleItem: ''
  }
];


$(function () {

    //Looping through ScheduleTime array
     for(var i = 0; i < scheduleTime.length; i++){
      //creating div element
      var scheduleBlk_El = document.createElement('div');
      scheduleBlk_El.setAttribute('id', 'hour-' + (i + 9));
      scheduleBlk_El.classList.add('row', 'time-block');

      //adding past, present, and future classes for colors
      if(i + 9 < dayjs().hour()){
        scheduleBlk_El.classList.add('past');
      }else if(i + 9 === dayjs().hour()){
        scheduleBlk_El.classList.add('present');
      }else{
        scheduleBlk_El.classList.add('future');
      }
      //creating div for time
      var time_El = document.createElement('div');
      time_El.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
      time_El.textContent = scheduleTime[i].time;

      //creating textarea
      var txtArea_El = document.createElement('textarea');
      txtArea_El.classList.add('col-8', 'col-md-10', 'description');
      txtArea_El.setAttribute('rows', '3');
      txtArea_El.value = scheduleTime[i].scheduleItem;

      //create save button
      saveButton_El = document.createElement('button');
      saveButton_El.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
      saveButton_El.setAttribute('aria-label', 'save');

      //create the icon for save button
      var icon_El = document.createElement('i');
      icon_El.classList.add('fas', 'fa-save');
      icon_El.setAttribute('aria-hidden', 'true');

      //appending created elements
      saveButton_El.appendChild(icon_El);

      scheduleBlk_El.appendChild(time_El);
      scheduleBlk_El.appendChild(txtArea_El);
      scheduleBlk_El.appendChild(saveButton_El);

      document.querySelector('.container-lg').appendChild(scheduleBlk_El);

    }
   
    //calling current date function
    currentDate();

    //highlightedTimeSlot();
   
    //calling saveEntry function
    saveEntry();

    // calling the loadEntries function
    loadEntries();
  });

  //Get current date function for header
  function currentDate(){
    var currentDate = dayjs().format('dddd, MMMM D, YYYY H:mm A'); 
    $('#currentDay').text(currentDate);
  }
  
  //Saving the entries
  function saveEntry(){
    $('.saveBtn').on('click', function () {
      // Get the id of the containing time-block
      timeBlockId = $(this).closest('.time-block').attr('id');
      
      // Get the user input from the textarea
      var userInput = $(this).prev('.description').val();
  
      // Save the user input in local storage using the timeBlockId as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  }
  
  //loading the entries
  function loadEntries(){
    for (var i = 0; i < scheduleTime.length; i++) {
      var timeBlockId = 'hour-' + (i + 9);
      var savedData = localStorage.getItem(timeBlockId);

      if (savedData) {
        scheduleTime[i].scheduleItem = savedData;
        var textarea = document.querySelector('#' + timeBlockId + ' .description');
        textarea.value = savedData;
      }
    }

  }



 