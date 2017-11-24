export  default{
    isLoggedin:false,
    login:function(){

        this.isLoggedin = true;
        console.log("isloggedin",this.isLoggedin)
    },
    logout:function(){
        this.isLoggedin = false;
        console.log("isloggedout",this.isLoggedin)

    }
}