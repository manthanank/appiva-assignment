class FileData {
    constructor(id,leadTitle, contactName, leadSource, companyName, product,
        countryCode, email, assignToTeamName, assignToUserEmail, note, address, city, state, region, postalCode, countryName, Age, Salary ) {
            this.id = id;
            this.leadTitle = leadTitle;
            this.contactName = contactName;
            this.leadSource = leadSource;
            this.companyName = companyName;
            this.product = product;
            this.countryCode = countryCode;
            this.email = email;
            this.assignToTeamName = assignToTeamName;
            this.assignToUserEmail = assignToUserEmail;
            this.note = note;
            this.address = address;
            this.city = city;
            this.state = state;
            this.region = region;
            this.postalCode = postalCode;
            this.countryName = countryName;
            this.Age = Age;
            this.Salary = Salary;

    }
}

module.exports = FileData;