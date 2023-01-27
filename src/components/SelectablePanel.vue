<template>
	<div class="selectable-panel">
		<div class="music-panel panel">
			<div class="music-panel__info" v-if="currentTrack">
				<img :src="currentTrack.cover" :alt="currentTrack.artist" />
				<div class="music-panel__info--title">
					<div><strong>{{ currentTrack.name }}</strong>{{ currentTrack.artist }}</div>
				</div>
			</div>
			<div class="music-panel__bar">
				<div class="progress" ref="progress">
					<div class="progress__duration">{{ currentTime }}</div>
					<div class="progress__bar" @click="clickProgress" @keyup.right="() => {}">
						<div class="progress__current" :style="{ width : barWidth }"></div>
					</div>
					<div class="progress__time">{{ duration }}</div>
				</div>
			</div>
			<div class="music-panel__buttons">
				<div @click="prevTrack" class="music-panel__button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"/></svg>
				</div>
				<div @click="fastBackward" class="music-panel__button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/></svg>
				</div>
				<div @click="play" class="music-panel__button play" :class="{ 'is-playing': isTimerPlaying }">
					<svg v-if="isTimerPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
					<div class="ring">
					<div></div><div></div><div></div><div></div>
					</div>
				</div>
				<div @click="fastForward" class="music-panel__button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/></svg>
				</div>
				<div @click="nextTrack" class="music-panel__button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/></svg>
				</div>
			</div>
		</div>
		<div class="calendar-panel panel">
			<div class="calendar-panel__title">
				<strong>23</strong>
				<small>Monday</small>
			</div>
			<div class="calendar-panel__reminders">
				<div class="calendar-panel__reminders--title">
					Tomorrow
				</div>
				<ul class="calendar-panel__reminders--list">
					<li class="warning">
						<strong>Simulator Test Plan</strong>
						<small>08:00 - 10:00 AM</small>
					</li>
					<li class="success">
						<strong>Fuel System Review</strong>
						<small>02:00 - 05:00 PM</small>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'SelectablePanel',
	data() {
		return {
			audio: null,
			circleLeft: null,
			barWidth: null,
			duration: null,
			currentTime: null,
			isTimerPlaying: false,
			currentTrack: null,
			currentTrackIndex: 0,
			transitionName: null,
			tracks: [
				{
					name: 'Something About You',
					artist: 'Marilyn Ford',
					cover: '/marilyn-ford.webp',
					source: '/something-about-you-marilyn-ford.mp3'
				},
				{
					name: 'Lifelike',
					artist: 'AlexiAction',
					cover: '/alexiaction.webp',
					source: '/lifelike-126735.mp3'
				}
			]
		}
	},
	methods: {
		play() {
			if (this.audio.paused) {
				this.audio.play()
				this.isTimerPlaying = true
			} else {
				this.audio.pause()
				this.isTimerPlaying = false
			}
		},
		fastForward() {
			this.audio.currentTime += 10
		},
		fastBackward() {
			this.audio.currentTime -= 10
		},
		prevTrack() {
			this.transitionName = 'scale-in'
			if (this.currentTrackIndex > 0) {
				this.currentTrackIndex -= 1
			} else {
				this.currentTrackIndex = this.tracks.length - 1
			}
			this.currentTrack = this.tracks[this.currentTrackIndex]
			this.resetPlayer()
		},
		nextTrack() {
			this.transitionName = 'scale-out'
			if (this.currentTrackIndex < this.tracks.length - 1) {
				this.currentTrackIndex += 1
			} else {
				this.currentTrackIndex = 0
			}
			this.currentTrack = this.tracks[this.currentTrackIndex]
			this.resetPlayer()
		},
		generateTime() {
			const width = (100 / this.audio.duration) * this.audio.currentTime
			this.barWidth = `${width}%`
			this.circleLeft = `${width}%`
			let durmin = Math.floor(this.audio.duration / 60)
			let dursec = Math.floor(this.audio.duration - durmin * 60)
			let curmin = Math.floor(this.audio.currentTime / 60)
			let cursec = Math.floor(this.audio.currentTime - curmin * 60)
			if (durmin < 10) {
				durmin = `0${durmin}`
			}
			if (dursec < 10) {
				dursec = `0${dursec}`
			}
			if (curmin < 10) {
				curmin = `0${curmin}`
			}
			if (cursec < 10) {
				cursec = `0${cursec}`
			}
			this.duration = `${durmin}:${dursec}`
			this.currentTime = `${curmin}:${cursec}`
		},
		updateBar(x) {
			const { progress } = this.$refs
			const maxduration = this.audio.duration
			const position = x - progress.offsetLeft
			let percentage = (100 * position) / progress.offsetWidth
			if (percentage > 100) {
				percentage = 100
			}
			if (percentage < 0) {
				percentage = 0
			}
			this.barWidth = `${percentage}%`
			this.circleLeft = `${percentage}%`
			this.audio.currentTime = (maxduration * percentage) / 100
			this.audio.play()
		},
		clickProgress(e) {
			this.isTimerPlaying = true
			this.audio.pause()
			this.updateBar(e.pageX)
		},
		resetPlayer() {
			this.barWidth = 0
			this.circleLeft = 0
			this.audio.currentTime = 0
			this.audio.src = this.currentTrack.source
			setTimeout(() => {
				if (this.isTimerPlaying) {
					this.audio.play()
				} else {
					this.audio.pause()
				}
			}, 300)
		}
	},
	created() {
		// eslint-disable-next-line prefer-destructuring
		this.currentTrack = this.tracks[0]
		this.audio = new Audio()
		this.audio.src = this.currentTrack.source
		this.audio.ontimeupdate = () => {
			this.generateTime()
		}
		this.audio.onloadedmetadata = () => {
			this.generateTime()
		}
		this.audio.onended = () => {
			this.nextTrack()
			this.isTimerPlaying = true
		}
	}
}
</script>
<style lang="stylus">
@import url('../assets/vars.css')

