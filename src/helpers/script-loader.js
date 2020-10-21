export default class ScriptLoader {
    constructor (options) {
        const { src, global } = options
        this.src = src
        this.global = global
        this.isLoaded = false
    }

    loadScript () {
        return new Promise((resolve, reject) => {
            // Create script element and set attributes
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.async = true
            script.src = `${this.src}`

            // Append the script to the DOM
            document.body.appendChild(script)

            // Resolve the promise once the script is loaded
            script.addEventListener('load', () => {
                this.isLoaded = true
                resolve(script)
            })

            // Catch any errors while loading the script
            script.addEventListener('error', () => {
                reject(new Error(`${this.src} failed to load.`))
            })
        })
    }

    load () {
        return new Promise(async (resolve, reject) => {
            if (!this.isLoaded) {
                try {
                    await this.loadScript()
                    resolve(window[this.global])
                } catch (e) {
                    reject(e)
                }
            } else {
                resolve(window[this.global])
            }
        })
    }
}
