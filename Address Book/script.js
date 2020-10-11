class Contact 
{
    fName;
    lName;
    email;
    imgName;

    constructor(fName, lName, email, imgName)
    {
        this.fName          = fName;
        this.lName          = lName;
        this.combinedName   = fName + " " + lName;
        this.email          = email;
        this.imgName        = imgName;
    }

    getCombinedName()
    {
        return this.combinedName;
    }

    getEmail()
    {
        return this.email;
    }

    getImgURL()
    {
        return "\images\\" + this.imgName + ".jpg";
    }
}

var contacts = [new Contact("Carole", "Lee", "CaroleLee@email.com", "carole"), new Contact("David", "Anthon", "DAnthon@email.com", "david")];

var selectedAddressImg   = document.getElementById("selectedAddressImg");
var selectedAddressName  = document.getElementById("selectedAddressName");
var SelectedAddressEmail = document.getElementById("SelectedAddressEmail");

var contactsList         = document.getElementById("contactsList"); 

var fNameEntry           = document.getElementById("fNameEntry");
var lNameEntry           = document.getElementById("lNameEntry");
var emailEntry           = document.getElementById("emailEntry");
var imageEntry           = document.getElementById("imageEntry");

window.addEventListener('load', onLoad);

function onLoad()
{
    //Show the first contact in the list by default
        showContact(contacts[0]);

    //Add all contacts in the pre-created list to the page
        for (var i = 0; i < contacts.length; i++)
        {
            addLink(contacts[i]);
        }
}

function showContact(contact)
{
    //Get the contact's fields and set the html values to them
        selectedAddressImg.src = contact.getImgURL();
        selectedAddressName.innerHTML = contact.getCombinedName();
        SelectedAddressEmail.innerHTML = contact.getEmail();
}

function addContact()
{
    //Create a temporary contact var to add it to the array of contacts and add the link onto the page
        var tempNewContact = new Contact(fNameEntry.value, lNameEntry.value, emailEntry.value, imageEntry.value);
        contacts.push(tempNewContact);
        addLink(tempNewContact);

    //Clear the entry fields
        fNameEntry.value = "";
        lNameEntry.value = "";
        emailEntry.value = "";
        imageEntry.value = "";
}

function addLink(contact)
{
    //Create elements
        var contactLink       = document.createElement('a');
        var dummyBreak        = document.createElement('br');

    //Set data of the contact html link
        contactLink.innerHTML = contact.getCombinedName();
        contactLink.href      = "#";

        contactLink.addEventListener('click', loadContact);

    //Add elements to page
        contactsList.appendChild(contactLink);
        contactsList.appendChild(dummyBreak);
}

function loadContact(e)
{
    //Go through each contact in the array and if the clicked link's text matches the combinedName field,
    //show it on the page. If it doesn't match it goes to the next entry until all entries are passed.
        for (var i = 0; i < contacts.length; i++)
        {
            if (e.target.innerHTML == contacts[i].getCombinedName())
            {
                showContact(contacts[i]);
            }
        }
}
