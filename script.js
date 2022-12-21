

const mainBody=document.querySelector("#Main-Container");

const modeChangeButton=document.querySelector("#Mode-Change");

let isDark=true;

// Added Events
modeChangeButton.addEventListener('click',ModeChange);


function ModeChange()
{
    if(isDark)
    {
        mainBody.className="Light-Mode";
        modeChangeButton.innerHTML="D";
        modeChangeButton.className="Light-Mode"
    }
    else
    {
        mainBody.className="Dark-Mode";
        modeChangeButton.innerHTML="L";
        modeChangeButton.className="Dark-Mode"
    }
    isDark=!isDark;
}


function Form_Submit()
{
    alert("Backend on the Progress for the Form");
}