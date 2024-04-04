// document.addEventListener('DOMContentLoaded', (event) => {
//     const editProfileBtn = document.getElementById('edit-profile-btn');
//     const updateProfileBtn = document.getElementById('update-profile-btn');
//     const editOverlay = document.getElementById('edit-overlay');
//     const profileName = document.querySelector('.profile-info h2');
//     const profileBio = document.querySelector('.profile-info .bio');
//     const editNameInput = document.getElementById('edit-name');
//     const editBioTextarea = document.getElementById('edit-bio');

//     // Show the edit profile overlay
//     editProfileBtn.addEventListener('click', () => {
//         editOverlay.style.display = 'flex';
//         editNameInput.value = profileName.innerHTML; // Vulnerable line
//         editBioTextarea.value = profileBio.innerHTML; // Vulnerable line
//     });

//     // Update profile name and bio with unsanitized input (VULNERABILITY HERE)
//     updateProfileBtn.addEventListener('click', () => {
//         profileName.innerHTML = editNameInput.value; // Vulnerable line
//         profileBio.innerHTML = editBioTextarea.value; // Vulnerable line
//         editOverlay.style.display = 'none';
//     });
// });


document.addEventListener('DOMContentLoaded', (event) => {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const updateProfileBtn = document.getElementById('update-profile-btn');
    const editOverlay = document.getElementById('edit-overlay');
    const profileName = document.querySelector('.profile-info h2');
    const profileBio = document.querySelector('.profile-info .bio');

    // Show the edit profile overlay with current name and bio
    editProfileBtn.addEventListener('click', () => {
        document.getElementById('edit-name').value = profileName.textContent;
        document.getElementById('edit-bio').value = profileBio.textContent;
        editOverlay.style.display = 'flex';
    });

    // Directly updates innerHTML with user content, creating a vulnerability
    updateProfileBtn.addEventListener('click', () => {
        // UNSAFE: Directly set innerHTML to user-provided values
        profileName.innerHTML = document.getElementById('edit-name').value;
        profileBio.innerHTML = document.getElementById('edit-bio').value;
        editOverlay.style.display = 'none';
    });
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Unsafe function to get query parameters and inject them into the DOM
//     function getQueryParams() {
//         const params = new URLSearchParams(window.location.search);
//         const name = params.get('name');
//         const bio = params.get('bio');

//         if (name) {
//             document.querySelector('.profile-info h2').innerHTML = name; // Vulnerable
//         }

//         if (bio) {
//             document.querySelector('.profile-info .bio').innerHTML = bio; // Vulnerable
//         }
//     }

//     // Call the unsafe function to update the name and bio from URL parameters
//     getQueryParams();

//     // Rest of the code for edit profile functionality...
// });





// document.getElementById('edit-profile-btn').addEventListener('click', function() {
//     // Show the edit form
//     document.getElementById('edit-form').style.display = 'block';
// });

// document.getElementById('update-profile-btn').addEventListener('click', function() {
//     // Vulnerably update profile name and bio from input values
//     var newName = document.getElementById('new-name').value;
//     var newBio = document.getElementById('new-bio').value;

//     document.getElementById('profile-name').innerHTML = newName; // XSS vulnerability here
//     document.getElementById('profile-bio').innerHTML = newBio;   // XSS vulnerability here

//     // Hide the edit form
//     document.getElementById('edit-form').style.display = 'none';
// });

