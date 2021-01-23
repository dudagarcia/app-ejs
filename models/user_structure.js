class User{
    constructor(id, name, birthDate, age, email, password, phoneNumber, section, role, photo) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate; 
        this.age = age;
        this.email = email; //not null
        this.password = password; //not null
        this.phoneNumber = phoneNumber;
        this.section = section;
        this.role = role;
        this.photo = photo;
    }
}
//npx sequelize-cli model:generate --name User --attributes name:string, birthDate:date, age:integer, email:string, password:string, phoneNumber:long, section:string, role:string, photo:string
//npx sequelize-cli db:migrate
export default User;