// links_scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const linksForm = document.getElementById('links-form');
    const linksContainer = document.getElementById('links-container');

    // Function to add new link input and button
    function addLinkInput() {
        const linkInput = document.createElement('div');
        linkInput.classList.add('link-input');
        linkInput.innerHTML = `
            <label for="link">Link:</label>
            <input type="text" name="link[]"><br><br>
            <button type="button" class="add-btn">Add</button>
        `;
        linksContainer.appendChild(linkInput);

        const addBtns = document.querySelectorAll('.add-btn');
        addBtns.forEach(btn => {
            btn.addEventListener('click', addLinkInput);
        });
    }

    // Add event listener for the initial "Add" button
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', addLinkInput);

    // Event listener for form submission
    linksForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission, e.g., collect and process the links
        const links = document.querySelectorAll('input[name="link[]"]');
        const linkValues = Array.from(links).map(link => link.value);
        console.log('Links:', linkValues);
    });
});
