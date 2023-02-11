/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #rows = [];

  constructor(rows) {
    this.#rows = rows;
    this.#render();

    const buttonList = this.elem.querySelectorAll('.button-clear');
    const arrButton = Array.from(buttonList);

    arrButton.map(button => button.addEventListener('click', this.#clearRow) );
  }

  #template() {
    return `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
          </tr>
        </thead>
        <tbody>
          ${this.#rows.map( user => `<tr class="row"><td>${user.name}</td>
                                                     <td>${user.age}</td>
                                                     <td>${user.salary}</td>
                                                     <td>${user.city}</td>
                                                     <td><button class="button-clear">X</button></td></tr>
          `).join('')}
        </tbody>
      </table>
   `
  }

  #render() {
    const div = document.createElement('div');
    div.innerHTML = this.#template();
    this.elem = div.firstElementChild;
  }

  #clearRow = () => {
    let targetButton = event.target;
    targetButton.parentNode.parentNode.remove();
  }
}
