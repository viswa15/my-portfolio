let profileImage = document.getElementById("profile-image");
let sidebarExitIconEl = document.getElementById("sidebarExitIcon");
let floatingIconsEl = document.getElementById("floatingIcons");
let sideBarInsideProfileImageEl = document.getElementById("sidebar-inside-profile-image");
let profileValue = false;

let bgContainerEl = document.getElementById("bgContainer");
let sidebarConEl = document.getElementById("sidebarCon");
/*************Button Elements***********/
let MoreAboutMeBtnEl = document.getElementById("MoreAboutMeBtn");
/***************Button elements End*********/

/****************For Portfolio Access*******/
let HomeConEl = document.getElementById("HomeCon");
let AboutConEl = document.getElementById("AboutCon");
let ServicesConEl = document.getElementById("ServicesCon");
let PortfolioConEl = document.getElementById("PortfolioCon");
let ContactConEl = document.getElementById("ContactCon");
/***************portfolio Ends************/

/***************Sidebar Ids*****************/
let homeEl = document.getElementById("home");
let aboutEl = document.getElementById("about");
let servicesEl = document.getElementById("services");
let portfolioEl = document.getElementById("portfolio");
let contactEl = document.getElementById("contact");
/*****************sidebar Ends****************/

/***************Navbar Ids Starts**************************/
let homeNavConEl = document.getElementById("homeNavCon");
let aboutNavConEl = document.getElementById("aboutNavCon");
let servicesNavConEl = document.getElementById("servicesNavCon");
let portfolioNavConEl = document.getElementById("portfolioNavCon");
let contactNavConEl = document.getElementById("contactNavCon");
/**********************************************************/

/********************Color Switching*************************/
let violetBtnEl = document.getElementById("violetBtn");
let blueBtnEl = document.getElementById("blueBtn");
let orangeBtnEl = document.getElementById("orangeBtn");
let greenBtnEl = document.getElementById("greenBtn");
let redBtnEl = document.getElementById("redBtn");
let pinkBtnEl = document.getElementById("pinkBtn");
/****************Color Switching Ends**************/

sideBarInsideProfileImageEl.addEventListener("click", () => {
    profileImage.classList.remove("d-none");
    floatingIconsEl.classList.remove("d-none");
    sidebarConEl.classList.add("d-none");
})

profileImage.addEventListener("click", () => {
    sidebarConEl.classList.remove("d-none");
    profileImage.classList.add("d-none");
    floatingIconsEl.classList.add("d-none");
})

/******************Event Listener for homeEl********************/
homeEl.addEventListener("click", () => {
    HomeConEl.classList.remove("d-none");
    AboutConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");

})
homeNavConEl.addEventListener("click", () => {
    HomeConEl.classList.remove("d-none");
    AboutConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");
})


/******************Event Listener for aboutEl********************/
aboutEl.addEventListener("click", () => {
    AboutConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");

});
aboutNavConEl.addEventListener("click", () => {
    AboutConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");
});

/*********************Event Listener for ServicesEl******************************/
servicesEl.addEventListener("click", () => {
    ServicesConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    AboutConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");
});
servicesNavConEl.addEventListener("click", () => {
    ServicesConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    AboutConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");
});

/*************************Event Listener for Portfolio Container*******************************/
portfolioEl.addEventListener("click", () => {
    PortfolioConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    AboutConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");

});
portfolioNavConEl.addEventListener("click", () => {
    PortfolioConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    AboutConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");
})

/*******************Event Listener for Contact Container*************************/
contactEl.addEventListener("click", () => {
    ContactConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    AboutConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");

});
contactNavConEl.addEventListener("click", () => {
    ContactConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    AboutConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
});


/***************Event Listeners for BtnElements*********************/
MoreAboutMeBtnEl.addEventListener("click", () => {
    AboutConEl.classList.remove("d-none");
    HomeConEl.classList.add("d-none");
    ServicesConEl.classList.add("d-none");
    PortfolioConEl.classList.add("d-none");
    ContactConEl.classList.add("d-none");
})



/**HomeConColorSwitchingEl**/
let homeConMyNameEl = document.getElementById("homeConMyName");
let homeConMyRoleEl = document.getElementById("homeConMyRole");

