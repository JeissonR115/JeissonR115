const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
    ev.target.checked ? theme = 'light' : theme = 'dark';
    document.documentElement.setAttribute('theme', theme);
}
colorSwitch.addEventListener('change', cambiaTema);