const require=('express');
const sqlite3=require('sqlite3').verbose();
const app= express();
const PORT=5000;

app.use(express.json());

const db=new sqlite3.Database('cars.db',(err)=>{
    if(err)
    {
        console.error(err.message);
    }
    console.log('Connected to SQLite database.');
});

db.run(
    `CREATE TABLE IF NOT EXISTS cars(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        year INTEGER NOT NULL,
        make TEXT NOT NULL,
        model TEXT NOT NULL,
        owner TEXT NOT NULL    
    )`
);

app.get("/api/cars",(req,res)=>{

    db.all("SELECT * FROM cars",(err,rows)=>{
        if(err)        {
            return res.status(500).json({error:err.message});
        }
        res.json(rows);
    });
});
app.post("/api/cars",(req,res)=>{
    const {year,make,model,owner}=req.body;

    if(!year || !make || !model || !owner)
    {
        return res.status(400).json({error:"All fields are required"});
    }
    const sql="INSERT INTO cars(year,make,model,owner) VALUES(?,?,?,?)";

    db.run(sql,[year,make,model,owner],function(err){
        if(err)        {
            return res.status(500).json({error:err.message});
        }
        res.json( {
                id:this.lastID,
                year,
                make,
                model,
                owner
            });
    });
 });

 app.get("/api/cars/:id",(req,res)=>{
    const id=req.params.id;
    const sql="SELECT * FROM cars WHERE id=?";

    db.get(sql,[id],(err,row)=>{    
        if(err)        {
            return res.status(500).json({error:err.message});
        }
        if(!row)
        {
            return res.status(404).json({error:"Car not found"});
        }
        res.json(row);
    });
 });

 app.post("/api/cars/:id",(req,res)=>{
    const id=req.params.id;
    const {year,make,model,owner}=req.body;

    const sql="UPDATE cars SET year=?, make=?, model=?, owner=? WHERE id=?";
    db.run(sql,[year,make,model,owner,id],function(err){
        if(err)        {
            return res.status(500).json({error:err.message});
        }
        if(this.changes===0)
        {
            return res.status(404).json({error:"Car not found"});
        }
        res.json({
           message:"Car updated successfully"
        });
    });
    });
    