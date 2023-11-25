document.addEventListener("DOMContentLoaded", function() {
    const se1Form = document.getElementById("se1Form");

    se1Form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Your form validation logic here
    //   const isValid = true; // Replace with your validation logic

    //   if (isValid) {
        // Form is valid, display a confirmation message
        alert("Referral Form submitted successfully!");
        window.location.href = "homepage.html"
        // You can also submit the form to a server using AJAX here if needed
    //   }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const redirectButton = document.getElementById("homepage");
  
    redirectButton.addEventListener("click", function() {
      // Redirect to another HTML page
      window.location.href = "homepage.html";
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const printButton = document.getElementById("printButton");

    printButton.addEventListener("click", function() {
      // Print the current page
      window.print();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const redirectButton = document.getElementById("toogleButton");
  
    redirectButton.addEventListener("click", function() {
      // Redirect to another HTML page
      window.location.href = "indexAnotherLanguage.html";
    });
  });
  