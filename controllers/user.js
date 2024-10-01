const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    const html = `<ul>
                    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
                </ul>`;
    res.send(html);
}

async function handleGetUserById(req, res) {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
}

async function handleCreateUser(req, res) {

    const body = req.body;
    if (!body || !body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json({ msg: "All fields required..." });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle,
    });
    console.log("result ", result);
    return res.status(201).json({ msg: "SUCCESS", id: res._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
}