/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function disableUnusedFields() {

    var newCardElements = [
        document.getElementById("1stpay-card-number"), 
        document.getElementById("1stpay-card-expiry"), 
        document.getElementById("1stpay-card-cvc"),
        document.getElementById("1stpay-save-card")
    ];
    
    var existingCardMenu = document.getElementById("1stpay-selected-card-id");
    
    var existingCardElements = [
        document.getElementById("1stpay-card-cvc-saved"),
        existingCardMenu
    ];
    
    
    if (document.getElementById("1stpay-use-existing-card-id").checked === true) {
        newCardElements.forEach(function(element) {
            element.disabled = true;
        });
        
        existingCardElements.forEach(function(element) {
            element.disabled = false;
        });
        existingCardMenu.style.color = 'black';
    } 
    else {
        newCardElements.forEach(function(element) {
            element.disabled = false;
        });
        
        existingCardElements.forEach(function(element) {
            element.disabled = true;
        });
        existingCardMenu.style.color = 'gray';
    }
}