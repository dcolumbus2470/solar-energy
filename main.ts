let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.LoopingInBackground)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("B A G A B B A A ", 120), music.PlaybackMode.LoopingInBackground)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.leftServo.fwdSetAngle(position)
        basic.pause(20)
    }
})
