document.getElementById('changeTheme').addEventListener('click', function() {

    document.body.style.backgroundColor = 'black';

    document.body.style.color = 'white';

    const button = document.getElementById('changeTheme');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.style.border = '2px solid white';

    button.textContent = 'Revert Theme';
});