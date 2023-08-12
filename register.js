const company = document.getElementById('company');
const name = document.getElementById('name');
const size = document.getElementById('size-select');
const chairs = document.getElementById('number-chair');
const visitors = document.getElementById('visitor');
const contact = document.getElementById('tel');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    if(company.value === ''){
        alert('Please fill in the company name');
    }else if (size.value === '0'){
        alert('Please select the booth size');
    }else if (chairs.value === ''){
        alert('Please fill in the number of chairs');
    }else if (name.value === ''){
        alert('Please fill in the contact person name');
    }else if (chairs.value < 1 || chairs.value > 10){
        alert('Please fill in the number of chairs between 1 and 10');
    }else if (tel.value === ''){
        alert('Please fill in the contact number');
    }else{
        alert('Thank you for your registration!');
    }
});

