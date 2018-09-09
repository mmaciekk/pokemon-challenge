class String {
    static transformEmails(string) {
        const emailRegex = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
        let array = string.split(',')
        let arrayNoWhitespace = array.map((el) => el.trim())
        let arrayWithValidEmails = []
        arrayNoWhitespace.forEach((el) => {
            if (emailRegex.test(el)){
                arrayWithValidEmails.push(el.toLowerCase())
            }
        })
        return arrayWithValidEmails
    }
}
console.log(String.transformEmails('test@email.com,  test@mail, test+1@mail.net'))
