// Name and Password from the register-form

// storing input from register-form - into multiple arrays

function store() {

    //get the values in the html fields
    var name = document.getElementById('account_number');
    var pw = document.getElementById('password');
    var firstName = document.getElementById('first_name');
    var middleName = document.getElementById('middle_name');
    var lastName = document.getElementById('last_name');
    var dateofBirth = document.getElementById('dob');
    var email = document.getElementById('email');
    var phoneNumb = document.getElementById('mobile');

    //store them into a JSON Dictionary
    var newEntry = {
        "account_number": name.value,
        "password": pw.value,
        "first_name": firstName.value,
        "middle_name": middleName.value,
        "last_name": lastName.value,
        "dob": dateofBirth.value,
        "email": email.value,
        "mobile": phoneNumb.value    
    }

    //get the current values in Local Storage
    var dataList=JSON.parse(localStorage.getItem("Users"));
    
    //declare a new Array to store all the values
    var arrList=[];
    
    //check if the local storage is not empty
    if(dataList!=null)
    {
        //first add the existing data
        arrList=dataList;
        //then add the new data
        arrList.push(newEntry);
    }
    else{
        //just add the new data
        arrList.push(newEntry);
    }
    //store it back to local storage
    localStorage.setItem("Users",JSON.stringify(arrList));
}

// storing input from register-form - into multiple arrays - adding delivery address
function store2() {
}

// storing input from register-form - into multiple arrays  - adding delivery address
function store3() {
}

// check if stored data from register-form is equal to entered data in the login-form
function check() {
    //get the current values in Local Storage
    var dataList=JSON.parse(localStorage.getItem("Users"));

    // entered data from the login-form
    var userName = document.getElementById('account_number');
    var userPw = document.getElementById('password');

    //loop through the array
    // iterate over each element in the array
    for (var i = 0; i < dataList.length; i++){
        // look for the entry with a matching `code` value
        //alert(dataList[i].account_number + '|' + userName.value);
        //alert(dataList[i].password + '|' + userPw.value);

        //check each entry and see if it matches a value from the array
        if ((dataList[i].account_number == userName.value) && (dataList[i].password == userPw.value)){
            //alert('Yeah');
            window.open("Logged_In.html");
            return;
        // we found it
        }
    }
        alert('User and/or Password Not Found');
}
