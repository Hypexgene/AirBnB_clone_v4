$(document).ready(function() {
    $('input[type="checkbox"]').change(function() {
        var checkedAmenities = [];
        $('input[type="checkbox"]').each(function() {
            if ($(this).is(':checked')) {
                var amenityId = $(this).data('id');
                checkedAmenities.push(amenityId);
            }
        });
        updateDisplayedAmenities(checkedAmenities);
    });

    function updateDisplayedAmenities(checkedAmenities) {
        $('#selected-amenities').text(checkedAmenities.join(', '));
    }
});

