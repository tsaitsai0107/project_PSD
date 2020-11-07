var articles = [
  {
    createDate: "25</br>April",
    updateDate: "08 April 2020",
    title: "IDEAS FOR LIVING ROOMS",
    commentCount: 2,
    content:
      "Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu",
  },
  {
    createDate: "25</br>April",
    updateDate: "08 April 2020",
    title: "IDEAS FOR LIVING ROOMS",
    commentCount: 2,
    content:
      "Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu",
  },
  {
    createDate: "25</br>April",
    updateDate: "08 April 2020",
    title: "IDEAS FOR LIVING ROOMS",
    commentCount: 2,
    content:
      "Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut. Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem. Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu",
  },
];

articles.forEach((article) => {
  const child = document.createElement("div");
  child.className = "article";
  child.innerHTML = `
      <img src="https://dummyimage.com/760x350/e6e3e6/737173" alt="" />
      <div class="text d-flex">
        <div class="date col-2">
          ${article.createDate}
        </div>
        <div class="article-text">
          <h2 class="title">${article.title}</h2>
          <div class="icon-list d-flex">
            <div class="icon-left">
              <i class="far fa-clock"></i>
              ${article.updateDate}
            </div>
            <div class="icon-middle">
              <i class="fas fa-align-justify"></i> Design
            </div>
            <div class="icon-right">
              <i class="fas fa-comment"></i>
              ${article.commentCount} Comments
            </div>
          </div>
        <div class="words">
        ${article.content}
        </div>
        <button>READ MORE</button>
      </div>
  `;
  document.querySelector(".article-list").prepend(child);
});
