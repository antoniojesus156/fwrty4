led.plot(0, 0)
k_Bit.run(DIR.RunForward, 80)
basic.showArrow(ArrowNames.South)
basic.pause(1000)
k_Bit.run(DIR.RunBack, 80)
basic.showArrow(ArrowNames.East)
basic.pause(1000)
k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 80)
k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 20)
basic.pause(1000)
k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 20)
k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 80)
basic.showArrow(ArrowNames.East)
k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 80)
basic.showArrow(ArrowNames.West)
k_Bit.run(DIR.TurnRight, 0)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.pause(500)
}
basic.forever(function () {
	
})
