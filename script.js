
  

document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const form = document.querySelector('form');
    const candidateName = document.querySelector('.b');
    const fatherName = document.querySelector('.b2');
    const motherName = document.querySelector('.b3');
    const email = document.querySelector('.b4');
    const mobileNumber = document.querySelector('.b6');
    const servingInIAFYes = document.getElementById('btn1');
    const servingInIAFNo = document.getElementById('btn2');
    const saveButton = document.getElementById('save');

    document.addEventListener("DOMContentLoaded", function() {
        // Get form elements
        const form = document.querySelector('form');
        const resetButton = document.getElementById('reset');
        const saveButton = document.getElementById('save');
    
        // Event listener for the Save button
        saveButton.addEventListener('click', function (event) {
            event.preventDefault()// Prevents the form from submitting
    
            // Validate form fields
            if (validateForm()) {
                alert('Form submitted successfully!');
                // window.location.href = 'sceound.html';
            } else {
                alert('Please fill in all required fields.');
            }
        });
    
       
    
        // Function to validate the form
        function validateForm() {
            const candidateName = document.querySelector('.b');
            if (candidateName.value.trim() === '') {
                return false;
            }
            return true;
        }
    });
    

    // Event listener for the Save button
    saveButton.addEventListener('click', function (event) {
        // Validate candidate name
        if (candidateName.value.trim() === '') {
            alert('Please enter candidate name');
            event.preventDefault();
            return;
        }

        // Validate father name
        if (fatherName.value.trim() === '') {
            alert('Please enter father name');
            event.preventDefault();
            return;
        }

        // Validate mother name
        if (motherName.value.trim() === '') {
            alert('Please enter mother name');
            event.preventDefault();
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Please enter a valid email address');
            event.preventDefault();
            return;
        }

        // Validate mobile number
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobileNumber.value)) {
            alert('Please enter a valid 10-digit mobile number');
            event.preventDefault();
            return;
        }

        // Validate serving in IAF selection
        if (!( servingInIAFYes.checked || servingInIAFNo.checked)) {
            alert('Please select whether you are serving in IAF');
            event.preventDefault();
            return;
        }

        saveButton.addEventListener('click', function (event) {
           
            window.location.href = 'secound.html'; 
        });
    });
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  currentIndex = index;
  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

setInterval(nextSlide, 3000);  

// validation.js

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Perform validation
    let thumbImpression = document.getElementsByName('thumbImpression')[0].files[0];
    let passportPhotograph = document.getElementsByName('passportPhotograph')[0].files[0];
    let otherImage = document.getElementsByName('otherImage')[0].files[0];

    // Check if all files are selected
    if (!thumbImpression || !passportPhotograph || !otherImage) {
        alert('Please select all images');
        return;
    }

    // Check file types and sizes
    const allowedTypes = ['image/jpeg', 'image/jpg'];
    const maxSizeKB = 50;

    if (!allowedTypes.includes(thumbImpression.type) || !allowedTypes.includes(passportPhotograph.type) || !allowedTypes.includes(otherImage.type)) {
        alert('File type not allowed. Please select JPEG images only.');
        return;
    }

    if (thumbImpression.size / 1024 > maxSizeKB || passportPhotograph.size / 1024 > maxSizeKB || otherImage.size / 1024 > maxSizeKB) {
        alert('File size exceeds the limit. Please select images with size less than 50KB.');
        return;
    }

    // If all validation passes, submit the form
    this.submit();
});
