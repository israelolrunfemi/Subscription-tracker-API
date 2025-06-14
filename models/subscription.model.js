import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
     name:{
        type: String,
        trim: true,
        minLength: [2, "Name must be at least 2 characters"],
        maxLength: 100,
     },
     price:{
        type: Number,
        required: [true, "Price is required"],
        min: [0 , "Price must be greater than 0"],
     },
     currency:{
        type: String,
        enum:[USD, NGN , EUR , GBP],
     },
     frequency:{
        type:String,
        enum:['daily' , 'weekly' , 'yearly'],   
     },
     category:{
        type:String,
         enum:['sports' , 'news' , 'entertainment' , 'music' , 'business' , 'lifestyle' , 'technology' , 'health' , 'travel' , 'education' , 'finance' , 'food' , 'automotive' , 'fashion' , 'fitness' , 'gaming' , 'home' , 'media' , 'other' , 'pets' , 'realestate' , 'science' , 'shopping' , 'social' , 'telecom' , 'travel' , 'video' , 'web' , 'writing' , 'none'],
         required:[true, "Category is required"], 
     },
     paymentMethod:{
        type:String,
        trim:true,
        required:[true, "Payment Method is required"],
     },
     status:{
        type:String,
        enum:['active' , 'cancelled' , 'expired'],
        default:'active'
     },
     startDate:{
        type:Date,
        required:[true, "Start Date is required"],
        validate:{
            validator:(value) => value <=  newDate(),
            message: 'Start date must be in the past'
             
        }
     },
     renewalDate:{
        type:Date,
        validate:{
            validator: function(value){
                 return value >  this.startDate;
            },
            message: 'Renewal data must be after start date', 
        }
     },
     user:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User',
        required: true,
        index: true, 

     }

},{timestamps:true});



// Auto-calculate the renewal date
subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriod = {
            daily:1,
            weekly:7,
            yearly:365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency])
        }

        // Auto-update the status if renewal date had passed
        if(this.renewalDate < new Date()){
            this.status = 'expired';
        }
        next();
    });