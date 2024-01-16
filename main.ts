let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Heart)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.No)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.leftServo.fwdSetAngle(position)
        basic.pause(20)
    }
})
