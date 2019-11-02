"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentification = require("../controllers/authentification");
var playlists_1 = require("../controllers/playlists");
var authorization_1 = require("../controllers/authorization");
var home_1 = require("../controllers/home");
var express = require("express");
var router = express.Router();
router.get('/logout', authentification.logout);
router.get('/login', authentification.loginWithSpotify);
router.get('/callback', authentification.verifySpotifyState, authentification.saveSpotifyCodeToSession);
router.get('/', authorization_1.default, home_1.default);
router.post('/create', authentification.saveAccessToken, playlists_1.default);
exports.default = router;
