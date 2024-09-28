import express from 'express';
import data from '../data/patients';
import { Nonsensitve } from '../type';

export const patients = express.Router();

const getpatients = () :Nonsensitve[] =>{
    return data.map(({id,name,dateOfBirth,gender,occupation}) =>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

patients.get('/patients',(_req,res) =>{
    res.send(getpatients());
});

