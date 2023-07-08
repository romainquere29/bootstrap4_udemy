

const form = document.querySelector('.form');
const startDateForm = document.getElementById('startDate');
const endDateForm = document.getElementById('endDate');
const peopleNbForm = document.getElementById('people');
const isLaunch = document.getElementById('launch');
const isDinner = document.getElementById('diner');
const dayInMilliseconds = 24*3600*1000;
const MaxDays = 14;
const MaxPerson = 100;
 
class Menu {
    // date = new Date();
    // id = (Date.now() + '').slice(-10);
    // clicks = 0;
    state = {
        MenuTable : [],
    }
    

    constructor() {
        this._init();
        console.log(this);
        // this.entree = entree; 
        // this.plats = plats; 
        // this.desserts = desserts; 
        // this.auto = auto; 

        this._SubmitEvent();
        // this._validateMenuForm();
    }

    _init() {
        this.state.MenuTable= [];

        this.state.startDate = '';
        this.state.endDate = ''; 
        this.people = 0; 
        // this.isLaunch = isLaunch; 
        // this.isDinner = isDinner; 
        // this._validateMenuForm();
    }

    _SubmitEvent() {
        console.log(this);
        form.addEventListener('submit', console.log(this));
        form.addEventListener('submit', this._controlMenu.bind(this));

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


    _displayDateStatus(status,errMsg="") {
        if (!status) {
            startDateForm.classList.remove("is-valid");
            startDateForm.classList.add("is-invalid");
            endDateForm.classList.remove("is-valid");
            endDateForm.classList.add("is-invalid");
            endDateForm.nextElementSibling.textContent = errMsg;
        }
        else {
            startDateForm.classList.add("is-valid");
            startDateForm.classList.remove("is-invalid");
            endDateForm.classList.add("is-valid");
            endDateForm.classList.remove("is-invalid");
        }
    } 

    _displayPersonStatus(status,errMsg="") {
        if (!status) {
            peopleNbForm.classList.remove("is-valid");
            peopleNbForm.classList.add("is-invalid");
            peopleNbForm.nextElementSibling.textContent = errMsg;
        }
        else {
            peopleNbForm.classList.add("is-valid");
            peopleNbForm.classList.remove("is-invalid");
        }
    } 

    _controlMenu(event) {
        event.preventDefault()
        
        // Validation of the dates
        if (!(startDateForm && endDateForm)) {
            console.log("pas les 2 dates");
            this._displayDateStatus(false,"J'ai besoin des 2 dates pour proposer des menus : de 1 à 14 jours !")
            return false
        }
        this.state.startDate = new Date(startDateForm.value.split('/')[2], startDateForm.value.split('/')[1], startDateForm.value.split('/')[0]); 
        this.state.endDate = new Date(endDateForm.value.split('/')[2], endDateForm.value.split('/')[1], endDateForm.value.split('/')[0]);     
        const deltaDays = (this.state.endDate - this.state.startDate)/dayInMilliseconds;
        if (deltaDays < 1 || deltaDays > MaxDays) {
            this._displayDateStatus(false,"J'ai besoin d'une période de 1 à "+MaxDays+" jours pour proposer des menus!");
            return false;
        }
        //Date is validated
        console.log(`DeltaDays = ${deltaDays}`);
        this._displayDateStatus(true)

        // Validation of the number of person
        if (!peopleNbForm) {
            console.log("pas le nombre de personnes");
            this._displayPersonStatus(false,"Je dois savoir combien vous serez : de 1 à 10 !")
            return false
        }
        this.people=peopleNbForm.value;
        if (this.people < 1 || this.people > MaxPerson) {
            console.log("Inférieur à 1 ou > à MaxPerson");
            this._displayPersonStatus(false,"Je dois savoir combien vous serez : de 1 à "+MaxPerson+" !")
            return false;
        }
        //Date is validated
        this._displayPersonStatus(true)

        //Form is valid => call new Menu
        this._newMenu();
    }   

    _newMenu() {
        // event.preventDefault()
        this._init();
        // this.state.startDate = new Date(this.startDateForm.value.split('/')[2], this.startDateForm.value.split('/')[1], this.startDateForm.value.split('/')[0]); 
        // this.state.endDate = new Date(this.endDateForm.value.split('/')[2], this.endDateForm.value.split('/')[1], this.endDateForm.value.split('/')[0]); 
        // // this${(this.endDate - this.startDate) / (1000*3600*24)}
        // // console.log(`${(this.endDate - this.startDate) / (1000*3600*24)}`)
        this._calcMenuTable();
    }


    _validateMenuForm = function() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        // 'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        console.log(this);
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            if (startDateForm.value && endDateForm.value) {
                form.classList.add('was-validated');

            } 
            console.log(this);
            this._newMenu.bind(this);
        });
        // form.addEventListener('submit', function () {
        //     console.log('catch');
        // })
        // Array.prototype.slice.call(forms)
        // .forEach(function (form) {
        //     console.log(this);
        //     form.addEventListener('submit', function (event) {
        //     if (!form.checkValidity()) {
        //         event.preventDefault()
        //         event.stopPropagation()
        //     }
        //     if (startDateForm.value && endDateForm.value) {
        //         form.classList.add('was-validated');
        //         console.log(this);
        //         // this._newMenu.bind(this);
        //     } 
        //     }, false)
        // })
    }
}


// _validateMenuForm();
new Menu();