// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//current time
 

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
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    //

    
     for(var i = 0; i < scheduleTime.length; i++){
      var scheduleBlk_El = document.createElement('div');
      scheduleBlk_El.setAttribute('id', 'hour-' + (i + 9));
      scheduleBlk_El.classList.add('row', 'time-block');

      if(i + 9 < dayjs().hour()){
        scheduleBlk_El.classList.add('past');
      }else if(i + 9 === dayjs().hour()){
        scheduleBlk_El.classList.add('present');
      }else{
        scheduleBlk_El.classList.add('future');
      }

      var time_El = document.createElement('div');
      time_El.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
      time_El.textContent = scheduleTime[i].time;

      var txtArea_El = document.createElement('textarea');
      txtArea_El.classList.add('col-8', 'col-md-10', 'description');
      txtArea_El.setAttribute('rows', '3');
      txtArea_El.value = scheduleTime[i].scheduleItem;

      saveButton_El = document.createElement('button');
      saveButton_El.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
      saveButton_El.setAttribute('aria-label', 'save');

      var icon_El = document.createElement('i');
      icon_El.classList.add('fas', 'fa-save');
      icon_El.setAttribute('aria-hidden', 'true');

      saveButton_El.appendChild(icon_El);

      scheduleBlk_El.appendChild(time_El);
      scheduleBlk_El.appendChild(txtArea_El);
      scheduleBlk_El.appendChild(saveButton_El);

      document.querySelector('.container-lg').appendChild(scheduleBlk_El);

    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
   
  
   
    // TODO: Add code to display the current date in the header of the page.
     
    currentDate();
    saveEntry();
  });

  //Get current date function for header
  function currentDate(){
    var currentDate = dayjs().format('dddd, MMMM D, YYYY h:mm A'); 
    $('#currentDay').text(currentDate);
  }
  
  function saveEntry(){
    $('.saveBtn').on('click', function () {
      // Get the id of the containing time-block
      var timeBlockId = $(this).closest('.time-block').attr('id');
  
      // Get the user input from the textarea
      var userInput = $(this).prev('.description').val();
  
      // Save the user input in local storage using the timeBlockId as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  }
  

  function highlightedTimeSlot(time){
    var currentTime = dayjs.format('h:mm A');
    var userEntry = 0; // fix this  (e.g. var planEntry = moment(time, "H A"); )

    ///ideas how to code this!
  }



 