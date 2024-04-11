export default function imageValidation(e) {
    let { files } = e.target
    console.log(files.type);
    for (let i = 0; i < files.length; i++) {
        if (files[i].size > 2097152)
            return "file size must be less than 2 Mb"
        else if (files[i].type === "image/jpeg" || files[i].type === "image/jpg" || files[i].type === "image/png")
            return ""
        else
            return "Invalid file"
    }
}