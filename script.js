class ProgressAPI {
    constructor(options = {}) {
        this.svg = options.svg;
        this.progressBar = options.progressBar;
        this.container = options.container;
        if (this.progressBar) {
            this.radius = 45;
            this.circumference = 2 * Math.PI * this.radius;
            this.progressBar.style.strokeDasharray = this.circumference;
            this.progressBar.style.strokeDashoffset = this.circumference;
        }
    }
    
    setValue(value) {
        if (!this.progressBar) return this;
        const val = Math.max(0, Math.min(100, value));
        const offset = this.circumference * (1 - val * 0.01);
        this.progressBar.style.strokeDashoffset = offset;
        return this;
    }
    
    setAnimate(state) {
        if (this.svg) {
            this.svg.classList.toggle('animated', state);
        }
        return this;
    }
    
    setHidden(state) {
        if (this.container) {
            this.svg.classList.toggle('hidden', state);
        }
        return this;
    }
}
