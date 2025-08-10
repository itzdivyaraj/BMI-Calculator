const form = document.querySelector("form")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //On clicking submit in form set and get are used to contact with server which we want to avoid

    const height = parseInt(document.querySelector("#height").value);
    //used parseInt to ensure we get integer value in height and not strings on getting value

    const weight = parseInt(document.querySelector("#weight").value);

    const results = document.querySelector("#results")

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter a valid height and not ${height}`
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter a valid weight and not ${weight}`
    }
    else {
        const ht = height / 100;
        const bmi = (weight / (ht * ht)).toFixed(2)
        //toFixed(2) ensures 2 decimal digits
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            results.innerHTML += `<br>You're Under Weight`
            //+= adds this line to results without overwriting it
        }
        else if (bmi >= 18.6 && bmi <=24.9) {
            results.innerHTML += `<br>You're Normal Weight`
        }
        else {
            results.innerHTML += `<br>You're Over Weight`
        }
    }
})