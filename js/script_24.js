const p = document.querySelectorAll('p')
console.log(p)



function loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    document.body.append(script)
}

loadScript("js/script_32.js")
loadScript('js/script_same.js')