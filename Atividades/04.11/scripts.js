        // Função para gerar uma cor aleatória
const button = document.getElementById('changeColorBtn');

        button.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        });

//-----------------------------------------------------------------------------------------

const inputField = document.getElementById('textInput');
const charCountDisplay = document.getElementById('charCount');

inputField.addEventListener('input', () => {
    const charCount = inputField.value.length;
    charCountDisplay.textContent = charCount;
});

//-----------------------------------------------------------------------------------------

