import express from "express"
import passport from "passport";
import cors from 'cors';
import { register, login, getProfile, getBoard, getBoardID, addBoard, editBoard, deleteBoard, addPin, deletePins } from '../controllers/movies.js';

const router = express.Router()
router.route('/register')
    .post(cors(), register)

router.route('/login')
    .post(cors(), passport.authenticate('local'), login)


router.route('/profile')
    .post(cors(), getProfile)

router.route('/profile/getboard')
    .post(cors(), getBoard)

router.route('/profile/getboard/id')
    .post(cors(), getBoardID)

router.route('/profile/addboard')
    .post(cors(), addBoard)

router.route('/profile/editboard')
    .post(cors(), editBoard)

router.route('/profile/deleteboard')
    .post(cors(), deleteBoard)

router.route('/profile/addpin')
    .post(cors(), addPin)

router.route('/profile/deletepin')
    .post(cors(), deletePins)

const UserRoutes = router
export { UserRoutes }