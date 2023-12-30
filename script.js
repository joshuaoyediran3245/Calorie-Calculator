function calculateMaintenanceCalories() {
    var age = parseInt(document.getElementById('age').value);

    // Use radio buttons for gender
    var genderRadios = document.getElementsByName('gender');
    var gender;
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].value;
            break;
        }
    }

    // Height
    var feet = parseFloat(document.getElementById('feet').value);
    var inches = parseFloat(document.getElementById('inches').value);

    // Convert feet to inches and add to inches input
    var totalHeight = (feet * 12) + inches;

    var weight = parseFloat(document.getElementById('weight').value);
    var exerciseFrequency = document.getElementById('activitydropdownmenu').value;

    var bmr;

    if (gender === 'male') {
        bmr = 66.47 + (6.24 * weight) + (12.37 * totalHeight) - (6.8 * age);
    } else {
        bmr = 655.1 + (4.35 * weight) + (4.7 * totalHeight) - (4.7 * age);
    }

    var maintenanceCalories;

    switch (exerciseFrequency) {
        case 'option2':
            maintenanceCalories = bmr * 1.2;
            break;

        case 'option3':
            maintenanceCalories = bmr * 1.375;
            break;

        case 'option4':
            maintenanceCalories = bmr * 1.55;
            break;

        case 'option5':
            maintenanceCalories = bmr * 1.725;
            break;

        default:
            maintenanceCalories = 0;
    }

    // Save the values in sessionStorage
    sessionStorage.setItem('bmr', bmr);
    sessionStorage.setItem('maintenanceCalories', maintenanceCalories);

    // Display the result in the HTML document
    displayResult();
}

function displayResult() {
    var savedBMR = parseFloat(sessionStorage.getItem('bmr'));
    var savedMaintenanceCalories = parseFloat(sessionStorage.getItem('maintenanceCalories'));

    if (!isNaN(savedBMR) && !isNaN(savedMaintenanceCalories)) {
        document.getElementById('result').innerHTML =
            'Your estimated BMR: ' + savedBMR.toFixed(2) + ' calories per day <br>' +
            'Your estimated maintenance calories: ' + savedMaintenanceCalories.toFixed(2) + ' calories per day';
var calorieDeficit = savedMaintenanceCalories - 450;
document.getElementById('calorieDeficit').innerHTML = 
'Calorie Deficit: ' + calorieDeficit.toFixed(2) + ' Calories per day';

var calorieSurplus = savedMaintenanceCalories + 600; 
document.getElementById('calorieSurplus').innerHTML = 

'Calorie Surplus ' + calorieSurplus.toFixed(2) + ' Calories per day ';



    }
}