.selectable-panel
	display flex
	justify-content space-between
	> .panel
		flex 1
		&:not(:last-child)
			margin-right 1rem
.music-panel
	padding .5rem !important
	display flex
	flex-direction column
	&__info
		display flex
		align-items center
		justify-content flex-start
		&--title
			display flex
			align-items center
			justify-content center
			width 100%
			div
				text-align center
				max-width 80%
				padding .25rem
				border-radius .5rem
				background var(--color-secondary)
				box-shadow 0 0 1rem rgba(0, 0, 0, .5)
				display flex
				flex-direction column
	img
		width 125px
		border-radius .75rem
	&__bar
		margin-top .5rem
		margin-bottom .5rem
		.progress
			display flex
			width: 100%
			user-select: none
			align-items center
			justify-content circle

			&__duration, &__time
				font-weight lighter
				font-size .75rem
				color var(--color-light)
			&__bar
				height: 2px
				width: 100%
				cursor: pointer
				background-color var(--color-light)
				display inline-block
				border-radius 1rem
				margin 0 .75rem
			&__current
				height: inherit
				width: 0%
				background-color: var(--color-primary)
				border-radius: 10px
				position relative
				display flex
				align-items center
				justify-content center
				&:before
					content ''
					width 7px
					height 7px
					border-radius 50%
					background-color var(--color-primary)
					position absolute
					right 0

	&__buttons
		background var(--color-secondary)
		padding .5rem
		height 100%
		border-radius 1rem
		display flex
		justify-content space-around
		align-items center
	&__button
		color var(--color-light)
		cursor pointer
		&.play
			svg
				width 1.5rem
				max-height 1.5rem
			&.is-playing
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				.ring
					position absolute
					top 0
					bottom 0
					display: flex;
					align-items: center;
					justify-content: center;
					div
						box-sizing: border-box;
						display: block;
						position: absolute;
						width: 2.25rem;
						height: 2.25rem;
						margin: 2px;
						border: 2px solid var(--color-primary)
						border-radius: 50%;
						animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
						border-color: var(--color-primary) transparent transparent transparent;
						&:nth-child(1)
							animation-delay: -0.45s;
						&:nth-child(2)
							animation-delay: -0.3s
						&:nth-child(3)
							animation-delay: -0.15s
			@keyframes lds-ring {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		svg
			fill currentColor
			width 1rem
			max-height 1rem
.calendar-panel
	display flex
	flex-direction column
	padding .5rem !important
	&__reminders
		margin-top auto
		&--title
			font-size 125%
			margin-left .5rem
			margin-bottom .25rem
		&--list
			display flex
			flex-direction column
			margin 0
			padding 0
			list-style-type none
			li
				display flex
				flex-direction column
				background-color var(--color-secondary)
				border-radius .5rem
				box-shadow: 0 -6px 2px -7px var(--color-light) inset
				padding .25rem .25rem .25rem 1rem
				position relative
				font-size 125%
				&:before
					left 8px
					height calc(100% - 10px)
					top 5px
					right 0
					bottom 5px
					width 2px
					content ''
					display block
					position absolute
					background-color #fff
				&.warning
					&:before
						background-color #cc671d
				&.success
					&:before
						background-color #257701
				&:not(:last-child)
					margin-bottom .25rem
				strong
					margin-bottom .5rem
				small
					font-size .75rem
					color var(--color-light)
	&__title
		strong
			font-size 1.75rem
			color var(--color-light)
		small
			margin-left .5rem
			font-size 1.25rem
			color var(--color-primary)
</style>
