// codr for mega-menu hover images change
const fLink = document.querySelectorAll(".mhblink a");
const hoverImg = document.querySelector(".middleOne img");
fLink.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const imgScr = item.getAttribute("data-hover");
    hoverImg.src = imgScr;

    fLink.forEach((acitem) => {
      acitem.classList.remove("activeHover");
    });

    item.classList.add("activeHover");
  });
});

const fLinktwo = document.querySelectorAll(".mhblinktwo a");
const hoverImgtwo = document.querySelector(".middleTwo img");
fLinktwo.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const imgScr = item.getAttribute("data-hover-two");
    hoverImgtwo.src = imgScr;

    fLinktwo.forEach((acitem) => {
      acitem.classList.remove("activeHover");
    });

    item.classList.add("activeHover");
  });
});

// code for mega menu open
const megaTigger = document.querySelectorAll("#menuholder");
const megaBox = document.querySelectorAll(".megabox");

megaTigger.forEach((megaItem) => {
  megaItem.addEventListener("click", () => {
    const itemAttr = megaItem.getAttribute("menu-open");
    megaItem.classList.toggle("activeMenuholder");
    megaTigger.forEach((otherMegaItem) => {
      if (otherMegaItem !== megaItem) {
        otherMegaItem.classList.remove("activeMenuholder");
      }
    });

    megaBox.forEach((megaboxItem) => {
      const megaboxId = megaboxItem.getAttribute("id");
      if (itemAttr === megaboxId) {
        megaboxItem.classList.toggle("openMegaMenu");
      } else {
        megaboxItem.classList.remove("openMegaMenu");
      }
    });
  });
});

// code for tiggering right side menu
const rightSiteTarget = document.querySelectorAll(".smallIconTigger");
const rightSideMenu = document.querySelectorAll(".rightsideTarget");
const body = document.querySelector("body");
rightSiteTarget.forEach((tigger) => {
  tigger.addEventListener("click", () => {
    const tiggerAttr = tigger.getAttribute("willOpen");
    rightSideMenu.forEach((rightbox) => {
      const rightboxAttr = rightbox.getAttribute("id");
      if (tiggerAttr === rightboxAttr) {
        rightbox.classList.add("opensidebar");
        body.classList.add("overlay");
      }
    });
  });
});

// code for reset password

const resetClose = document.getElementById("allClose");
const closeItemOne = document.querySelector("#login");
const closeItemTwo = document.querySelector("#resetPasswords");
const backToLogin = document.getElementById("backtologin");

resetClose.addEventListener("click", () => {
  closeItemOne.classList.remove("opensidebar");
  closeItemTwo.classList.remove("opensidebar");
  body.classList.remove("overlay");
});

backToLogin.addEventListener("click", () => {
  closeItemTwo.classList.remove("opensidebar");
});

// code for closing sidebar
const closeBtn = document.querySelectorAll("#searchClose");
closeBtn.forEach((closebtn) => {
  closebtn.addEventListener("click", () => {
    const closeAttr = closebtn.getAttribute("willclose");
    rightSideMenu.forEach((rightbox) => {
      const rightboxAttr = rightbox.getAttribute("id");
      if (closeAttr === rightboxAttr) {
        rightbox.classList.remove("opensidebar");
        body.classList.remove("overlay");
      }
    });
  });
});

// code for searchbox
const topSearch = document.querySelectorAll(".top_search ul li a");
const searchInput = document.querySelector(".search-box input");
const searchResult = document.querySelector(".sc-result");
const topSearchDiv = document.querySelector(".top_search");
const searchValueText = document.getElementById("searchValue");

topSearch.forEach((sitem) => {
  sitem.addEventListener("click", () => {
    const searchText = sitem.textContent;
    searchInput.value = searchText;
    searchValueText.textContent = searchText;
    if (searchInput.value) {
      searchResult.style.display = "block";
      topSearchDiv.style.display = "none";
    }
  });
});

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value;
  console.log(searchValue);
  searchValueText.textContent = searchValue;
  if (searchInput.value) {
    searchResult.style.display = "block";
    topSearchDiv.style.display = "none";
  } else {
    searchResult.style.display = "none";
    topSearchDiv.style.display = "block";
  }
});

//code for tab
const tabButton = document.querySelectorAll(".lgtabbutton ul li");
const tabContent = document.querySelectorAll(".login_form");
const formHeadingText = document.getElementById("formHeadingText");

