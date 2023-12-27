function calculateMaintenanceCalories() {
    var age = parseInt(document.getElementById('age').value);
    var genderCheckbox = document.getElementById('gender');
    var gender = genderCheckbox.checked ? genderCheckbox.value : 'female';

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

    // Save the maintenanceCalories in sessionStorage to pass it to the next page
    sessionStorage.setItem('maintenanceCalories', maintenanceCalories);

    // Redirect to the targetpage.html
    redirectToAnotherPage();
}

function redirectToAnotherPage() {
    // Replace 'targetpage.html' with the actual path or URL of the page you want to redirect to
    window.location.href = 'http://127.0.0.1:5500/targetpage.html';
}

// Check if we are on the result.html page and display the saved maintenanceCalories
// Check if we are on the result.html page and display the saved maintenanceCalories
if (window.location.href.includes('result.html')) 
    var savedMaintenanceCalories = sessionStorage.getItem('maintenanceCalories');
    if (savedMaintenanceCalories) {
        document.getElementById('result').innerHTML =
            'Your estimated maintenance calories: ' + savedMaintenanceCalories + 'kcal per day';
    }
