const express = require ('express')
const app = express()
const Port = 3001
const userModel = require('./User')
const appointmentModel = require ('./Booking')
const cors = require ('cors')
const {default:mongoose}=require ('mongoose')

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/myProject")



app.get('/getData',(req,res)=>{
    userModel.find({})
    .then(users=>{
        res.json(users)
    })
    .catch(err => {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
    });
});
app.post('/postData',(req,res)=>{
    userModel.create(req.body)
    .then(user=>{console.log(user)})
    .catch(err=>{console.log(err)})
    res.send("successfully")
    
})
app.post('/bookAppointment', (req, res) => {
    appointmentModel.create(req.body)
        .then(appointment => {
            console.log(appointment);
            res.send("Appointment booked successfully",);
        })
        .catch(err => {
            console.error('Error booking appointment:', err);
            res.status(500).send('Error booking appointment');
        });
    });

    app.get('/appointments', (req, res) => {
        appointmentModel.find({})
            .then(appointments => {
                res.json(appointments);
            })
            .catch(err => {
                console.error('Error fetching appointments:', err);
                res.status(500).send('Error fetching appointments');
            });
    });
app.listen(Port,()=>console.log(`Example app listening on port ${Port}!`))