/*****About Con color switching el***********/
let aboutMeConHeadingEl = document.getElementById("aboutMeConHeading");
let aboutConMyRoleEl = document.getElementById("aboutConMyRole");
let aboutConSkillsHeadingEl = document.getElementById("aboutConSkillsHeading");
let aboutConHtmlSkillEl = document.getElementById("aboutConHtmlSkill");
let aboutConCssSkillEl = document.getElementById("aboutConCssSkill");
let aboutConJsSkillEl = document.getElementById("aboutConJsSkill");
let aboutConPythonSkillEl = document.getElementById("aboutConPythonSkill");
let aboutConSqlSkillEl = document.getElementById("aboutConSqlSkill");
let aboutConOopsSkillEl = document.getElementById("aboutConOopsSkill");
let aboutConDownloadResumeBtnEl = document.getElementById("aboutConDownloadResumeBtn");
let aboutConPersonalDetailsEl = document.getElementById("aboutConPersonalDetails");

/*****************Service Con color switching el*********************/
let serviceConHeadingEl = document.getElementById('serviceConHeading');
let serviceConCardHeading1El = document.getElementById("serviceConCardHeading1");
let serviceConCardHeading2El = document.getElementById("serviceConCardHeading2");
let serviceConCardHeading3El = document.getElementById("serviceConCardHeading3");

/***************Portfolio Con color Switching el*****************/
let portfolioConHeadingEl = document.getElementById("portfolioConHeading");
let portfolioConCardHeading1El = document.getElementById("portfolioConCardHeading1");
let portfolioConCardHeading2El = document.getElementById("portfolioConCardHeading2");
let portfolioConCardHeading3El = document.getElementById("portfolioConCardHeading3");
let portfolioConCardHeading4El = document.getElementById("portfolioConCardHeading4");

/*************Contact con color switching el*************/
let contactConHeadingEl = document.getElementById("contactConHeading");
let ContactConAnswerEl = document.getElementById("ContactConAnswer");
let ContactCallIconEl = document.getElementById("ContactCallIcon");
let ContactlocationIconEl = document.getElementById("ContactlocationIcon");
let ContactemailIconEl = document.getElementById("ContactemailIcon");
let ContactinstaIconEl = document.getElementById("ContactinstaIcon");
let ContactLinkedinIconEl = document.getElementById("ContactLinkedinIcon");
let ContactGitHubIconEl = document.getElementById("ContactGitHubIcon");

/************ColorSwitcher El*************/
let colorSwitcherIconEl = document.getElementById("colorSwitcherIcon");
let colorSwitcherTextEl = document.getElementById("colorSwitcherText");

