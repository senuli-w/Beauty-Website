document.addEventListener("DOMContentLoaded", function() {
    fetch('reviews.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const reviews = xml.querySelectorAll('review');

        reviews.forEach(review => {
            const profile = review.querySelector('profile').textContent;
            const name = review.querySelector('name').textContent;
            const rating = parseInt(review.querySelector('rating').textContent);
            const description = review.querySelector('description').textContent;

            addReview(profile, name, rating, description);
        });
    })
    .catch(error => console.error('Error fetching XML:', error));
});

function addReview(profile, name, rating, description) {
    const section = document.getElementById('section01');

    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    const img = document.createElement('img');
    img.src = profile;
    img.width = 90;
    img.height = 100;
    img.alt = 'person';

    const namePara = document.createElement('p');
    namePara.classList.add('name');
    namePara.textContent = name;

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating');
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('p');
        star.classList.add('heart');
        if (i < rating) {
            star.textContent = '\u2665'; // Filled star
        } else {
            star.textContent = '\u2661'; // Empty star
        }
        ratingDiv.appendChild(star);
    }

    const descriptionPara = document.createElement('p');
    descriptionPara.classList.add('para');
    descriptionPara.textContent = description;

    reviewDiv.appendChild(img);
    reviewDiv.appendChild(namePara);
    reviewDiv.appendChild(ratingDiv);
    reviewDiv.appendChild(descriptionPara);

    section.appendChild(reviewDiv);
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunctionText() {
  document.getElementById("myDropdownText").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


let form = document.getElementById("registration-form");

function validateForm() {
  var fullname = document.getElementById('fullname').value.trim();
  var email = document.getElementById('email').value.trim();

  // Check if fullname and email are not empty
  if (fullname === '' || email === '') {
      alert('Please fill in all required fields.');
      return false;
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  // If all validations pass, the form will be submitted
  return true;
}
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  if (validateForm()) {
      // If form is valid, submit the form (you can add AJAX or other logic here)
      form.submit();
      showSuccessMessage();
  }
});
function showSuccessMessage() {
  // Get the fullname from the form input
  var fullname = document.getElementById('fullname').value.trim();

  // Display the customized success message
  alert('Dear ' + fullname + ', you have successfully subscribed for a personalized newsletter.');
}

let form2 = document.getElementById("feedback-form");

function validateForm2(){
  var feedbackname = document.getElementById('feedback-name').value.trim();
  var feedbackmail = document.getElementById('feedback-mail').value.trim();
  var description = document.getElementById('description').value.trim();

  if(feedbackname ==='' || feedbackmail === '' || description === ''){
    alert('Please fill in all required fields.');
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(feedbackmail)) {
      alert('Please enter a valid email address.');
      return false;
  }

  return true;
}

form2.addEventListener("submit", function(event){
  event.preventDefault();

  if(validateForm2()){
    form2.submit();
    alert('Thankyou for your feedback');
  }
})


document.addEventListener("DOMContentLoaded", function() {
  const backgroundColorDropdown = document.getElementById("myDropdown");

  // Event listener for background color change
  backgroundColorDropdown.addEventListener("click", function(event) {
    const selectedColor = event.target.id;
    if (selectedColor === "black") {
      document.body.style.backgroundColor = "black";
      document.querySelector('.container').style.backgroundColor = "black"; 
    } else if (selectedColor === "white") {
      document.body.style.backgroundColor = "white";
      document.querySelector('.container').style.backgroundColor = "white"; 
    } else if (selectedColor === "gold") {
      document.body.style.backgroundColor = "gold";
      document.querySelector('.container').style.backgroundColor = "gold"; 
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const textColorDropdown = document.getElementById("myDropdownText");

  // Event listener for text color change
  textColorDropdown.addEventListener("click", function(event) {
      const selectedColor = event.target.id;
      if (selectedColor === "Tblack") {
          updateTextColor("black");
      } else if (selectedColor === "Twhite") {
          updateTextColor("white");
      } else if (selectedColor === "Tgold") {
          updateTextColor("gold");
      }
  });

  function updateTextColor(color) {
      const reviewTextElements = document.querySelectorAll('.para');
      const reviewTextName = document.querySelectorAll('.name');
      const boxText = document.querySelectorAll('.boxpara'); 
      const boxLabel = document.querySelectorAll('.form-label');  // Select all <p> elements with class 'para'

      // Loop through each review text element and update its color
      reviewTextElements.forEach(element => {
          element.style.color = color;
      });

      reviewTextName.forEach(element =>{
        element.style.color = color;
      })

      boxText.forEach(element => {
        element.style.color = color;
      })

      boxLabel.forEach(element =>{
        element.style.color = color;
      })
  }
});
