const progress = document.querySelector('.progress');
const message = document.querySelector('.message');
const dataFound = document.querySelector('.data-found');
let per = 1;

const loading = setInterval(animate, 100);

function animate() {
  if (per == 100) {
    clearInterval(loading);
    message.classList.add('fade-out');
    message.onanimationend = (e) => {
      if (e.srcElement.classList.contains('fade-out')) {
        message.style.visibility = 'hidden';
        if (dataFound.classList.contains('isHidden')) {
          dataFound.classList.remove('isHidden');
          dataFound.classList.add('fade-in');
        }
      }
    };
  } else {
    per = per + 1;
    progress.style.width = per + '%';
  }
}
