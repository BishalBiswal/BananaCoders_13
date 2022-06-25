const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost/kraftloom",{useNewUrlParser:true
}).then(()=>{
    console.log("Successful");
}).catch((e) => {
    console.log(e);
})