const delay = 3000; // Adjust the delay as needed

    $(document).ready(function () {
        $('.loader').fadeIn();

        setTimeout(function () {
            // Redirect to the next page (replace 'nextPage.html' with your actual page URL)
            window.location.href = 'login.html';
        }, delay);
    });



