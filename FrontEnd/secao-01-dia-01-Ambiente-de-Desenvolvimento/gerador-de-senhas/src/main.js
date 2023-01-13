import { nanoid } from 'nanoid';
import './style.css';
const btn = document.getElementById('btn');
const senha = document.getElementById('senha');

btn.addEventListener('click', () => {
    senha.innerHTML = nanoid();
});