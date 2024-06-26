export default function formValidations(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
        case "username":
        case "color":
        case "subject":
            if (!value || value.length === 0)
                return `${name} field is mandatory`
            else if (value.length < 3 || value.length > 50)
                return `${name} length must be greater the 3 and less than 50`
            else
                return ""
        case "email":
            if (!value || value.length === 0)
                return `${name} field is mandatory`
            else if (value.length < 13 || value.length > 50)
                return `${name} length must be greater the 12 and less than 50`
            else
                return ""

        case "phone":
            if (!value || value.length === 0)
                return `${name} fieled is mendatory`
            else if (!(value.startsWith("6") || value.startsWith("7") || value.startsWith("8") || value.startsWith("9")) || value.length !== 10)
                return `${name} field first digit must start with 6-9 and must contains total 10 digits`
            else
                return ""

        case "size":
            if (!value || value.length === 0)
                return `${name} field is mandatory`
            else if (value.length > 20)
                return `${name} length must be less than 20`
            else
                return ""
        case "baseprice":
            if (!value)
                return `${name} field is mandatory`
            else if (value < 1)
                return `Price must be greater than 0`
            else
                return ""
        case "discount":
            if (!value)
                return `${name} field is mandatory`
            else if (value < 0 && value > 100)
                return `Discount must be in between 0 to 100`
            else
                return ""
        default:
            return ""
    }
}
