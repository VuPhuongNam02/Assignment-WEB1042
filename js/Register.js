var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var form = $('#form')
var mssv = $('#msv')
var fullName = $('#name')
var email = $('#email')
var genders = $$('input[name="gender"]')
var interests = $$('input[name="checkbox"]')
var nationality = $('#nationality')
var note = $('#note')

form.addEventListener('submit', e => {
    e.preventDefault()
    validator()
})

function validator() {
    //Không để trống: mã, họ tên và email
    if (mssv.value === '') {
        errorMessage(mssv, 'Không để trống mã')
    } else {
        successMessage(mssv)
    }

    //Không để trống họ tên 
    if (fullName.value === '') {
        errorMessage(fullName, 'Không để trống họ tên ')
    } else {
        successMessage(fullName)
    }

    //Không để trống email 
    if (email.value === '') {
        errorMessage(email, 'Không để trống email ')
    } else {
        successMessage(email)
    }

    //Phải chọn giới tính
    if (!genders[0].checked && !genders[1].checked) {
        $('.gender').innerText = 'Phải chọn giới tính'
        $('#frames').style.background = 'yellow'
    } else {
        $('.gender').innerText = ''
        $('#frames').style.background = 'none'
        $('#frames').style.borderColor = 'green'
    }

    //Phải chọn sở thích 
    var check = 0
    for (var i = 0; i < interests.length; i++) {
        if (interests[i].checked == true) {
            check++
        }
    }
    if (check == 0) {
        $('.hobby').innerText = 'Phải chọn sở thích'
        $('#frames2').style.background = 'yellow'
    } else {
        $('.hobby').innerText = ''
        $('#frames2').style.background = 'none'
        $('#frames2').style.borderColor = 'green'
    }

    //Phải chọn quốc tịch
    if (nationality.value == 0) {
        $('.nationality').innerText = 'Phải chọn quốc tịch'
        $('select').style.background = 'yellow'
    } else {
        $('.nationality').innerText = ''
        $('select').style.background = 'none'
        $('select').style.borderColor = 'green'
    }

    //Ít hơn 200 ký tự: ghi chú
    if (note.value.length > 200) {
        errorMessage(note, 'Ít hơn 200 ký tự')
    } else {
        successMessage(note)
    }
}

//set lỗi
function errorMessage(input, message) {
    var formGroup = input.parentElement
    var span = formGroup.querySelector('span')
    formGroup.className = 'form-group error'
    span.innerText = message
}

//set thành công
function successMessage(input) {
    var formGroup = input.parentElement
    formGroup.className = 'form-group success'
}