var SiteName = document.getElementById("SiteName")
var SiteUR = document.getElementById("SiteUR")
var submitButton = document.getElementById("submitButton");
var Array = []

if (localStorage.getItem("Array") != null) {
    Array = JSON.parse(localStorage.getItem("Array"))
    Display()
}




function Add(params) {
    var inputs = {
        SiteName: SiteName.value,
        URl: SiteUR.value

    }



    Array.push(inputs)
    localStorage.setItem("Array", JSON.stringify(Array))

    Display()
    clear()

}






function Display() {
    var cartona = ``
    for (var i = 0; i < Array.length; i++) {
        cartona += `<tr >
                        <th scope="col" >${i}</th>
                        <th scope="col">${Array[i].SiteName}</th>
                        <th scope="col"><a href="${Array[i].URl}"><button class="btn btn-warning px-3"><i class="fa-regular fa-eye me-2" style="color: #ffffff;"></i>Visit</button></a></th>
                        <th scope="col"><button onclick="Delete(${i})" class="btn btn-danger px-3"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></th>
                      </tr>`
        document.getElementById("bebo").innerHTML = cartona;


    }
}


function clear() {
    SiteName.value = ``
    SiteUR.value = ``
}

function Delete(index) {
    Array.splice(index, 1)
    Display()
}



// function Validation(element) {
//     var Valid = {
//         SiteName: /^\w{3,}(\s+\w+)*$/,
//         SiteUR: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/


//     }

//     if (Valid[element.id].test(element.value) == true) {
//         console.log("match");
//         element.classList.add("is-valid");
//         element.classList.remove("is-invalid");
//     } else {
//         console.log("not match");
//         element.classList.remove("is-valid");
//         element.classList.add("is-invalid");
//         showValidationDialog();
//     }
// }
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

SiteName.addEventListener("input", function () {
    validate(SiteName, nameRegex);
});

SiteUR.addEventListener("input", function () {
    validate(SiteUR, urlRegex);
});

function validate(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        button.classList.remove('disabled');
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");

    }
}

function showValidationDialog() {
    // Create the overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    overlay.id = "validationOverlay";

    // Create the dialog box
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.width = "400px";
    dialog.style.padding = "20px";
    dialog.style.backgroundColor = "#fff";
    dialog.style.borderRadius = "8px";
    dialog.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    dialog.style.fontFamily = "'Arial', sans-serif";

    // Add the close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.border = "none";
    closeButton.style.background = "none";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "20px";
    closeButton.onclick = function () {
        document.body.removeChild(overlay);
    };

    // Add the title
    const title = document.createElement("h3");
    title.textContent = "Site Name or URL is not valid, Please follow the rules below:";
    title.style.color = "#e68a00";
    title.style.fontSize = "18px";
    title.style.marginBottom = "10px";

    // Add the list of rules
    const rulesList = document.createElement("ul");
    rulesList.style.listStyleType = "none";
    rulesList.style.padding = "0";

    const rules = [
        "Site name must contain at least 3 characters",
        "Site URL must be a valid one",
    ];

    rules.forEach((rule) => {
        const listItem = document.createElement("li");
        listItem.style.display = "flex";
        listItem.style.alignItems = "center";
        listItem.style.marginBottom = "8px";

        const icon = document.createElement("span");
        icon.textContent = "➕"; // Add an icon or image if needed
        icon.style.color = "#e68a00";
        icon.style.marginRight = "8px";

        const ruleText = document.createElement("span");
        ruleText.textContent = rule;

        listItem.appendChild(icon);
        listItem.appendChild(ruleText);
        rulesList.appendChild(listItem);
    });

    // Append all elements to the dialog
    dialog.appendChild(closeButton);
    dialog.appendChild(title);
    dialog.appendChild(rulesList);

    // Append the dialog to the overlay
    overlay.appendChild(dialog);

    // Append the overlay to the body
    document.body.appendChild(overlay);
}



// Call this function when validation fails

function toggleSubmitButton() {



    // Check if both fields are filled
    if (SiteName.value.trim() !== "" && SiteUR.value.trim() !== "") {
        submitButton.disabled = false; // Enable button
    } else {
        submitButton.disabled = true; // Disable button
    }
    const siteNameInput = document.getElementById("siteName");
    const siteURLInput = document.getElementById("siteURL");

    // Listen for input events on both fields
    siteNameInput.addEventListener("input", toggleSubmitButton);
    siteURLInput.addEventListener("input", toggleSubmitButton);
}