<template>
	<div class="navigation-panel">
		<l-map :zoom="13" :center="[39.9212,32.8303]">
			<l-tile-layer :url="'https://tile.openstreetmap.org/{z}/{x}/{y}.png'" :attribution="`&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors`"></l-tile-layer>
		</l-map>
		<div class="navigation-panel__content">
			<div class="top-left">
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z"/></svg>
				</div>
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M351.1 64.05C351.1 64.04 351.1 64.05 351.1 64.05l.002 135.6L384 224.1V64c0-12.6-7.337-24.01-18.84-29.16c-4.201-1.895-8.727-2.841-13.16-2.841c-7.697 0-15.29 2.784-21.27 8.1L245.6 115.7L271.2 135.9L351.1 64.05zM480 256c0 12.91-4.529 25.05-11.97 35.3L493 311C504.8 295.2 512 276.2 512 256c0-30.97-15.53-59.86-41.56-77.3c-7.328-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C469.8 216.8 480 235.7 480 256zM576 256c0 34.73-11.82 67.81-32.54 94.86l25.07 19.79C593.7 338 608 298 608 256c0-63-31.64-121.8-84.63-157.3c-7.344-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C549.7 154.8 576 203.7 576 256zM351.1 447.1L207.1 319.1H112c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h23.71L98.04 162.3C78.39 168.3 64 186.4 64 208V304c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C336.7 477.2 344.3 480 352 480c4.438 0 8.959-.9312 13.16-2.837C376.7 472 384 460.6 384 448v-59.93l-32.02-25.28L351.1 447.1zM633.9 483.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z"/></svg>
				</div>
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M232 256C232 242.7 242.7 232 256 232C269.3 232 280 242.7 280 256C280 269.3 269.3 280 256 280C242.7 280 232 269.3 232 256zM348.6 122.9C373.6 114.6 397.4 138.4 389.1 163.4L340.2 309.9C335.5 324.2 324.2 335.5 309.9 340.2L163.4 389.1C138.4 397.4 114.6 373.6 122.9 348.6L171.8 202.1C176.5 187.8 187.8 176.5 202.1 171.8L348.6 122.9zM358.7 153.3L212.2 202.1C207.5 203.7 203.7 207.5 202.1 212.2L153.3 358.7L299.8 309.9C304.5 308.3 308.3 304.5 309.9 299.8L358.7 153.3zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"/></svg>
				</div>
			</div>
			<div class="top-right">
				<div class="navigation-meter">
					<div class="navigation-meter__top">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V224c0 53 43 96 96 96H402.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256H96c-17.7 0-32-14.3-32-32V64z"/></svg>
						600m
					</div>
					<small>In 500m take turning right</small>
				</div>
			</div>
			<div class="bottom-left">
				<div class="navigation-re-centre">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
					Re-centre
				</div>
				<div class="navigation-info">
					<div class="navigation-info__min">15 min</div>
					<div class="navigation-info__text">33km 6:45am</div>
					<div class="navigation-info__exit">
						<span>Exit</span>
					</div>
				</div>
			</div>
			<div class="bottom-right">
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM475.6 240L520.6 80H131.1L161.6 240H475.6zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
				</div>
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zM176 288c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"/></svg>
				</div>
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
				</div>
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"/></svg>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'NavigationPanel'
}
</script>
<style lang="stylus">
@import url('../assets/vars.css')

.navigation-panel
	position relative
	> iframe
		width 100%
		height 100%
		border 0
	.vue2leaflet-map
		position absolute
		top 0
		left 0
		right 0
		bottom 0
	.leaflet-tile-pane
		filter grayscale(100%) contrast(1.1) brightness(1) invert(1)
	.leaflet-bottom.leaflet-right, .leaflet-top.leaflet-left
		display none
	&__content
		position relative
		z-index 999
		display grid
		height 100%
		pointer-events none
		grid-template-areas 'top-left top-right' 'bottom-left bottom-right'
		grid-template-columns 1fr 1fr
		grid-template-rows 1fr 3fr
		.top-left
			grid-area top-left
			display flex
			justify-content flex-start
			align-items flex-start
			padding .5rem
			.icon
				width 2.5rem
				height 2.5rem
				background-color var(--color-box-bg-light-alpha)
				border-radius 50%
				box-shadow 0 0 2px 0 var(--color-light)
				display flex
				align-items center
				justify-content center
				color var(--color-light)
				pointer-events auto
				&:not(:last-child)
					margin-right .75rem
				svg
					max-width 1.25rem
					max-height 1.25rem
					fill currentColor
		.bottom-left
			grid-area bottom-left
			display flex
			justify-content flex-end
			align-items flex-start
			flex-direction column
			margin-bottom: .5rem;
			margin-left: .5rem;
			.navigation-re-centre
				margin-bottom .5rem
				padding .25rem .5rem
				background-color var(--color-box-bg-light-alpha)
				border-radius 1rem
				box-shadow 0 0 2px 0 var(--color-light)
				pointer-events auto
				display flex
				align-items center
				justify-content center
				white-space nowrap
				svg
					width 1rem
					margin-right .25rem
					fill var(--color-primary)
					path
						transform rotate(-45deg) translateY(150px) translateX(-250px)
			.navigation-info
				pointer-events auto
				padding .5rem .75rem
				font-size 1.25rem
				background-color var(--color-box-bg-light-alpha)
				display grid
				grid-template-areas 'navigation-info__min navigation-exit' 'navigation-info__text navigation-exit'
				border-radius 1rem
				box-shadow: 0 -6px 2px -6px var(--color-light) inset
				&__min
					grid-area navigation-info__min
					color var(--color-primary)
					font-weight 600
				&__text
					grid-area navigation-info__text
					font-size 1rem
				&__exit
					grid-area navigation-exit
					display flex
					align-items center
					justify-content center
					margin-left 2rem
					span
						background-color #ff0000
						padding .25rem 1rem
						border-radius 1rem
		.top-right
			grid-area top-right
			display flex
			justify-content flex-end
			align-items flex-start
			margin-top: .5rem;
			margin-right: .5rem;
			.navigation-meter
				padding .5rem 1rem
				background-color var(--color-box-bg-light-alpha)
				border-radius 1rem
				font-size 2rem
				text-align center
				display flex
				align-items center
				justify-content center
				flex-direction column
				box-shadow: 0 -6px 2px -6px var(--color-light) inset
				&__top
					display flex
					align-items center
					justify-content center
				svg
					width 2rem
					margin-right .5rem
					fill currentColor
					transform scaleY(-1)
				small
					font-size 1rem
		.bottom-right
			grid-area bottom-right
			display flex
			justify-content flex-end
			align-items flex-end
			flex-direction column
			padding .5rem
			.icon
				background-color var(--color-box-bg-light-alpha)
				border-radius .5rem
				pointer-events auto
				width 3rem
				height 3rem
				display flex
				align-items center
				justify-content center
				box-shadow: 0 -6px 2px -6px var(--color-light) inset
				&:not(:last-child)
					margin-bottom .25rem
				svg
					fill currentColor
					max-width 50%
</style>
