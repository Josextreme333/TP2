
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const usuariosDiv = document.getElementById('usuarios');
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'usuario';
                userDiv.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Nombre: ${user.name}</p>
                    <p>Usuario: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Sitio Web: ${user.website}</p>
                    <button onclick="verTareas(${user.id})">Ver Tareas</button>
                    <div id="tareas-${user.id}" class="tareas"></div>
                `;
                usuariosDiv.appendChild(userDiv);
            });
        });
});

function verTareas(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(todos => {
            const tareasDiv = document.getElementById(`tareas-${userId}`);
            tareasDiv.innerHTML = '';
            todos.forEach(todo => {
                const tareaP = document.createElement('p');
                tareaP.className = todo.completed ? 'completada' : 'pendiente';
                tareaP.textContent = todo.title;
                tareasDiv.appendChild(tareaP);
            });
        });
}
