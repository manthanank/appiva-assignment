const firebase = require('../db');
const FileData = require('../models/filedata');
const firestore = firebase.firestore();

const addfiledata = async (req, res, next) => {
    try {
        const {
            leadTitle,
            contactName,
            leadSource,
            companyName,
            product,
            countryCode,
            email,
            assignToTeamName,
            assignToUserEmail,
            note,
            address,
            city,
            state,
            region,
            postalCode,
            countryName,
            Age,
            Salary
        } = req.body;
        const data = {
            leadTitle,
            contactName,
            leadSource,
            companyName,
            product,
            countryCode,
            email,
            assignToTeamName,
            assignToUserEmail,
            note,
            address,
            city,
            state,
            region,
            postalCode,
            countryName,
            Age,
            Salary
        };
        await firestore.collection('filedatas').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllfiledata = async (req, res, next) => {
    try {
        const filedatas = await firestore.collection('filedatas');
        const data = await filedatas.get();
        const filedatasArray = [];
        if (data.empty) {
            res.status(404).send('No filedata record found');
        } else {
            data.forEach(doc => {
                const filedata = new FileData(
                    doc.id,
                    doc.data().leadTitle,
                    doc.data().contactName,
                    doc.data().leadSource,
                    doc.data().companyName,
                    doc.data().product,
                    doc.data().countryCode,
                    doc.data().email,
                    doc.data().assignToTeamName,
                    doc.data().assignToUserEmail,
                    doc.data().note,
                    doc.data().address,
                    doc.data().city,
                    doc.data().state,
                    doc.data().region,
                    doc.data().postalCode,
                    doc.data().countryName,
                    doc.data().Age,
                    doc.data().Salary
                );
                filedatasArray.push(filedata);
            });
            res.send(filedatasArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getfiledata = async (req, res, next) => {
    try {
        const id = req.params.id;
        const filedata = await firestore.collection('filedatas').doc(id);
        const data = await filedata.get();
        if (!data.exists) {
            res.status(404).send('filedata with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatefiledata = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const filedata = await firestore.collection('filedatas').doc(id);
        await filedata.update(data);
        res.send('filedata record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletefiledata = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('filedatas').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addfiledata,
    getAllfiledata,
    getfiledata,
    updatefiledata,
    deletefiledata
}