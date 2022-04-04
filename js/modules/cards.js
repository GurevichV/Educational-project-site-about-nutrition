import { getResource } from '../services/services';
function cards() {
    // Class of card

    class MenuCard {
        constructor(image, alt, title, text, price, parentSelector, ...classes) {
            this.image = image;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(clasName => element.classList.add(clasName));
            }
            element.innerHTML = `
                <img src="${this.image}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }



    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu__field .container').render();
    //         });
    //     });
    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu__field .container').render();
            });
        });
}

export default cards;