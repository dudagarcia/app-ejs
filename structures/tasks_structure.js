class Tasks{
    constructor(id, name, details, date, time, repetition, contributors, done){
        this.id = id;
        this.name = name;
        this.details = details;
        this.date = date;
        this.time = time;
        this.repetition = repetition;
        this.contributors = contributors; //array
        this.done = done; //bool
    }
}

export default Tasks;