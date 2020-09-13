import validtor from 'validator';

const form = document.querySelector('.form') as HTMLFormElement;
const email = document.querySelector('.email') as HTMLInputElement;
const user = document.querySelector('.username') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const div = document.createElement('div') as HTMLDivElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const errors: string[] = [];

  const deleteDiv = document.querySelector('.erros');
  if (deleteDiv) deleteDiv.remove();

  if (user.value === '') errors.push('Usuario vazio');

  const validEmail = validtor.isEmail(email.value);
  if (!validEmail) errors.push('Email invalido');

  if (password.value === '') errors.push('Senha vazia');
  if (password.value !== password2.value) errors.push('Senhas nao batem');

  if (errors.length > 0) {
    form.appendChild(div);
    div.className = 'erros';
    errors.map((error) => {
      const node = document.createTextNode(error);
      const p = document.createElement('p') as HTMLParagraphElement;
      p.appendChild(node);
      div.appendChild(p);
    });
  }
});
