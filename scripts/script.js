// Get the form element
var form = document.getElementById('resume-form');
// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    if (form.checkValidity()) {
        // Call function to generate resume
        generateEditableResume();
    }
    else {
        alert('Please fill all the required fields!');
    }
});
// Function to generate the editable resume
function generateEditableResume() {
    // Get values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var gradYear = document.getElementById('gradYear').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate the HTML for the editable resume
    var resumeContent = "\n        <div contenteditable=\"true\"><h3>".concat(name, "</h3></div>\n        <div contenteditable=\"true\"><p>Email: ").concat(email, "</p></div>\n\n        <h4>Education</h4>\n        <div contenteditable=\"true\"><p>").concat(degree, ", ").concat(institution, " (").concat(gradYear, ")</p></div>\n\n        <h4>Work Experience</h4>\n        <div contenteditable=\"true\"><p>").concat(role, ", ").concat(company, "</p></div>\n\n        <h4>Skills</h4>\n        <ul contenteditable=\"true\">").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    ");
    // Set the generated resume content in the resume-content div
    document.getElementById('resume-content').innerHTML = resumeContent;
    // Log the current state of the resume for debugging
    console.log('Generated Resume:', document.getElementById('resume-content').innerHTML);
    // Ensure content is editable without refreshing
    var editableFields = document.querySelectorAll('#resume-content div, #resume-content ul');
    editableFields.forEach(function (field) {
        field.addEventListener('input', function () {
            console.log('Content changed:', field.innerHTML);
        });
    });
}
