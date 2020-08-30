const interestCheck = document.querySelectorAll('.interest__check');

for (let i = 0; i < interestCheck.length; i++) {
    if (interestCheck[i].closest('.interest').querySelector('.interests_active')) {
        interestCheck[i].addEventListener('change', function() {
            let interestCheckBox = interestCheck[i].closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');
            for (let j = 0; j < interestCheckBox.length; j++) {
                if (interestCheck[i].checked) {
                    interestCheckBox[j].checked = true;
                } else {
                    interestCheckBox[j].checked = false;
                }
            }
        })
    } 
}