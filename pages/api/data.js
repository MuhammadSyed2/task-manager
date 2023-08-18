let fs = require('fs')
let sqlite = require('aa-sqlite')

export default async function handler( req, res, dbTasks  ) {
    sqlite.open('TaskManager.db')
    // sqlite.run('Create Table tasks (ID Int, Name Text);')
    // sqlite.run("Insert into tasks(ID, Task_Name) Values(dbTasks.ID, dbTasks.Name)")
    // console.log(req.query)    
    if(req.query.a == 'data'){
        let row = await sqlite.all('select * from tasks where ID = ' + req.query.c)
        res.status(200).json(row)
    }
    if(req.query.a == 'save'){
        // let row = await sqlite.all('select * from tasks where ID = ' + req.query.c)
        let values = JSON.parse(req.body), sql
        if(values.ID)
            sql = `Update tasks SET Name = '${values.Name}', Duration = '${values.Duration}', Details = '${values.Details}', Status = '${values.Status}' WHERE ID = ${values.ID}`
        else
            sql = `INSERT into tasks(Name, Duration, Details, Status) VALUES('${values.Name}', '${values.Duration}', '${values.Details}', '${values.Status}')`
        
        sqlite.run(sql)
        res.status(200).json({'message':'updated/inserted successfully', sql, values:req.body})
    }
    if(req.query.a == 'delete'){
        let row = await sqlite.all('Delete from tasks where ID = ' + req.query.c)
        res.status(200).json(row)
    }
    else{

    }
    
    let rows = await sqlite.all('select * from tasks')

    fs.readFile('./tasks.json', 'utf8', (error, data)=>{
        // console.log(data)
        res.status(200).json(rows)
    })
}