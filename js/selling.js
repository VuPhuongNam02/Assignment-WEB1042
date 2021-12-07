var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var checkAll = $('#checkAll')
var checkBoxes = $$('.check')
var inputNumbers = $$('input[type="number"]')
var filter = $('#filter')
var rows = $$('tbody tr')
var totally = $('#tongtien')

//check all
checkAll.onchange = function() {
    checkBoxes.forEach(checkBox => {
        if (checkAll.checked == true) {
            checkBox.checked = true
        } else {
            checkBox.checked = false
        }
    })

    //undisabled
    inputNumbers.forEach(input => {
        input.disabled = !checkAll.checked ? true : false
    })

}

//check từng ô
for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].onchange = function() {
        for (var i = 0; i < inputNumbers.length; i++)
            inputNumbers[i].disabled = !checkBoxes[i].checked ? true : false
    }
}

//lọc sản phẩm theo giá
filter.onchange = function() {
    rows.forEach(row => {
        var cell = row.children[2].innerHTML

        if (filter.value == 0) {
            row.style.display = Number(cell) ? 'table-row' : 'none'
        } else if (filter.value == 1) {
            row.style.display = Number(cell) < 100 ? 'table-row' : 'none'
        } else if (filter.value == 2) {
            row.style.display = Number(cell) >= 100 && Number(cell) <= 500 ? 'table-row' : 'none'
        } else {
            row.style.display = Number(cell) > 500 ? 'table-row' : 'none'
        }
    })
}

//tính thành tiền
rows.forEach(row => {
    var input = row.children[3]
    var price = row.children[2].innerHTML
    var showIntoMoney = row.lastElementChild

    input.onchange = function(callback) {
        var quantity = callback.target.value
        showIntoMoney.innerHTML = price * quantity

        //show tổng tiền
        var sum = 0
        for (var i = 0; i < rows.length; i++) {
            var showTotal = rows[i].lastElementChild.innerHTML
            sum = sum + Number(showTotal)
            totally.innerHTML = sum
        }
    }
})