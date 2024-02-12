function showAnswer(e) {
    const parentdiv = e.target.parentElement.parentElement.parentElement.parentElement;
    const ans = parentdiv.childNodes[3];
    ans.classList.toggle('hidden');
    if(ans.classList.contains('hidden')){
        console.log(e.target);
        e.target.setAttribute('src', 'assets/images/icon-plus.svg')

    } else {
        console.log(e.target);
        e.target.setAttribute('src', 'assets/images/icon-minus.svg')
    }
}

document.querySelectorAll('#plus').forEach(n => n.addEventListener('click', showAnswer))