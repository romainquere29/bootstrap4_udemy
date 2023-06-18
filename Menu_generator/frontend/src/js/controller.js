

const form = document.querySelector('.form');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');

class Menu {
    // date = new Date();
    // id = (Date.now() + '').slice(-10);
    // clicks = 0;


    constructor(startDate, endDate, people, dejeuner, diner, entree, plats, desserts, auto) {
        this.startDate = startDate; 
        this.endDate = endDate; 
        this.people = people; 
        this.dejeuner = dejeuner; 
        this.diner = diner; 
        this.entree = entree; 
        this.plats = plats; 
        this.desserts = desserts; 
        this.auto = auto; 

        this._SubmitEvent();
    }

    _SubmitEvent() {
        form.addEventListener('submit', this._newMenu.bind(this));
        // form.addEventListener('submit', function () {
        //     console.log('catch');
        // })
    }

    _newMenu() {
        console.log(`date de debut : ${startDate.value}`);
        console.log(`date de fin : ${endDate.value}`);
    }

}

new Menu();