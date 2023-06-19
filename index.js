
const date = new Date(); // get today's date

$("button").on("click", function(){
    var inputDate = $("input").val();
    var dateSplit = inputDate.split('-')
    if (inputDate == ''){
        $("h3").html("Enter a Date"); // if no date is entered then prompt the user for a date
    }
    else{
        var dateFormat = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;

        var dob = new Date(dateFormat);

        // month difference in time 
        var month = Date.now() - dob.getTime(); // the date now - time in ms that has passed from 1970 to the dob entered

        // converting calcualting difference in time above to date
        var ageDate = new Date(month);

        // getting the year from date above
        var year = ageDate.getUTCFullYear();


        if (year > 1970){
            $("h3").html(`You are ${Math.abs(year - 1970)} years old`);
        }
        else{
            $("h3").html(`You are ${year - 1970} years old`);
        }
        // the 1970 comes from -> Early UNIX engineers picking that arbitrarily because they needed to set a uniform date for the start of time
    }
})