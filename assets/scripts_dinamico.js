function attIdade() {
    document.querySelector('#idade').innerText = Math.floor((new Date() - new Date('1999/04')) / (1000 * 60 * 60 * 24 * 365));
}

function attExpProf() {
    document.querySelector('#experiencia_profissional').innerText = Math.floor((new Date() - new Date('2019/06')) / (1000 * 60 * 60 * 24 * 365));
}

function attUltEmp() {
    document.querySelector('#tempo_exp_ult_emp').innerText = Math.floor((new Date() - new Date('2022/04')) / (1000 * 60 * 60 * 24 * 365));
}

if (window.screen.width < 800) {
    document.querySelectorAll('p').forEach(p => {
        p.style.fontSize = '30px';
    });
    document.querySelectorAll('h6').forEach(p => {
        p.style.fontSize = '38px';
    });
    document.querySelectorAll('img').forEach(img => {
        img.style.float = '';
    });
    document.querySelectorAll('h5').forEach(p => {
        p.style.fontSize = '38px';
    });
}
