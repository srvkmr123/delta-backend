import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({ 
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
}) 
  
export default mongoose.model("Item", itemSchema)