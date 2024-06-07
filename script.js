const container = document.querySelector('#grids');

for (let i = 1; i <= 16; i++){
    const line = document.createElement('div');
    line.setAttribute('id', 'line');
    for (let i = 1; i <= 16; i++){
        const block = document.createElement('div');
        block.style.backgroundColor = 'white';
        block.style.width = '36px';
        block.style.height = '36px';
        block.textContent = '';
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'black';
        })
        line.appendChild(block);
    }
    container.appendChild(line);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let number = prompt("Type the number of squarer per side for the new grid.");
    Number(number);
    if (number >= 1 && number <= 100) {
        container.replaceChildren();
        for (let i = 1; i <= number; i++){
            const newLine = document.createElement('div');
            for (let i = 1; i <= number; i++){
                const block = document.createElement('div');
                block.style.backgroundColor = 'white';
                block.style.width = `${576 / number}px`;
                block.style.height = `${576 / number}px`;
                block.textContent = '';
                block.addEventListener('mouseover', () => {
                    block.style.backgroundColor = 'black';
                })
                newLine.appendChild(block);
            }
            container.appendChild(newLine);
        }
    } else {
        alert("Invalid value.");
    }
})