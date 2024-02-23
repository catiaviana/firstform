document.querySelectorAll('input[name="gender"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.value === 'other' && this.checked) {
            document.getElementById('otherText').style.display = 'inline';
        } else {
            document.getElementById('otherText').style.display = 'none';
        }
    });
});

