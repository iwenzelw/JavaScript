window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form')

  const message = {
    loading: 'загрузка',
    success: 'Спасибо!Скоро сы с Вами свяжимся',
    failure: 'Что то пошло не так...',
  }

  forms.forEach((item) => {
    postData(item)
  })

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const statusMessege = document.createElement('div')
      statusMessege.classList.add('status')
      statusMessege.textContent = message.loading
      form.append(statusMessege)

      const request = new XMLHttpRequest()
      request.open('POST', 'server.php')

      // request.setRequestHeader('Content-Type', 'multipart/form-data')
      request.setRequestHeader('Content-Type', 'application/json')
      const formData = new FormData(form)

      const object = {}

      formData.forEach(function(value, key) {
          object[key]= value
        })
      
        const json = JSON.stringify(object)

      request.send(json)

      request.addEventListener('load', () => {
        if (request.status === 200) {
          statusMessege.textContent = message.success
          form.reset()
          setTimeout(() => {
            statusMessege.remove()
          }, 2000)
          console.log(request.response)
          console.log(statusMessege.textContent)
        } else {
          statusMessege.textContent = message.failed
          console.log(statusMessege.textContent)
        }
      })
    })
  }
})
