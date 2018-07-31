'use strict';

const express = require('express');
const router = express.Router();
const LocationModel = require('../models/location.model');
const ErrorHelper = require('../helpers/error-helper');

const index = async function(req, res) {
  try {
    let locations = await LocationModel.find().exec();
    res.send(locations);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const get = async function(req, res) {
  try {
    let location = await LocationModel.findById(req.params.id).exec();
    if (location == null) throw new Error('LOCATION_ID_NOT_FOUND');
    res.send(location);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const create = async function(req, res) {
  try {
    let location = new LocationModel(req.body);
    await location.save();
    res.send(location);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const update = async function(req, res) {
  try {
    await LocationModel.update({_id: req.params.id}, req.body).exec();
    let location = await LocationModel.findById(req.params.id).exec();
    if (location == null) throw new Error('LOCATION_ID_NOT_FOUND');
    res.send(location);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const destroy = async function(req, res) {
  try {
    await LocationModel.deleteOne({_id: req.params.id});
    res.send(true);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}


// routes
router.get('/', index);
router.get('/:id', get);
router.post('/', create);
router.put('/:id',  update);
router.delete('/:id', destroy);

module.exports = router;