<template>
	<div class="driving-panel">
		<div class="top">
			<div class="car-mode">
				<div class="car-mode--wrapper">
					<div>terrain</div>
					<div class="is-active">sport</div>
					<div>economy</div>
				</div>
			</div>
			<div class="current-speed">{{ currentSpeed }}</div>
			<div class="current-speed-unit">km/h</div>
		</div>
		<div class="info">
			<div class="info-item">
				<div class="info-item__circle">
					<svg class="info-item__circle--svg" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
						<circle cx="16" cy="16" r="15.9155" class="bg" />
						<circle cx="16" cy="16" r="15.9155" :style="{ 'stroke-dashoffset': calculateLevel(fuelLevel) }" class="bar" />
					</svg>
					<div class="info-item__circle--content">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
							<path d="M192 496c97.2 0 176-78.8 176-176c0-74.1-102.3-230.6-150.9-300.7c-12.3-17.7-37.8-17.7-50.1 0C118.3 89.4 16 245.9 16 320c0 97.2 78.8 176 176 176zM112 320c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
						</svg>
						<div>{{ fuelLevel }}%</div>
					</div>
				</div>
				<div class="info-item__title">Fuel</div>
			</div>
			<div class="info-item">
				<div class="info-item__circle">
					<svg class="info-item__circle--svg" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
						<circle cx="16" cy="16" r="15.9155" class="bg" />
						<circle cx="16" cy="16" r="15.9155" :style="{ 'stroke-dashoffset': calculateLevel(batteryLevel) }" class="bar" />
					</svg>
					<div class="info-item__circle--content">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
							<path d="M16 288L320 0 260.7 197.6 432 224 128 512l59.3-197.6L16 288z" />
						</svg>
						<div>{{ batteryLevel }}%</div>
					</div>
				</div>
				<div class="info-item__title">Battery</div>
			</div>
			<div class="info-item">
				<div class="info-item__circle">
					<svg class="info-item__circle--svg" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
						<circle cx="16" cy="16" r="15.9155" class="bg" />
						<circle cx="16" cy="16" r="15.9155" :style="{ 'stroke-dashoffset': calculateLevel(serviceLevel) }" class="bar" />
					</svg>
					<div class="info-item__circle--content">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
							<path d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" />
						</svg>
						<div>822km</div>
					</div>
				</div>
				<div class="info-item__title">Service</div>
			</div>
		</div>
		<div class="car">
			<div class="car-model">
				<img src="/car.png" alt="car" />
				<div class="road"></div>
			</div>
			<div class="transmission">
				<span>P</span>
				<span class="is-active">D</span>
				<span>N</span>
				<span>R</span>
			</div>
			<div class="self-driving">
				Self-Driving <strong>ON</strong>
			</div>
		</div>
		<div class="notifications">
			<div class="traffic-sign">82</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'DrivingPanel',
	data() {
		return {
			carMode: 'sport',
			fuelLevel: 46,
			batteryLevel: 46,
			serviceLevel: 68,
			currentSpeed: 98,
			interval: null
		}
	},
	methods: {
		calculateLevel(level) {
			return 100 - ((level / 100) * 100)
		},
		animateSpeed(i, target, el, speed = 10) {
			if (i !== target) {
				this[el] = i
				setTimeout(() => {
					this.animateSpeed(i < target ? i + 1 : i - 1, target, el, speed)
				}, speed)
			}
		}
	},
	mounted() {
		this.interval = setInterval(() => {
			this.animateSpeed(this.fuelLevel, Math.floor(Math.random() * (100 - 1) + 1), 'fuelLevel', 25)
			this.animateSpeed(this.batteryLevel, Math.floor(Math.random() * (100 - 1) + 1), 'batteryLevel', 25)
			this.animateSpeed(this.serviceLevel, Math.floor(Math.random() * (100 - 1) + 1), 'serviceLevel', 25)
			this.animateSpeed(this.currentSpeed, Math.floor(Math.random() * (300 - 1) + 1), 'currentSpeed', 25)
		}, 5000)
		this.animateSpeed(0, this.fuelLevel, 'fuelLevel', 25)
		this.animateSpeed(0, this.batteryLevel, 'batteryLevel', 25)
		this.animateSpeed(0, this.serviceLevel, 'serviceLevel', 25)
		this.animateSpeed(0, 98, 'currentSpeed', 25)
	},
	beforeDestroy() {
		clearInterval(this.interval)
	}
}
</script>
<style lang="stylus">
@import url('../assets/vars.css')

.driving-panel
	display grid
	grid-template-columns 3fr 7fr 2fr
	row-gap .5rem
	column-gap .5rem
	grid-template-areas 'top top top' 'info car notifications'

