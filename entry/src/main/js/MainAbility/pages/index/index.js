export default {
    data: {
        count: 0,
        appear: false
    },
    onInit() {

    },
    start(){
      this.appear = true;
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


