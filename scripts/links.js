const baseURL = "https://jacuancum.github.io/wdd230/";
const linksURL = "https://jacuancum.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    /*console.log(data);*/
    displayLinks(data.lessons);
  }
  
  getLinks();

  const displayLinks = (lessons) => {
    const lessonList = document.querySelector('.card');

    lessons.forEach((lesson) => {
        const lessonItem = document.createElement('li');
        const lessonNumber = document.createElement('span');
        lessonNumber.textContent = `Lesson ${lesson.lesson}`;
        lessonItem.appendChild(lessonNumber);

        const linksList = document.createElement('ul');
        lesson.links.forEach((link) => {
            const linkItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            linkItem.appendChild(linkElement);
            linksList.appendChild(linkItem);
        });

        lessonItem.appendChild(linksList);
        lessonList.appendChild(lessonItem);
    });
}
