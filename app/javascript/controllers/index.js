// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import TestController from "./test_controller"
application.register("test", TestController)

import ReferralController from "./referral_controller"
application.register("referral", ReferralController)

import LoginController from "./login_controller"
application.register("login", LoginController)
