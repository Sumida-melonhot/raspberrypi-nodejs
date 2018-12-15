const express = require("express.js");
const session = require("session.io");
const socket = require("socket.io");
const mongoose = require("mongoose");
const rand = require("random");
const fs = require('fs');
const path = require('path');

const configList = fs.readFileSync('./data/conf.json');
const configJson = JSON.parse(configList);

