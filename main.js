function chooseOption(question, option) {
    const element = document.getElementById(question).getElementsByClassName(option)[0];
    element.classList.add('selected');

    let optiontoremove;
    if (option === "option1") {
        optiontoremove = "option2"
    } else {
        optiontoremove = "option1";
    }

    const toremove = document.getElementById(question).getElementsByClassName(optiontoremove)[0];
    toremove.classList.remove('selected');
}