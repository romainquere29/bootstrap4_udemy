

const form = document.querySelector('.form');
const startForm = document.getElementById('startDate');
const endForm = document.getElementById('endDate');
const isLaunch = document.getElementById('launch');
const isDinner = document.getElementById('diner');

 
class Menu {
    // date = new Date();
    // id = (Date.now() + '').slice(-10);
    // clicks = 0;
    state = {
        MenuTable : [],
    }
    

    constructor() {
        this._init();
        // this.entree = entree; 
        // this.plats = plats; 
        // this.desserts = desserts; 
        // this.auto = auto; 

        this._SubmitEvent();
    }

    _init() {
        this.state.MenuTable= [];

        this.startForm = startForm;
        this.endForm = endForm; 
        // this.people = people; 
        this.isLaunch = isLaunch; 
        this.isDinner = isDinner; 
    }

    _SubmitEvent() {
        form.addEventListener('submit', this._newMenu.bind(this));
        // form.addEventListener('submit', function () {
        //     console.log('catch');
        // })
    }

    _calcMenuTable() {
        // console.log(this.state.MenuTable);
        let id=0;
        let tableDate = this.state.startDate;
        while (tableDate <= this.state.endDate) {
            if (this.isLaunch?.checked)
                this.state.MenuTable.push({date : tableDate.toDateString(), repas: this.isLaunch.value, id : id});
                id+=1;
            if (this.isDinner?.checked)
                console.log('here1');
                this.state.MenuTable.push({date : tableDate.toDateString(), repas: this.isDinner.value, id : id});
                id+=1;
                tableDate.setDate(tableDate.getDate() + 1);
        }
        console.log(this.state);

    }

    _newMenu(event) {
        event.preventDefault();
        this._init();
        this.state.startDate = new Date(this.startForm.value.split('/')[2], this.startForm.value.split('/')[1], this.startForm.value.split('/')[0]); 
        this.state.endDate = new Date(this.endForm.value.split('/')[2], this.endForm.value.split('/')[1], this.endForm.value.split('/')[0]); 
        // this${(this.endDate - this.startDate) / (1000*3600*24)}
        // console.log(`${(this.endDate - this.startDate) / (1000*3600*24)}`)
        this._calcMenuTable();
    }

}

new Menu();