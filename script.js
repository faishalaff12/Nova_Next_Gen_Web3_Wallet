const waitlistForm = document.getElementById('waitlist-form');
const submitBtn = waitlistForm.querySelector('button[type="submit"]');

waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = waitlistForm.querySelector('input[type="email"]').value;

    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Securing spot...';
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(`Awesome! ${emailInput} has been added to the Nova waitlist.\n\nCheck your inbox for the early access code.`);
        
        waitlistForm.reset();
        submitBtn.innerText = 'Spot Secured! 🎉';
        
        setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 3000);

    }, 1500);
});

const connectWalletBtn = document.getElementById('connect-wallet-btn');

connectWalletBtn.addEventListener('click', () => {
    if (typeof window.ethereum !== 'undefined') {
        alert('MetaMask is installed! (In a real app, this would trigger the wallet popup)');
    } else {
        alert('🦊 MetaMask extension not detected!\n\nPlease install a Web3 wallet to connect to Nova.');
    }
});