.top
	grid-area top
	display flex
	align-items center
	justify-content flex-start
	flex-direction column
	position relative

	.car-mode
		font-size .75rem
		color var(--color-text)
		font-weight lighter
		position relative
		width 100%
		display flex
		justify-content center

		&--wrapper
			max-width 40%
			overflow hidden
			white-space nowrap
			display flex
			justify-content center
			align-items center
			position relative

			> div
				display block
				flex 1 0 auto
				margin 0 .5rem
				text-align center
				width 60px

			&:before, &:after
				content ''
				display block
				position absolute
				top 0
				bottom 0
				width 30px

			&:before
				left 0
				background linear-gradient(to right, var(--color-box-bg), rgba(0, 0, 0, 0))

			&:after
				right 0
				background linear-gradient(to left, var(--color-box-bg), rgba(0, 0, 0, 0))

		&:before
			content ''
			display block
			position absolute
			top 110%
			left 0
			right 0
			width 40%
			height 25px
			border: solid 1px;
			border-color rgba(255, 255, 255, .5) transparent transparent transparent;
			border-radius 90% / 25px 25px 0 0
			margin 0 auto

		.is-active
			font-size 150%
			color var(--color-primary)

	.current-speed
		color var(--color-primary)
		font-size 4rem
		font-weight bold
		background radial-gradient(circle, var(--color-primary-alpha) 10%, transparent 70%)
		position relative

	&:before
		content ''
		display block
		position absolute
		top 60%
		left 0
		right 0
		width 60%
		height 30px
		border: solid 1px;
		border-color transparent transparent rgba(255, 255, 255, .5) transparent;
		border-radius 0 0 45px 45px
		margin 0 auto

.info
	grid-area info
	padding-right 1rem

	&-item
		display flex
		align-items center
		flex-direction column

		&:not(:last-child)
			margin-bottom 1rem

		&__title
			background-color var(--color-secondary)
			border-radius .25rem
			padding .25rem 1rem
			font-size 75%
			margin-top -.25rem

		&__circle
			display flex
			position relative
			justify-content center
			align-items center
			flex-direction column
			width 80%

			&--content
				position absolute
				display flex
				align-items center
				justify-content center
				flex-direction column
				font-size 65%

				svg
					fill var(--color-primary)
					max-width 1.5rem
					height: 1.5rem;

			&--svg
				transform rotate(90deg) scaleX(-1)

				.bg
					fill: var(--color-secondary)
					stroke: transparent;
					stroke-width: 1.8;

				.bar
					fill: none;
					stroke: var(--color-primary);
					stroke-dasharray: 100 100;
					stroke-dashoffset: 100;
					stroke-width: 1.8;
					transition: stroke-dashoffset 250ms linear;

.car
	grid-area car
	display flex
	flex-direction column
	align-items center
	justify-content center

	.transmission
		width 30%
		margin-top auto
		margin-bottom 1rem
		display flex
		justify-content space-between
		color #838488
		.is-active
			color var(--color-primary)

	.self-driving
		margin-bottom 1rem
		background-color var(--color-secondary)
		padding .5rem 1rem
		border-radius .25rem
		box-shadow 0 0 1rem rgba(0, 0, 0, .5)
		strong
			color var(--color-primary)

	&-model
		display flex
		align-items center
		justify-content center
		position relative
		height 100%
		perspective: 393px;

		img
			flex 1
			position relative
			z-index 1
			max-width 50%

	.road
		position absolute
		top: -20%;
		right: 15%;
		bottom: 7%;
		left: 15%;
		transform: rotateX(35deg) rotateY(0deg);
		transform-style: preserve-3d;
		overflow hidden

		&:before
			content ''
			display block
			position absolute
			width 3px
			top 0
			left 0
			bottom 0
			background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);

		&:after
			content ''
			display block
			position absolute
			width 3px
			height calc(100% + 20px)
			top 0
			right 0
			bottom 0
			background: repeating-linear-gradient(0deg, #ff0000, #ff0000 10px, transparent 10px, transparent 20px);
			background-size 100% 100%
			animation backgroundPosition 1s linear infinite reverse
@keyframes backgroundPosition
	0%
		transform: translateY(0)
	100%
		transform: translateY(-20px)
.notifications
	grid-area notifications
	padding 0 1rem
	.traffic-sign
		display flex
		align-items center
		justify-content center
		position relative
		border-radius 50%
		background-color #000
		font-size 1.5rem
		width 100%
		border 2px solid #6e080b
		&:after
			content: "";
			display: block;
			padding-bottom: 100%;
</style>