tabButton.forEach((tabitem) => {
  tabitem.addEventListener("click", () => {
    const tabBtnAttr = tabitem.getAttribute("tab-open");
    tabButton.forEach((idealButton) => {
      idealButton.classList.remove("tabActive");
    });
    tabitem.classList.add("tabActive");

    const textAttr = tabitem.getAttribute("text");
    formHeadingText.textContent = textAttr;

    tabContent.forEach((tabcItem) => {
      const tabAttr = tabcItem.getAttribute("id");
      if (tabBtnAttr === tabAttr) {
        tabcItem.style.display = "block";
      } else {
        tabcItem.style.display = "none";
      }
    });
  });
});

// code for discount apply
const discountInput = document.getElementById("disInput");
const discountApply = document.getElementById("apply");
const afterDiscount = document.querySelector(".afterdiscount");
let buttonText;

discountApply.addEventListener("click", () => {
  const discountCode = discountInput.value;
  if (discountCode && discountCode === "bullion2023") {
    afterDiscount.innerHTML = `<div class="totalpc text-danger">
    <h4>Discount 36.00</h4>
    <span>36.00</span>
  </div>
  <div class="totalpc">
    <h4>Total After Discount</h4>
    <span>324.00</span>
  </div>`;

    discountInput.value = "";
    buttonText = "Remove";
    discountApply.textContent = buttonText;
    discountApply.classList.add("bg-danger");
  } else if (!discountCode) {
    afterDiscount.innerHTML = `<p class="text-danger">Please input discount code</p>`;
    buttonText = "Apply";
    discountApply.textContent = buttonText;
    discountApply.classList.remove("bg-danger");
  } else {
    afterDiscount.innerHTML = `<p class="text-danger">Disount code is invalid</p>`;
    discountInput.value = "";
    buttonText = "Apply";
    discountApply.textContent = buttonText;
    discountApply.classList.remove("bg-danger");
  }
});

if (buttonText === "Remove") {
  discountApply.addEventListener("click", () => {
    afterDiscount.innerHTML = ``;
    buttonText = "Apply";
    discountApply.textContent = buttonText;
    discountApply.classList.remove("bg-danger");
  });
}

// code for responsive hamburger menu
const bar = document.querySelector(".bar");
const mobileMenu = document.querySelector("#mobile_main_menu");
const close_mobile_menu = document.getElementById("close_mobile_menu");

bar.addEventListener("click", () => {
  mobileMenu.classList.add("mobile_menu_open");
});

close_mobile_menu.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile_menu_open");
});

// code for responsive sub menu open
const subMenuTigger = document.querySelectorAll(".mobile_menu_items ul li a");
const subMenuHolder = document.querySelectorAll("#mobile_sub_menu");

subMenuTigger.forEach((subItem) => {
  subItem.addEventListener("click", () => {
    const subItemAttr = subItem.getAttribute("menu-open");
    subMenuHolder.forEach((holderItem) => {
      const subHolderAttr = holderItem.getAttribute("menu-tigger");
      if (subItemAttr === subHolderAttr) {
        holderItem.classList.add("mobile_menu_open");
      } else {
        holderItem.classList.remove("mobile_menu_open");
      }
    });
  });
});

// code for responsive sub menu close
const subCloseBtn = document.querySelectorAll("#close_mobile_menu");
subCloseBtn.forEach((closeItem) => {
  closeItem.addEventListener("click", () => {
    const subCloseAttr = closeItem.getAttribute("closeItem");
    subMenuHolder.forEach((holderItem) => {
      const subHolderAttr = holderItem.getAttribute("menu-tigger");
      if (subCloseAttr === subHolderAttr) {
        holderItem.classList.remove("mobile_menu_open");
      }
    });
  });
});

// code for all menu close
const allMenuClose = document.querySelectorAll("#allMenuClose");
allMenuClose.forEach((allitem) => {
  allitem.addEventListener("click", () => {
    subMenuHolder.forEach((currentMenu) => {
      currentMenu.classList.remove("mobile_menu_open");
      mobileMenu.classList.remove("mobile_menu_open");
    });
  });
});

// password show hide
const eye = document.getElementById("formEye");
const passwordInput = document.getElementById("password");
eye.addEventListener("click", () => {
  const inputType = passwordInput.getAttribute("type");

  if (inputType === "password") {
    passwordInput.setAttribute("type", "text");
    eye.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordInput.setAttribute("type", "password");
    eye.classList.replace("fa-eye", "fa-eye-slash");
  }
});
