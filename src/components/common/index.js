/**
 * Created by codingnuts on 2017/12/19.
 */
import axios from 'axios';
import readProd from "@project/config/index.js";
import ValidateRules from "./utils/ValidateRules";
import vv from "./utils/vv";
import DrawImage from "./utils/DrawImage";
import CreateCode from "./utils/CreateCode";
import CookieUtils from "./utils/CookieUtils";

var _axios = axios.create({
	timeout: 10000,
	withCredentials: true
});
var Get = _axios.get;
var Post = readProd || (process.env.NODE_ENV === 'production') ? _axios.post : _axios.get;


export {Get, Post, DrawImage, ValidateRules, CreateCode, vv, CookieUtils};
