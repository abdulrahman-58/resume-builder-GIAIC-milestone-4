// Get the form element
const form = document.getElementById('resume-form') as HTMLFormElement;

// Event listener for form submission
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // Prevent form submission
    if (form.checkValidity()) {
        // Call function to generate resume
        generateEditableResume();
    } else {
        alert('Please fill all the required fields!');
    }
});

// Function to generate the editable resume
function generateEditableResume() {
    // Get values from the form fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Generate the HTML for the editable resume
    const resumeContent = `
        <div contenteditable="true"><h3>${name}</h3></div>
        <div contenteditable="true"><p>Email: ${email}</p></div>

        <h4>Education</h4>
        <div contenteditable="true"><p>${degree}, ${institution} (${gradYear})</p></div>

        <h4>Work Experience</h4>
        <div contenteditable="true"><p>${role}, ${company}</p></div>

        <h4>Skills</h4>
        <ul contenteditable="true">${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;

    // Set the generated resume content in the resume-content div
    document.getElementById('resume-content')!.innerHTML = resumeContent;

    // Log the current state of the resume for debugging
    console.log('Generated Resume:', document.getElementById('resume-content')!.innerHTML);

    // Ensure content is editable without refreshing
    const editableFields = document.querySelectorAll('#resume-content div, #resume-content ul');
    editableFields.forEach(field => {
        field.addEventListener('input', () => {
            console.log('Content changed:', field.innerHTML);
        });
    });
}
