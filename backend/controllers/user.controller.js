


const addNewUser = async (req, res) => {
    console.log("addNewUser")
    const { email, password } = req.body;

    const user = await findUserByEmailService(email);
    if (user) {
        return res.status(400).send("Email already exist")
    }


    try {
        generatePasswordService(password, async (hash) => {
            const resp = await addNewUserService(req.body, hash);

            res.status(201).send(resp);
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong")
    }
}