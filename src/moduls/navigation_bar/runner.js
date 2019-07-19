
export default class Runner{
    constructor(){

        this.opened = null;
        document.addEventListener('click', (e) => this.handleClick(e));
    }

    toggleElementClass(el){
        el.classList.toggle('show');
    }
    handleDroprdown(el){

        let dropdown = el.nextElementSibling;
        this.toggleElementClass(dropdown)

        if(!this.opened){
            this.opened = dropdown
        } else if (this.opened == dropdown){
            this.opened = null
        } else {
            this.toggleElementClass(this.opened)
            this.opened = dropdown
        }
    }
    handleClick(e){

        if (e.target.className.includes('js_nav_item_link')){
            this.handleDroprdown(e.target);
        } else if (this.opened){
            this.toggleElementClass(this.opened)
            this.opened = null
        }
    }
}
