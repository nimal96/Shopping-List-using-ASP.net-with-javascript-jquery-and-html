var currentList = {};

function createShoppingList() {

    currentList.name = $("#shoppingListName").val();

    currentList.items = new Array();

    showShoppingList();

}

function showShoppingList() {

    $("#shoppingListTitle").html(currentList.name);

    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();



}


function addItem() {

    var newItem = {};
    newItem.name = $("#newItemName").val();
    currentList.items.push(newItem);
    console.info(currentList);
    drawitems();
}


function drawitems() {

    var $list = $("#shoppingListItems").empty();


    for (var i = 0; currentList.items.length; i++) {

        var currentItem = currentList.items[i];
        var $li = $("<li>").html(currentItem.name).attr("id", "item_" + i);
        var $deleteBtn = $("<button onclick='deleteItem("+i+")'>D</button>").appendTo($li);
        var $checkBtn = $("<button onclick='checkItem(" + i +")'>C</button>").appendTo($li);

        $li.appendTo($list);
    }
}
function deleteItem(index) {
    currentList.items.splice(index, 1);
    drawitems();

}
function checkItem(index) {

    if ($("#item_" + index).hasClass("checked")) {

        $("#item_" + index).removeClass("checked");
    }
    else {
        $("#item_" + index).addClass("checked");
    }
}
function getShoppingListById() {

    console.info(id);
    currentList.name = "Mock Shopping List";
    currentList.items = [
        { name: "Milk" },
        { name: "Cornflakes" },
        { name: "Strawberries" }
    ];
    showShoppingList();
    drawitems();
}

$(document).ready(function () {

    console.info("ready");

    $("#shoppingListName").focus();
    $("#shoppingListName").keyup(function (event) {

        if (event.keyCode == 13) {

            createShoppingList();
        }
    });


    var pageUrl = window.location.href;

    var idIndex = pageUrl.indexOf("?id=");
    if (idIndex != -1) {

        getShoppingListById(pageUrl.substring(idIndex + 4));

    }

});