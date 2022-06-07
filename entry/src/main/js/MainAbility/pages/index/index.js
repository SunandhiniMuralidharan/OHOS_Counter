export default {
    data: {
        count: 0
    },
    onInit() {

    },
    add(){
        this.count = this.count + 1;
    },
    subtract(){
        if(this.count > 0){
            this.count = this.count - 1;
        }
        else{
            this.count = 0;
        }
    },
    reset(){
        this.count = 0;
    }
}


