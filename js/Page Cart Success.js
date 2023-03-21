$bankCopyBtns = $(
  ".box-cart-success-container.banking-info .banking-method .manual-banking table tr td .bank-copy"
);
$bankCopyContents = $(
  ".box-cart-success-container.banking-info .banking-method .manual-banking table tr td .bank-copy-content"
);

$bankCopyBtns.each(function (index) {
  $(this).on("click", function () {
    $value = $(this).closest("td").prev().find("p").text().replace(/\s+/g, "");
    copyToClipboard($value);
    $(this).parent().find("#copiedToolTip").addClass("show");
    setTimeout(() =>   $(this).parent().find("#copiedToolTip").removeClass("show"), 1000);
  });
});

function copyToClipboard(text) {
  var sampleTextarea = document.createElement("textarea");
  document.body.appendChild(sampleTextarea);
  sampleTextarea.value = text;
  sampleTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(sampleTextarea);
}
