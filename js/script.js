console.log("test")
calculateBmi();

function calculateBmi(){
    let weight = document.getElementById('input-BB').value;
    let height = document.getElementById('input-TB').value;
    let age = document.getElementById('input-usia').value;
    let resultBmi =document.getElementById('result-bmi');
    // console.log(weight);
    // console.log(resultBmi.textContent);
    // resultBmi.textContent = '100';
    // console.log(resultBmi.textContent);
    if (weight == '' || height =='' || age == ''){
        alert('Please fill in all the fields');
    }else{
        let bmi = (weight/((height /100 ) ** 2)).toFixed(2);
        // console.log(weight);
        // console.log(weight);
        resultBmi.textContent=bmi;
        alert('Success');
    }
}

// let formGroup = document.getElementsByClassName('form-group')
// console.log(formGroup);

// let formGroup = document.querySelectorAll('div')
// console.log(formGroup);

