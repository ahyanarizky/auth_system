var home = $('#home-menu')
var reg = $('#reg-menu')
var login = $('#login-menu')

function editPointerHome() {
    home.className = 'active item'
    reg.className = 'item'
    login.className = 'item'
}

function editPointerReg() {
    home.className = 'item'
    reg.className = 'active item'
    login.className = 'item'
}

function editPointerLogin() {
    home.className = 'item'
    reg.className = 'item'
    login.className = 'active item'
}

// $(document).ready(function() {
//     $('#home-menu').on("onclick", editPointerHome)
//     $('#reg-menu').on('onclick', editPointerReg)
//     $('#login-menu').on('onclick', editPointerLogin)
//
// })
