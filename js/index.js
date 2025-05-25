var addBtn = document.querySelector('#addBtn');
var siteNameInput = document.querySelector('#siteName');
var siteUrlInput = document.querySelector('#siteUrl')
var updateBtn = document.querySelector('#updateBtn')
var fixedBox = document.querySelector('#fixedBox')
var closeBtn = document.querySelector('.close-icon')


var bookmarkList = []

if (localStorage.getItem('bookmarks') != null) {
    bookmarkList = JSON.parse(localStorage.getItem('bookmarks'))
    displayData(bookmarkList)
}

addBtn.addEventListener('click', function addBookmark() {
    var bookmarkObj = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    }

    if (validation(siteNameInput.id, siteNameInput.value) == true && validation(siteUrlInput.id, siteUrlInput.value) == true && preventDup(bookmarkList, bookmarkObj)) {

        bookmarkList.push(bookmarkObj)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkList))
        displayData(bookmarkList)
        clear()
    }
    else {
        fixedBox.classList.replace('d-none', 'd-flex')
    }
})

closeBtn.addEventListener('click', function () {
    fixedBox.classList.replace('d-flex', 'd-none')
})

function displayData(arr) {
    var cartoona = '';
    for (var i = 0; i < arr.length; i++) {
        cartoona += `
        <tr>
            <td>${i + 1}</td>
            <td class="text-capitalize">${arr[i].siteName}</td>
            <td><button class="btn btn-primary m-1 p-2" onclick="updateBookmark(${i})"><i class="fa fa-edit pe-2"></i>Update</button></td>
            <td><a class="btn btn-visit m-1 p-2" href="${arr[i].siteUrl.startsWith('http') ? arr[i].siteUrl : 'http://' + arr[i].siteUrl}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
            <td><button class="btn btn-delete m-1 p-2" onclick="deleteBookmark(${i})"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
        </tr>`;
    }
    document.getElementById('bookmark-content').innerHTML = cartoona;
}

var updatedIndedx;
function updateBookmark(index) {
    updatedIndedx = index
    siteNameInput.value = bookmarkList[index].siteName
    siteUrlInput.value = bookmarkList[index].siteUrl;
    addBtn.classList.add('d-none')
    updateBtn.classList.remove('d-none')

}

updateBtn.addEventListener('click', function () {
    bookmarkList[updatedIndedx].siteName = siteNameInput.value;
    bookmarkList[updatedIndedx].siteUrl = siteUrlInput.value;
    displayData(bookmarkList)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList))
    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
    clear();
})

function deleteBookmark(index) {
    bookmarkList.splice(index, 1)
    displayData(bookmarkList)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList) == true)
    siteNameInput.value = ''
    siteUrlInput.value = ''
}

function clear() {
    siteNameInput.value = ''
    siteUrlInput.value = ''
    siteNameInput.classList.remove('is-valid')
    siteUrlInput.classList.remove('is-valid')
}

//*======= VALIDATION =======*//
var selectedInput = document.querySelectorAll('.selectedInput');

for (var i = 0; i < selectedInput.length; i++) {
    selectedInput[i].addEventListener(('input'), function (e) {
        var inputId = e.target.id
        var inputVal = e.target.value
        validation(inputId, inputVal)
    })
}

function validation(id, value) {
    var regex = {
        siteName: /^\w{3,}(\s+\w+)*$/,
        siteUrl: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,
    }

    var element = document.getElementById(id)
    if (regex[id].test(value) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        return true;
    }

    else {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        return false;
    }
}

function preventDup(arr, newObj) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].siteName == newObj.siteName || arr[i].siteUrl == newObj.siteUrl) {
            return false;
        }
    return true
}

//! ========== The End ==========//


