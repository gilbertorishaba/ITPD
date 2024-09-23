document.addEventListener("DOMContentLoaded", function() {
    const stripe = Stripe('your-publishable-key-here');
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount('#card-element');

    const form = document.getElementById('payment-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const {token, error} = await stripe.createToken(cardElement);

        if (error) {
            errorMessage.textContent = error.message;
        } else {
            // Send the token to your server to process the payment
            // Example: fetch('/charge', { method: 'POST', body: JSON.stringify({token: token.id}) })
        }
    });
});
