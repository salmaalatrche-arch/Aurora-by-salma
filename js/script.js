lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true,
    'fitImagesInViewport': true
});

//  JavaScript 
document.addEventListener('DOMContentLoaded', function() {
    console.log('AURORA website loaded successfully!');
    
    //  Buy Now
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const cardBody = this.closest('.card-body');
            if(cardBody){
                const productName = cardBody.querySelector('.card-title')?.textContent || "Unknown product";
                alert(`Added ${productName} to your cart!`);
            }
        });
    });
});