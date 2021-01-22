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

export default User;