// Get elements
const hostBtn = document.getElementById('host-btn');
const connectBtn = document.getElementById('connect-btn');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.getElementById('close-modal');
const modalForm = document.getElementById('modal-form');
const submitBtn = document.getElementById('submit-btn');

// Show Host Modal
hostBtn.onclick = () => {
    modalTitle.textContent = 'Host Setup';
    submitBtn.textContent = 'Start Hosting';
    modal.style.display = 'flex';
};

// Show Connect Modal
connectBtn.onclick = () => {
    modalTitle.textContent = 'Connect Setup';
    submitBtn.textContent = 'Connect';
    modal.style.display = 'flex';
};

// Close Modal
closeModal.onclick = () => {
    modal.style.display = 'none';
};

// Close Modal on Outside Click
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Handle Form Submission
modalForm.onsubmit = (event) => {
    event.preventDefault();
    const ipAddress = document.getElementById('ip-address').value;
    const port = document.getElementById('port').value;
    const password = document.getElementById('password').value;

    if (modalTitle.textContent === 'Host Setup') {
        alert(`Hosting on IP: ${ipAddress}, Port: ${port} with password.`);
    } else {
        alert(`Connecting to IP: ${ipAddress}, Port: ${port} using password.`);
    }

    modal.style.display = 'none';
};
