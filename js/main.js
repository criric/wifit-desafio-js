function horizontalMenu(){
    $('.btn-group-vertical').css('flex-direction', 'row');
    $('.btn-group-vertical').css('gap', '5px');
    $('.btn-group-vertical .btn').css('border-radius', '4px');
    $('.btn-group-vertical .btn').css('width', 'max-content');
}

function formatHeader(){
    $('.jumbotron').css('text-align', 'right');
    $('.jumbotron').css('background-color', '#6c757d');
    $('.jumbotron').css('color', 'white');
    $('.jumbotron a').css('background-color', 'var(--green)'); 
    $('.jumbotron a').css('border-color', 'var(--green)'); 
    $('.jumbotron .btn').css('box-shadow', 'none'); 
}

function reorderCards(){
    $.each($('.row .col-lg-3'), function(index){
        $(this).attr('id', `card-${index}`);
    })

    $('#card-0 a').css('background-color', 'var(--green)');
    $('#card-0 a').css('border-color', 'var(--green)');
    $('#card-0 .btn').css('box-shadow', 'none');

    $('#card-0').insertAfter('#card-3');
    $('#card-2').insertAfter('#card-0');
    $('#card-1').insertAfter('#card-2');
}

function changeList(){
    $('.list-group .active').removeClass('active');
    $('.list-group').append(`<li class="list-group-item active">Quarto item</li> 
                            <li class="list-group-item">Quinto item</li>`);
}

horizontalMenu()
formatHeader()
changeList()
reorderCards()