violetBtn.addEventListener("click", () => {
    /***************ColorSwitcher contents******************/
    colorSwitcherIconEl.style.color = "#8e44ad";
    colorSwitcherTextEl.style.color = "#8e44ad";

    /****HomeCo contents****/
    homeConMyNameEl.style.color = "#8e44ad";
    homeConMyRoleEl.style.color = "#8e44ad";
    MoreAboutMeBtnEl.style.backgroundColor = "#8e44ad";

    /*******AboutCon contents****/
    aboutMeConHeadingEl.style.color = "#8e44ad";
    aboutConMyRoleEl.style.color = "#8e44ad";
    aboutConPersonalDetailsEl.style.color = "#8e44ad";
    aboutConSkillsHeadingEl.style.color = "#8e44ad";
    aboutConHtmlSkillEl.style.backgroundColor = "#8e44ad";
    aboutConCssSkillEl.style.backgroundColor = "#8e44ad";
    aboutConJsSkillEl.style.backgroundColor = "#8e44ad";
    aboutConPythonSkillEl.style.backgroundColor = "#8e44ad";
    aboutConSqlSkillEl.style.backgroundColor = "#8e44ad";
    aboutConOopsSkillEl.style.backgroundColor = "#8e44ad";
    aboutConDownloadResumeBtnEl.style.backgroundColor = "#8e44ad";

    /*************Service contents*****************/
    serviceConHeadingEl.style.color = "#8e44ad";
    serviceConCardHeading1El.style.color = "#8e44ad";
    serviceConCardHeading2El.style.color = "#8e44ad";
    serviceConCardHeading3El.style.color = "#8e44ad";

    /*********Portfolio contents******/
    portfolioConHeadingEl.style.color = "#8e44ad";
    portfolioConCardHeading1El.style.color = "#8e44ad";
    portfolioConCardHeading2El.style.color = "#8e44ad";
    portfolioConCardHeading3El.style.color = "#8e44ad";
    portfolioConCardHeading4El.style.color = "#8e44ad";

    /**********Contact contents*********/
    contactConHeadingEl.style.color = "#8e44ad";
    ContactConAnswerEl.style.color = "#8e44ad";
    ContactCallIconEl.style.color = "#8e44ad";
    ContactlocationIconEl.style.color = "#8e44ad";
    ContactemailIconEl.style.color = "#8e44ad";
    ContactinstaIconEl.style.color = "#8e44ad";
    ContactLinkedinIconEl.style.color = "#8e44ad";
    ContactGitHubIconEl.style.color = "#8e44ad";
});
blueBtnEl.addEventListener("click", () => {
    /***************ColorSwitcher contents******************/
    colorSwitcherIconEl.style.color = "#2980b9";
    colorSwitcherTextEl.style.color = "#2980b9";

    /****HomeCo contents****/
    homeConMyNameEl.style.color = "#2980b9";
    homeConMyRoleEl.style.color = "#2980b9";
    MoreAboutMeBtnEl.style.backgroundColor = "#2980b9";

    /*******AboutCon contents****/
    aboutMeConHeadingEl.style.color = "#2980b9";
    aboutConMyRoleEl.style.color = "#2980b9";
    aboutConPersonalDetailsEl.style.color = "#2980b9";
    aboutConSkillsHeadingEl.style.color = "#2980b9";
    aboutConHtmlSkillEl.style.backgroundColor = "#2980b9";
    aboutConCssSkillEl.style.backgroundColor = "#2980b9";
    aboutConJsSkillEl.style.backgroundColor = "#2980b9";
    aboutConPythonSkillEl.style.backgroundColor = "#2980b9";
    aboutConSqlSkillEl.style.backgroundColor = "#2980b9";
    aboutConOopsSkillEl.style.backgroundColor = "#2980b9";
    aboutConDownloadResumeBtnEl.style.backgroundColor = "#2980b9";

    /*************Service contents*****************/
    serviceConHeadingEl.style.color = "#2980b9";
    serviceConCardHeading1El.style.color = "#2980b9";
    serviceConCardHeading2El.style.color = "#2980b9";
    serviceConCardHeading3El.style.color = "#2980b9";

    /*********Portfolio contents******/
    portfolioConHeadingEl.style.color = "#2980b9";
    portfolioConCardHeading1El.style.color = "#2980b9";
    portfolioConCardHeading2El.style.color = "#2980b9";
    portfolioConCardHeading3El.style.color = "#2980b9";
    portfolioConCardHeading4El.style.color = "#2980b9";

    /**********Contact contents*********/
    contactConHeadingEl.style.color = "#2980b9";
    ContactConAnswerEl.style.color = "#2980b9";
    ContactCallIconEl.style.color = "#2980b9";
    ContactlocationIconEl.style.color = "#2980b9";
    ContactemailIconEl.style.color = "#2980b9";
    ContactinstaIconEl.style.color = "#2980b9";
    ContactLinkedinIconEl.style.color = "#2980b9";
    ContactGitHubIconEl.style.color = "#2980b9";
});
orangeBtnEl.addEventListener("click", () => {
    /***************ColorSwitcher contents******************/
    colorSwitcherIconEl.style.color = "#f39c12";
    colorSwitcherTextEl.style.color = "#f39c12";

    /****HomeCo contents****/
    homeConMyNameEl.style.color = "#f39c12";
    homeConMyRoleEl.style.color = "#f39c12";
    MoreAboutMeBtnEl.style.backgroundColor = "#f39c12";

    /*******AboutCon contents****/
    aboutMeConHeadingEl.style.color = "#f39c12";
    aboutConMyRoleEl.style.color = "#f39c12";
    aboutConPersonalDetailsEl.style.color = "#f39c12";
    aboutConSkillsHeadingEl.style.color = "#f39c12";
    aboutConHtmlSkillEl.style.backgroundColor = "#f39c12";
    aboutConCssSkillEl.style.backgroundColor = "#f39c12";
    aboutConJsSkillEl.style.backgroundColor = "#f39c12";
    aboutConPythonSkillEl.style.backgroundColor = "#f39c12";
    aboutConSqlSkillEl.style.backgroundColor = "#f39c12";
    aboutConOopsSkillEl.style.backgroundColor = "#f39c12";
    aboutConDownloadResumeBtnEl.style.backgroundColor = "#f39c12";

    /*************Service contents*****************/
    serviceConHeadingEl.style.color = "#f39c12";
    serviceConCardHeading1El.style.color = "#f39c12";
    serviceConCardHeading2El.style.color = "#f39c12";
    serviceConCardHeading3El.style.color = "#f39c12";

    /*********Portfolio contents******/
    portfolioConHeadingEl.style.color = "#f39c12";
    portfolioConCardHeading1El.style.color = "#f39c12";
    portfolioConCardHeading2El.style.color = "#f39c12";
    portfolioConCardHeading3El.style.color = "#f39c12";
    portfolioConCardHeading4El.style.color = "#f39c12";

    /**********Contact contents*********/
    contactConHeadingEl.style.color = "#f39c12";
    ContactConAnswerEl.style.color = "#f39c12";
    ContactCallIconEl.style.color = "#f39c12";
    ContactlocationIconEl.style.color = "#f39c12";
    ContactemailIconEl.style.color = "#f39c12";
    ContactinstaIconEl.style.color = "#f39c12";
    ContactLinkedinIconEl.style.color = "#f39c12";
    ContactGitHubIconEl.style.color = "#f39c12";
});
greenBtnEl.addEventListener("click", () => {
    /***************ColorSwitcher contents******************/
    colorSwitcherIconEl.style.color = "#27ae60";
    colorSwitcherTextEl.style.color = "#27ae60";

    /****HomeCo contents****/
    homeConMyNameEl.style.color = "#27ae60";
    homeConMyRoleEl.style.color = "#27ae60";
    MoreAboutMeBtnEl.style.backgroundColor = "#27ae60";

    /*******AboutCon contents****/
    aboutMeConHeadingEl.style.color = "#27ae60";
    aboutConMyRoleEl.style.color = "#27ae60";
    aboutConPersonalDetailsEl.style.color = "#27ae60";
    aboutConSkillsHeadingEl.style.color = "#27ae60";
    aboutConHtmlSkillEl.style.backgroundColor = "#27ae60";
    aboutConCssSkillEl.style.backgroundColor = "#27ae60";
    aboutConJsSkillEl.style.backgroundColor = "#27ae60";
    aboutConPythonSkillEl.style.backgroundColor = "#27ae60";
    aboutConSqlSkillEl.style.backgroundColor = "#27ae60";
    aboutConOopsSkillEl.style.backgroundColor = "#27ae60";
    aboutConDownloadResumeBtnEl.style.backgroundColor = "#27ae60";

    /*************Service contents*****************/
    serviceConHeadingEl.style.color = "#27ae60";
    serviceConCardHeading1El.style.color = "#27ae60";
    serviceConCardHeading2El.style.color = "#27ae60";
    serviceConCardHeading3El.style.color = "#27ae60";

    /*********Portfolio contents******/
    portfolioConHeadingEl.style.color = "#27ae60";
    portfolioConCardHeading1El.style.color = "#27ae60";
    portfolioConCardHeading2El.style.color = "#27ae60";
    portfolioConCardHeading3El.style.color = "#27ae60";
    portfolioConCardHeading4El.style.color = "#27ae60";

    /**********Contact contents*********/
    contactConHeadingEl.style.color = "#27ae60";
    ContactConAnswerEl.style.color = "#27ae60";
    ContactCallIconEl.style.color = "#27ae60";
    ContactlocationIconEl.style.color = "#27ae60";
    ContactemailIconEl.style.color = "#27ae60";
    ContactinstaIconEl.style.color = "#27ae60";
    ContactLinkedinIconEl.style.color = "#27ae60";
    ContactGitHubIconEl.style.color = "#27ae60";
});
redBtnEl.addEventListener("click", () => {
    /***************ColorSwitcher contents******************/
    colorSwitcherIconEl.style.color = "#e74c3c";
    colorSwitcherTextEl.style.color = "#e74c3c";

    /****HomeCo contents****/
    homeConMyNameEl.style.color = "#e74c3c";
    homeConMyRoleEl.style.color = "#e74c3c";
    MoreAboutMeBtnEl.style.backgroundColor = "#e74c3c";

    /*******AboutCon contents****/
    aboutMeConHeadingEl.style.color = "#e74c3c";
    aboutConMyRoleEl.style.color = "#e74c3c";
    aboutConPersonalDetailsEl.style.color = "#e74c3c";
    aboutConSkillsHeadingEl.style.color = "#e74c3c";
    aboutConHtmlSkillEl.style.backgroundColor = "#e74c3c";
    aboutConCssSkillEl.style.backgroundColor = "#e74c3c";
    aboutConJsSkillEl.style.backgroundColor = "#e74c3c";
    aboutConPythonSkillEl.style.backgroundColor = "#e74c3c";
    aboutConSqlSkillEl.style.backgroundColor = "#e74c3c";
    aboutConOopsSkillEl.style.backgroundColor = "#e74c3c";
    aboutConDownloadResumeBtnEl.style.backgroundColor = "#e74c3c";

    /*************Service contents*****************/
    serviceConHeadingEl.style.color = "#e74c3c";
    serviceConCardHeading1El.style.color = "#e74c3c";
    serviceConCardHeading2El.style.color = "#e74c3c";
    serviceConCardHeading3El.style.color = "#e74c3c";

    /*********Portfolio contents******/
    portfolioConHeadingEl.style.color = "#e74c3c";
    portfolioConCardHeading1El.style.color = "#e74c3c";
    portfolioConCardHeading2El.style.color = "#e74c3c";
    portfolioConCardHeading3El.style.color = "#e74c3c";
    portfolioConCardHeading4El.style.color = "#e74c3c";

    /**********Contact contents*********/
    contactConHeadingEl.style.color = "#e74c3c";
    ContactConAnswerEl.style.color = "#e74c3c";
    ContactCallIconEl.style.color = "#e74c3c";
    ContactlocationIconEl.style.color = "#e74c3c";
    ContactemailIconEl.style.color = "#e74c3c";
    ContactinstaIconEl.style.color = "#e74c3c";
    ContactLinkedinIconEl.style.color = "#e74c3c";
    ContactGitHubIconEl.style.color = "#e74c3c";
})
pinkBtnEl.addEventListener("click", () => {
    /***************ColorSwitcher contents******************/
    colorSwitcherIconEl.style.color = "#e84393";
    colorSwitcherTextEl.style.color = "#e84393";

    /****HomeCo contents****/
    homeConMyNameEl.style.color = "#e84393";
    homeConMyRoleEl.style.color = "#e84393";
    MoreAboutMeBtnEl.style.backgroundColor = "#e84393";

    /*******AboutCon contents****/
    aboutMeConHeadingEl.style.color = "#e84393";
    aboutConMyRoleEl.style.color = "#e84393";
    aboutConPersonalDetailsEl.style.color = "#e84393";
    aboutConSkillsHeadingEl.style.color = "#e84393";
    aboutConHtmlSkillEl.style.backgroundColor = "#e84393";
    aboutConCssSkillEl.style.backgroundColor = "#e84393";
    aboutConJsSkillEl.style.backgroundColor = "#e84393";
    aboutConPythonSkillEl.style.backgroundColor = "#e84393";
    aboutConSqlSkillEl.style.backgroundColor = "#e84393";
    aboutConOopsSkillEl.style.backgroundColor = "#e84393";
    aboutConDownloadResumeBtnEl.style.backgroundColor = "#e84393";

    /*************Service contents*****************/
    serviceConHeadingEl.style.color = "#e84393";
    serviceConCardHeading1El.style.color = "#e84393";
    serviceConCardHeading2El.style.color = "#e84393";
    serviceConCardHeading3El.style.color = "#e84393";

    /*********Portfolio contents******/
    portfolioConHeadingEl.style.color = "#e84393";
    portfolioConCardHeading1El.style.color = "#e84393";
    portfolioConCardHeading2El.style.color = "#e84393";
    portfolioConCardHeading3El.style.color = "#e84393";
    portfolioConCardHeading4El.style.color = "#e84393";

    /**********Contact contents*********/
    contactConHeadingEl.style.color = "#e84393";
    ContactConAnswerEl.style.color = "#e84393";
    ContactCallIconEl.style.color = "#e84393";
    ContactlocationIconEl.style.color = "#e84393";
    ContactemailIconEl.style.color = "#e84393";
    ContactinstaIconEl.style.color = "#e84393";
    ContactLinkedinIconEl.style.color = "#e84393";
    ContactGitHubIconEl.style.color = "#e84393";
});