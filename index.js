
$(function () {
    $('form').submit(event => {
        event.preventDefault();
        $('ul').append('<li>' + '<span class="shopping-item">' + $('input:text').val() +
            '</span><div class="shopping-item-controls"><button class="shopping-item-toggle">\
            <span class="button-label">check</span></button>' + '<button class="shopping-item-delete">\
            <span class="button-label">delete</span></button>' + '</li>');
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
    
  
    
});


