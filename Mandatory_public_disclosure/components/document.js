document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to all "Show More" buttons
    var showMoreButtons = document.querySelectorAll('.show-more');
    showMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Hide all PDF containers
            var pdfContainers = document.querySelectorAll('.pdf-container');
            pdfContainers.forEach(function(container) {
                container.style.display = 'none';
            });

            // Show PDF container associated with this button
            var pdfContainerId = this.parentElement.nextElementSibling.id;
            var pdfContainer = document.getElementById(pdfContainerId);
            pdfContainer.style.display = 'block';
        });
    });

    // Add event listeners to all "Go Back" buttons
    var backButton = document.querySelectorAll('.back-button');
    backButton.forEach(function(button) {
        button.addEventListener('click', function() {
            // Hide the PDF container
            this.parentElement.style.display = 'none';
        });
    });
});