import {EventListener, generateUuid} from "../../../utils/util";

export default class Tooltip {
	constructor(el, content, placement = 'top', trigger = 'hover') {
		this.uuid = generateUuid();
		this.$el = el;
		this.content = content;
		this.placement = placement;
		this.trigger = trigger;
		this.position = {
			top: 0,
			left: 0
		};
		this.visible = false;
		el.setAttribute('tooltip-uuid', this.uuid);
		this.onEvent();
	}

	render() {
		let popover = document.createElement('div');
		popover.classList.add('t-tooltip');
		popover.classList.add('t-tooltip--popper');
		popover.setAttribute('tooltip-uuid', this.uuid);
		popover.setAttribute('placement', this.placement);
		let arrow = document.createElement('div');
		arrow.classList.add('t-tooltip--arrow');
		popover.appendChild(arrow);
		let contentElem = document.createElement('div');
		contentElem.classList.add('t-tooltip--content');
		contentElem.innerHTML = this.content;
		popover.appendChild(contentElem);
		this.$popover = popover;
		document.body.appendChild(popover);

	}


	change() {
		if (!this.$popover) {
			this.render();
		}
		let popover = this.$popover;
		if (this.visible) {
			// 通过placement计算出位置
			let rect = this.$el.getBoundingClientRect();
			switch (this.placement) {
				case 'top' :
					this.position.left = rect.x - popover.offsetWidth / 2 + rect.width / 2;
					this.position.top = rect.y - popover.offsetHeight - 8;
					break;
				case 'left':
					this.position.left = rect.x - popover.offsetWidth - 8;
					this.position.top = rect.y + rect.height / 2 - popover.offsetHeight / 2;
					break;
				case 'right':
					this.position.left = rect.x + rect.width + 8;
					this.position.top = rect.y + rect.height / 2 - popover.offsetHeight / 2;
					break;
				case 'bottom':
					this.position.left = rect.x - popover.offsetWidth / 2 + rect.width / 2;
					this.position.top = rect.y + rect.height + 8;
					break;
				default:
					console.log('Wrong placement prop');
			}
			popover.style.top = this.position.top + 'px';
			popover.style.left = this.position.left + 'px';
			popover.classList.add('t-tooltip--visible')
		} else {
			popover.classList.remove('t-tooltip--visible')
		}
	}

	onEvent() {
		if (this.trigger === 'hover') {
			this._mouseenterEvent = EventListener.listen(this.$el, 'mouseenter', () => {
				this.visible = true;
				this.change();
			});
			this._mouseleaveEvent = EventListener.listen(this.$el, 'mouseleave', () => {
				this.visible = false;
				this.change();
			});
		} else if (this.trigger === 'focus') {
			this._focusEvent = EventListener.listen(this.$el, 'focus', () => {
				this.visible = true;
				this.change();
			});
			this._blurEvent = EventListener.listen(this.$el, 'blur', () => {
				this.visible = false;
				this.change();
			});
		} else {
			this._clickEvent = EventListener.listen(this.$el, 'click', () => {
				this.visible = !this.visible;
				this.change();
			});
		}
	}

	destroy() {
		if (this._blurEvent) {
			this._blurEvent.remove();
			this._focusEvent.remove();
		}
		if (this._mouseenterEvent) {
			this._mouseenterEvent.remove();
			this._mouseleaveEvent.remove();
		}
		if (this._clickEvent) this._clickEvent.remove();
		this.$popover.parentNode.removeChild(this.$popover);
	}
}
