$ (document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImg = $('#endereco-img').val();
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src = "${enderecoNovaImg}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoNovaImg}" target="_blank" title ="ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-img').val('');
    }) 

})