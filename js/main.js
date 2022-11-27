const inputContainer = document.querySelector('input')
const bodyElement = document.documentElement

const lightTheme = {
    '--background-color': '#FFFFFF',
    '--section-color':  'rgba(185, 250, 188, 0.2)',
    '--card-background-color': 'rgba(185, 250, 188, 0.2)',
    '--card-linear-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.6) 0%, rgba(255, 169, 220, 0.6) 0.01%, rgba(250, 243, 182, 0.6) 50.83%, rgba(180, 110, 251, 0.6) 95.62%)',
    '--text-color': '#000',
    '--title-color-second': '#fff',
    '--title-color': '#28FCF5',
    '--subtitle-color': '#30E6AD',
    '--button-color': '#27C3F2',
    '--floating-menu': '#fff',
    '--hover-floating': '#28FCF5',
    '--border-floating': '1px solid #27C3F2',
    '--footer-background': 'rgba(185, 250, 188, 0.2)',
    '--text-footer': '#FFC700',
    '--line-color': '#27C3F2'
}

const darkTheme = {
        '--background-color': '#07091B',
        '--card-background-color': 'rgba(25, 19, 43, 0.7)',
        '--card-linear-gradient': 'linear-gradient(135.93deg, rgba(255, 48, 128, 0.5) 5.92%, rgba(65, 72, 251, 0.5) 90.08%)',
        '--section-color': 'rgba(70, 71, 85, 0.2)',
        '--text-color': '#fff',
        '--title-color': '#9B3EF8',
        '--linear-color': 'linear-gradient(90deg, #9B3EF8 22.35%, #F925A2 82.75%)',
        '--line-color': '#A750DB',
        '--button-color': '#7E24AB',
        '--floating-menu': '#07091B',
        '--hover-floating': '#7E24AB',
        '--border-floating': '1px solid #7E24AB',
        '--footer-background': 'rgba(75, 0, 150, 0.1)',
        '--text-footer': '#fff',
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    if (isChecked) {
        changeTheme(darkTheme)
    } else {
        changeTheme(lightTheme)
    }
})

function changeTheme(theme) {
   for (let prop in theme) {
    changeProperty(prop, theme[prop])
   }
}

function changeProperty(property, value) {
    bodyElement.style.setProperty(property, value)
}