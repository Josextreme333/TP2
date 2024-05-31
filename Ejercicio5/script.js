
function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = base * altura;
    alert(`El área del terreno es ${area} m²`);
}
