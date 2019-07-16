
export default class Runner{
    constructor(){

        let nav_links = document.querySelectorAll('.nav_item');
        nav_links.forEach((el) => {
            el.addEventListener('click', this.openDropDown);
        });
    }

    openDropDown(){
        console.log('openDropDown');
    }
}
