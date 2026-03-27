const initialCards = [
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},

    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},

    {   
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},

    {   

        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
    
    {

        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},

    {    

        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",},
];

const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileFormEl = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");

const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");


const newPostBtn = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const newPostEl = newPostModal.querySelector(".modal__form");

const newPostImageInput = newPostModal.querySelector("#card-image-input");

const newPostCaptionInput = newPostModal.querySelector("#profile-description-input");


function openModal(modal){
    modal.classList.add("modal_is-opened");
}

function closeModal(modal){
    modal.classList.remove("modal_is-opened");
}

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostImageLink = newPostImageInput.value;
const newPostCaption = newPostCaptionInput.value;




editProfileBtn.addEventListener("click", function () {
    //editProfileModal.classList.add("modal_is-opened");
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);

});

editProfileCloseBtn.addEventListener("click", function () {
    //editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
    //newPostModal.classList.add("modal_is-opened");
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
    //newPostModal.classList.remove("modal_is-opened");
    closeModal(newPostModal);

});

function handleProfileFormSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault(); 

  profileNameEl.textContent = editProfileNameInput.value;

  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  //editProfileModal.classList.remove("modal_is-opened");
  closeModal(editProfileModal);
}

// Set the submit listener.
editProfileFormEl.addEventListener('submit', handleProfileFormSubmit);


function handleProfileFormSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault(); 

  profileNameEl.textContent = editProfileNameInput.value;

  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  //editProfileModal.classList.remove("modal_is-opened");
  closeModal(editProfileModal);
}

// Set the submit listener.
editProfileFormEl.addEventListener('submit', handleProfileFormSubmit);


function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault(); 
 
  // Log both input values to the console.
  console.log(newPostImageLink);
  console.log(newPostCaption);


  // Close the modal.
  //newPostModal.classList.remove("modal_is-opened");
  closeModal(newPostModal);
}

// Create the submit listener.
newPostEl.addEventListener('submit', handleAddCardSubmit);


initialCards.forEach(function (card) {
    console.log(card.name);
    console.log(card.link);
});

