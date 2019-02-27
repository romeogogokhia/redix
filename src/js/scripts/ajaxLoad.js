$(document).ready(function () {
  let page = 1
  let html = ''

  $('.load-more-title').click(function () {
    page++
    loadMoreData(page)
  })

  function loadMoreData (page) {
    $.ajax({
      url: '?page=' + page,
      type: 'get'
    })
      .done(function (data) {
        html = ''

        let isNews = window.location.href.indexOf('news') > -1
        let lang = ''

        if (window.location.href.indexOf('/ka/') > -1) {
          lang = 'ka'
        } else {
          lang = 'en'
        }

        if (data && data.data) {
          $.each(data.data, function (index, value) {
            let cls = index % 2 === 0 ? 'pl-0' : 'pr-0'
            let efect = index % 2 === 0 ? 'fade-left' : 'fade-right'
            let count = ($('.img-wrap-container .m-0 .col-sm-6').length + (index))
            count = (parseInt((count), 10) + 101).toString().substr(1)
            let dateformat = value.created_at

            if (isNews) {
              html += `
                  <div class="col-sm-6 ${cls} aos-init aos-animate" data-aos="${efect}">
                      <a href="/${lang}/news/${value.id}" class="img-wrap mb-30">
                          <span class="date-box">${count}</span>
                          <img class="news-inside-img" src="/public/uploads/images/${value.avatar}" alt="${value.title}">
                          <h2 class="sections-heading">${value.title}</h2>
                          <small class="red-date">${dateformat.slice(0, 10)}</small>
                          <div class="line">
                              <div class="borders line--top"></div>
                              <div class="borders line--right"></div>
                              <div class="borders line--bottom"></div>
                              <div class="borders line--left"></div>
                          </div>
                      </a>
                  </div>
              `
            } else {
              html += `
                  <div class="col-sm-6 pl-0 aos-init aos-animate" data-aos="fade-right">
                      <a href="/${lang}/blog/${value.id}" class="img-wrap mb-30 position-relative">
                          <img class="news-inside-img" src="/public/uploads/images/${value.avatar}" alt="${value.title}">
                          <h2 class="sections-heading">${value.title}</h2>>
                          <div class="time-ago">
                              <small class="time-ago--in">${value.created_at}</small>
                          </div>
                          <div class="line">
                              <div class="borders line--top"></div>
                              <div class="borders line--right"></div>
                              <div class="borders line--bottom"></div>
                              <div class="borders line--left"></div>
                          </div>
                      </a>
                  </div>
              `
            }
          })
          $('.img-wrap-container .m-0 .col-sm-6:last-child').after(html)
          $('.line--top, .line--bottom').css({
            animation: 'background-line-horizontal 2s linear 1s forwards'
          })
          $('.line--right, .line--left').css({
            animation: 'background-line-vertical 2s linear 2s forwards'
          })
        }
      })
      .fail(function (jqXHR, ajaxOptions, thrownError) {
        alert('server nor responding...')
      })
  }
})
