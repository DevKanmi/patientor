import express from "express";
import data from "../data/diagnoses";
import { Diagnosis } from "../type";

export const diagnoses = express.Router();

const getalldiagnosis = ():Diagnosis[] =>{
    return data;
};


diagnoses.get('/diagnoses', (_req, res) =>{
    res.json(getalldiagnosis());
});

