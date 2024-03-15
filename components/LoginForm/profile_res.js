// upload_pdf_scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const pdfUploadForm = document.getElementById('pdf-upload-form');
    const pdfFileInput = document.getElementById('pdf-file');

    pdfUploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = pdfFileInput.files[0];
        if (file && file.type === 'application/pdf') {
            // File is a PDF, you can handle the upload process here
            console.log('File uploaded:', file.name);
        } else {
            alert('Please select a PDF file.');
        }
    });
});
