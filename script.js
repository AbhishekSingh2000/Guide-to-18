var adhr = document.querySelector("#aadhaarbtn");
var mail = document.querySelector("#mailbtn");
var vtrid = document.querySelector("#voterbtn");
var pncrd = document.querySelector("#panbtn");
var dl = document.querySelector("#dlbtn");
var sbacc = document.querySelector("#sbbtn");
var passport = document.querySelector("#passbtn");
var adhrDiv  = document.querySelector("#aadhaar");
var mailDiv = document.querySelector("#promail");
var vtridDiv = document.querySelector("#voterid");
var pncrdDiv = document.querySelector("#pancard");
var dlDiv = document.querySelector("#drivelicense");
var sbaccDiv = document.querySelector("#bankacc");
var passportDiv = document.querySelector("#passport");

adhr.addEventListener("click", ()=>{
    //adhrDiv.style.display="none";
    mailDiv.style.display="none";
    vtridDiv.style.display="none";
    pncrdDiv.style.display="none";
    dlDiv.style.display="none";
    sbaccDiv.style.display="none";
    passportDiv.style.display="none";
    adhrDiv.style.display="block";
});

mail.addEventListener("click", ()=>{
    adhrDiv.style.display="none";
    //mailDiv.style.display="none";
    vtridDiv.style.display="none";
    pncrdDiv.style.display="none";
    dlDiv.style.display="none";
    sbaccDiv.style.display="none";
    passportDiv.style.display="none";
    mailDiv.style.display="block";
});

vtrid.addEventListener("click", ()=>{
    adhrDiv.style.display="none";
    mailDiv.style.display="none";
    //vtridDiv.style.display="none";
    pncrdDiv.style.display="none";
    dlDiv.style.display="none";
    sbaccDiv.style.display="none";
    passportDiv.style.display="none";
    vtridDiv.style.display="block";
});

pncrd.addEventListener("click", ()=>{
    adhrDiv.style.display="none";
    mailDiv.style.display="none";
    vtridDiv.style.display="none";
    //pncrdDiv.style.display="none";
    dlDiv.style.display="none";
    sbaccDiv.style.display="none";
    passportDiv.style.display="none";
    pncrdDiv.style.display="block";
});

dl.addEventListener("click", ()=>{
    adhrDiv.style.display="none";
    mailDiv.style.display="none";
    vtridDiv.style.display="none";
    pncrdDiv.style.display="none";
    //dlDiv.style.display="none";
    sbaccDiv.style.display="none";
    passportDiv.style.display="none";
    dlDiv.style.display="block";
});

sbacc.addEventListener("click", ()=>{
    adhrDiv.style.display="none";
    mailDiv.style.display="none";
    vtridDiv.style.display="none";
    pncrdDiv.style.display="none";
    dlDiv.style.display="none";
    //sbaccDiv.style.display="none";
    passportDiv.style.display="none";
    sbaccDiv.style.display="block";
});

passport.addEventListener("click", ()=>{
    adhrDiv.style.display="none";
    mailDiv.style.display="none";
    vtridDiv.style.display="none";
    pncrdDiv.style.display="none";
    dlDiv.style.display="none";
    sbaccDiv.style.display="none";
    //passportDiv.style.display="none";
    passportDiv.style.display="block";
});
