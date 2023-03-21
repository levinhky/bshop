$bankCopyBtns = $(".box-cart-success-container.banking-info .banking-method .manual-banking table tr td .bank-copy");
$bankCopyContents = $(".box-cart-success-container.banking-info .banking-method .manual-banking table tr td .bank-copy-content");

$bankCopyBtns.each(function(index) {
    $(this).on('click', function() {
        console.log($(this).prev().find('.bank-copy-content'));
    })
})