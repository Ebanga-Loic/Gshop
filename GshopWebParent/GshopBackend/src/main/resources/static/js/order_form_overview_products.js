var fieldProductCost;
var fieldSubtotal;
var fieldShippingCost;
var fieldTax;
var fieldTotal;

$(document).ready(function() {
    fieldProductCost = $("#productCost");
    fieldSubtotal = $("#subtotal");
    fieldShippingCost = $("#shippingCost");
    fieldTax = $("#tax");
    fieldTotal = $("#total");

    formatOrderAmounts();
    formatProductAmounts();

    $("#productList").on("change", ".quantity-input", function(e) {
        updateSubtotalWhenQuantityChanged($(this));
        updateOrderAmounts();
    });

    $("#productList").on("change", ".price-input", function(e) {
        updateSubtotalWhenPriceChanged($(this));
        updateOrderAmounts();
    });

    $("#productList").on("change", ".cost-input", function(e) {
        updateOrderAmounts();
    });

    $("#productList").on("change", ".ship-input", function(e) {
        updateOrderAmounts();
    });
});

function updateOrderAmounts() {
    var totalCost = 0.0;

    $(".cost-input").each(function(e) {
        var costInputField = $(this);
        var rowNumber = costInputField.attr("rowNumber");
        var quantityValue = $("#quantity" + rowNumber).val();

        var productCost = getNumberValueRemovedThousandSeparator(costInputField); 
        totalCost += productCost * parseInt(quantityValue); 
    });

    setAndFormatNumberForField("productCost", totalCost);

    var orderSubtotal = 0.0;

    $(".subtotal-output").each(function(e) {
        var productSubtotal = getNumberValueRemovedThousandSeparator($(this));
        orderSubtotal += productSubtotal;
    });

    setAndFormatNumberForField("subtotal", orderSubtotal);

    var shippingCost = 0.0;

    $(".ship-input").each(function(e) {
        var productShip = getNumberValueRemovedThousandSeparator($(this));
        shippingCost += productShip;
    });

    setAndFormatNumberForField("shippingCost", shippingCost);

    var tax = getNumberValueRemovedThousandSeparator(fieldTax);
    var orderTotal = orderSubtotal + tax + shippingCost;
    setAndFormatNumberForField("total", orderTotal);
}

function setAndFormatNumberForField(fieldId, fieldValue) {
    var formattedValue = $.number(fieldValue, 2, ',', ''); // Sans séparateur de milliers
    $("#" + fieldId).val(formattedValue);
}

function getNumberValueRemovedThousandSeparator(fieldRef) {
    var fieldValue = fieldRef.val().replace(/\s/g, '').replace(",", ".");
    return parseFloat(fieldValue);
}

function updateSubtotalWhenPriceChanged(input) {
    var priceValue = getNumberValueRemovedThousandSeparator(input);
    var rowNumber = input.attr("rowNumber");

    var quantityField = $("#quantity" + rowNumber);
    var quantityValue = quantityField.val();
    var newSubtotal = parseFloat(quantityValue) * priceValue;

    setAndFormatNumberForField("subtotal" + rowNumber, newSubtotal);
}

function updateSubtotalWhenQuantityChanged(input) {
    var quantityValue = input.val();
    var rowNumber = input.attr("rowNumber");
    var priceValue = getNumberValueRemovedThousandSeparator($("#price" + rowNumber));
    var newSubtotal = parseFloat(quantityValue) * priceValue;

    setAndFormatNumberForField("subtotal" + rowNumber, newSubtotal);
}

function formatProductAmounts() {
    $(".cost-input").each(function(e) {
        formatNumberForField($(this));
    });

    $(".price-input").each(function(e) {
        formatNumberForField($(this));
    });

    $(".subtotal-output").each(function(e) {
        formatNumberForField($(this));
    });

    $(".ship-input").each(function(e) {
        formatNumberForField($(this));
    });
}

function formatOrderAmounts() {
    formatNumberForField(fieldProductCost);
    formatNumberForField(fieldSubtotal);
    formatNumberForField(fieldShippingCost);
    formatNumberForField(fieldTax);
    formatNumberForField(fieldTotal);
}

function formatNumberForField(fieldRef) {
    fieldRef.val($.number(fieldRef.val(), 2, ',', ''));
}

function processFormBeforeSubmit() {
    setCountryName();

    removeThousandSeparatorForField(fieldProductCost);
    removeThousandSeparatorForField(fieldSubtotal);
    removeThousandSeparatorForField(fieldShippingCost);
    removeThousandSeparatorForField(fieldTax);
    removeThousandSeparatorForField(fieldTotal);

    $(".cost-input").each(function(e) {
        removeThousandSeparatorForField($(this));
    });

    $(".price-input").each(function(e) {
        removeThousandSeparatorForField($(this));
    });

    $(".subtotal-output").each(function(e) {
        removeThousandSeparatorForField($(this));
    });

    $(".ship-input").each(function(e) {
        removeThousandSeparatorForField($(this));
    });

    return true;
}

function removeThousandSeparatorForField(fieldRef) {
    var cleanedValue = fieldRef.val().replace(/\s/g, '').replace(",", ".");
    fieldRef.val(cleanedValue);
}

function setCountryName() {
    var selectedCountry = $("#country option:selected");
    var countryName = selectedCountry.text();
    $("#countryName").val(countryName);
}
